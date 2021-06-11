import React from 'react'
import MovieCard from './MovieCard'
import '../App.css'

const MovieList = ({movies,textsearch, rateFilter}) => {
    return (
        
        <div className="movieList">
            {movies.filter(el=>el.title.toLowerCase().includes(textsearch.toLowerCase()) && el.rating >= rateFilter).map((movie, i) => (
            
                <MovieCard movie={movie} key={i} />

            ))}

        </div>
    )
}

export default MovieList
