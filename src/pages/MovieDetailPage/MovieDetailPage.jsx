import { useParams } from "react-router-dom";
import { useMovieDetail } from "./MovieDetailPage.hooks";
import styles from './MovieDetailPage.module.css'

const baseImagePath = 'https://image.tmdb.org/t/p/w500';

const MovieDetailPage = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useMovieDetail(id)

  if (isLoading || isError) {
    return (
      <div className={styles['loading']}>
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles['container']}>
      <div className={styles['image-container']}>
        <img src={`${baseImagePath}${data.poster_path}`} class="card-img rounded" className={styles['image']}></img>
      </div>
      <div className={styles['content']}>
        <div className={styles['details']}>
          <div>
            <h1 className={styles['highlight']}>{data.original_title}</h1>
            <p>{data.overview}</p>
          </div>

          <div className={styles['text-group']}>
            <div className={styles['text-group-key']}>
              <h5>Release Date</h5>
              <h5>Runtime</h5>
              <h5>Rating</h5>
            </div>
            <div className={styles['text-group-value']}>
              <h5>: {data.release_date}</h5>
              <h5>: {data.runtime}</h5>
              <h5>: {data.vote_average}</h5>
            </div>
          </div>
        </div>

        <div className={styles['content-footer']}>
          <div className={styles['detail-container']}>
            <h4>Spoken Language</h4>
            <div className={styles['btn-group']}>
              {data.spoken_languages.map((lang, i) => {
                if (lang.name == '') return
                return (
                  <button type="button" class="btn btn-primary" key={i}>{lang.name}</button>
                )
              })}
            </div>
          </div>
          <div className={styles['detail-container']}>
            <h4>Genre</h4>
            <div className={styles['btn-group']}>
              {data.genres.map((genre, i) => <button type="button" class="btn btn-primary" key={i}>{genre.name}</button>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailPage;