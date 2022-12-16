import { useParams } from "react-router-dom";
import { useSeriesDetail } from "./SeriesDetailPage.hooks";
import styles from './SeriesDetailPage.module.css'

const baseImagePath = 'https://image.tmdb.org/t/p/w500';

const SeriesDetailPage = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useSeriesDetail(id)

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
    <div>
      <div className={styles['container']}>
        <div className={styles['image-container']}>
          <img src={`${baseImagePath}${data.poster_path}`} class="card-img rounded" className={styles['image']}></img>
        </div>
        <div className={styles['content']}>
          <div className={styles['details']}>
            <div>
              <h1 className={styles['highlight']}>{data.original_name}</h1>
              <p>{data.overview}</p>
            </div>

            <div className={styles['text-group']}>
              <div className={styles['text-group-key']}>
                <h5>Number of Seasons</h5>
                <h5>Number of Episodes</h5>
                <h5>Production Countries</h5>
              </div>
              <div className={styles['text-group-value']}>
                <h5>: {data.number_of_seasons}</h5>
                <h5>: {data.number_of_episodes}</h5>
                <h5>: {data.production_countries.map(c => c.name).join(',')}</h5>
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
    </div>
  )
}

export default SeriesDetailPage;