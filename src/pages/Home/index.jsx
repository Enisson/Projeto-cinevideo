import api from '../../services/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './home.css'

export default function Home() {

    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        
       async function loadMovie() {
            const response = await api.get('r-api/?api=filmes');
            setMovie(response.data);
        };

        loadMovie();
    }, [])

    return (
        <div className='container'>
            {movie.map( (movie) => {
                return (
                    <article key={movie.id}>
                        <img className='img' src={movie.foto} alt={movie.nome} />
                        <div className='content'>
                            <h2 className='name'>{movie.nome}</h2>
                            <p className='sinopse'>{movie.sinopse}</p>
                            <Link className='btn' to={`/filme/${movie.id}`}>ACESSAR</Link>
                        </div>
                    </article>
                );
            } )}
        </div>
    );
};