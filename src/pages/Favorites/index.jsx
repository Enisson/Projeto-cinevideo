import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './favorites.css'

export default function Favorites() {

    const [movie, setMovie] = useState([]);

    useEffect( () => {
        const movieList = localStorage.getItem('filmes');
        setMovie(JSON.parse(movieList) || []);
    }, [] )

    function handleDelete(id){
        let movieFilter = movie.filter( (item) => {
            return (item.id !== id);
        } )

        setMovie(movieFilter);
        localStorage.setItem('filmes', JSON.stringify(movieFilter));
    }

    return (
        <div className="favorite-container">
            <h1>MEUS FILMES</h1>

            {movie.length === 0 && <span>Você não possui nenhum filme salvo no momento... :/</span>}

            <ul>
                {movie.map( (item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.nome}</span>

                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={ () => handleDelete(item.id) }>Excluir</button>    
                            </div>  
                              
                        </li>
                    );
                } )}
            
            </ul>
        </div>
    );
}