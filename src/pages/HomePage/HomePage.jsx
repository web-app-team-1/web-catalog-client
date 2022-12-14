import React from 'react';
import MovieItem from '../../components/MovieItem/MovieItem';
import { useSearchStore } from '../../stores/MovieStores';
import { useSearchMovies } from './HomePage.hooks';
import styles from './HomePage.module.css'

const HomePage = () => {
  const search = useSearchStore(state => state.search);
  const { data, isLoading, isError } = useSearchMovies(search)

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
              <MovieItem movie={movie} />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default HomePage;