import { useQuery } from 'react-query';
import seriesRepository from '../../repository/SeriesRepository';

export const useSearchSeries = (searchText) => {
  return useQuery({
    queryKey: ['movies', searchText],
    refetchOnMount: false,
    cacheTime: 0,
    enabled: true,
    queryFn: () => {
      if (searchText) {
        return seriesRepository.search(searchText)
      }

      return seriesRepository.getPopular()
    }
  });
}