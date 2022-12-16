import React from 'react';
import MovieItem from '../../components/MovieItem/MovieItem';
import { useSearchStore } from '../../stores/MovieStores';
import { useSearchSeries } from './SeriesPage.hooks';
import styles from './SeriesPage.module.css'
import { useNavigate } from 'react-router-dom';

const SeriesPage = () => {
  const navigate = useNavigate();
  const search = useSearchStore(state => state.search);
  const { data, isLoading, isError } = useSearchSeries(search)

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
      <div className={styles['wrapper']}>
        {
          data.map((movie, i) => {
            return <div className={styles['box']} key={i}>
              <MovieItem movie={movie} onClick={() => navigate(`/series/${movie.id}`)} />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default SeriesPage;