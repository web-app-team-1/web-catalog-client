import { useQuery } from 'react-query';
import movieRepository from '../../repository/MovieRepository';
import seriesRepository from '../../repository/SeriesRepository';

export const useSeriesDetail = (id) => {
  return useQuery({
    queryKey: ['movie', id],
    refetchOnMount: false,
    cacheTime: 0,
    enabled: true,
    queryFn: () => seriesRepository.getDetailById(id)
  });
}