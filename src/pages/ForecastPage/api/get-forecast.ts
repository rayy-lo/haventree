import { useQuery } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import { ForecastParams, ForecastResponse } from '../types/api';

const getForecast = (query: ForecastParams): Promise<ForecastResponse> => {
  const path = '/forecast.json';
  return api.get(path, { params: query });
};

export const useGetForecast = (query: ForecastParams, queryConfig = {}) => {
  const { q: queryValue } = query;
  return useQuery({
    queryKey: ['forecast', queryValue],
    queryFn: () => getForecast(query),
    ...queryConfig,
  });
};
