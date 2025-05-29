import React from 'react'

const Movie_Card =({movie}) => {

    function FavoriteClick(){
        alert("Active");
    }
  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className='movie-overlay'>
                <button className='favorite-btn' onClick={FavoriteClick} >
                    💗
                </button>
            </div>
        </div>

        <div className='movie-info'>
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
        </div>
    </div>
  )
}

export default Movie_Card