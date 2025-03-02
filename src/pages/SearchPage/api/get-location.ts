import { useQuery } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import { Location, SearchAPIParams } from '../types/api';

const getLocation = (query: SearchAPIParams): Promise<Location[]> => {
  const path = '/search.json';
  return api.get(path, { params: query });
};

export const useGetLocation = (query: SearchAPIParams, queryConfig = {}) => {
  const { q: queryValue } = query;
  return useQuery({
    queryKey: ['location', queryValue],
    queryFn: () => getLocation(query),
    ...queryConfig,
  });
};
