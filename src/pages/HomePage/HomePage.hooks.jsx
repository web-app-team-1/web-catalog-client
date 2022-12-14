import { useQuery } from 'react-query';
import movieRepository from '../../repository/MovieRepository';

export const useSearchMovies = (searchText) => {
  return useQuery({
    queryKey: ['movies', searchText],
    refetchOnMount: false,
    cacheTime: 0,
    enabled: true,
    queryFn: () => {
      if (searchText) {
        return movieRepository.search(searchText)
      }

      return movieRepository.getPopular()
    }
  });
}