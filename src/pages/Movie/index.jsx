import './movie.css'

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function Movie() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [ movie, setMovie ] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovie(){
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if(response.data.length === 0) {
                navigate('/');
                return;
            }

            setMovie(response.data);
            setLoading(false);  
        }

        loadMovie();
    }, [id, navigate]);


    function addToList() {
        const myList = localStorage.getItem('filmes');

        let storageMovie = JSON.parse(myList) || [];

        const hasMovie = storageMovie.some( (has) => has.id === movie.id )

        if (hasMovie) {
            alert("Você já possui este filme salvo.")
            return;
        }

        storageMovie.push(movie);
        localStorage.setItem('filmes' , JSON.stringify(storageMovie));
        alert('Filme salvo com sucesso!');
    }

    if(loading) {
        return (
            <div  className='movie-container'>
                <h1>Carregando detalhes do filme...</h1>
            </div>
        );
    }

    return (
        <div className='movie-container'>
            <div className='movie-sinopse'>
                <div className='movie-content'>
                    <h1>{movie.nome}</h1>
                    <h2>SINOPSE</h2>
                    <p>{movie.sinopse}</p>
                </div>

                <div className="movie-btn">
                    <button className='btn-add' onClick={ addToList }>ADICIONAR À LISTA</button>
                    <button className='btn-trailer'>
                    <a href={`https://www.youtube.com/results?search_query=${movie.nome} trailer`}  target="_blank" rel='noreferrer'>TRAILER</a>
                    </button>
                    
                     
                </div>
            </div>

            <img className='movie-img' src={movie.foto} alt={movie.nome} />

        </div>
    );
};