import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MovieItem.module.css'

const baseImagePath = 'https://image.tmdb.org/t/p/w200';

const MovieItem = ({ movie, onClick }) => {
  return (
    <div className={styles['container']} onClick={onClick}>
      <img src={`${baseImagePath}${movie.poster_path}`} class="card-img rounded"></img>
    </div>
  )
}

export default MovieItem;