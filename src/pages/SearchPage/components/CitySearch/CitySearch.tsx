import { useState } from 'react';

import { useGetLocation } from '@/pages/SearchPage/api/get-location';
import { CitySearchField } from './CitySearchField';
import { CitySearchResults } from './CitySearchResults';
import { cityFieldSchema } from '../../utils/schema';
import { Location } from '../../types/api';

export const CitySearch = () => {
  const [query, setQuery] = useState('');
  const [locations, setLocations] = useState<Location[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const { isFetching, refetch, isFetched } = useGetLocation(
    { q: query },
    { enabled: false }
  );

  const handleBlur = () => {
    const result = cityFieldSchema.safeParse(query);

    if (!result.success) {
      const message = result.error.issues[0].message;
      setErrorMessage(message);
    }
  };

  const handleSearch = async () => {
    const result = cityFieldSchema.safeParse(query);

    if (result.success) {
      const { data } = await refetch();

      setLocations(data);
    } else {
      const message = result.error.issues[0].message;
      setErrorMessage(message);
    }
  };

  const handleChange = (query: string) => {
    if (errorMessage) {
      setErrorMessage('');
    }
    setQuery(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <>
      <CitySearchField
        onKeyDown={handleKeyDown}
        errorMessage={errorMessage}
        isFetching={isFetching}
        onBlur={handleBlur}
        query={query}
        onChange={handleChange}
        onClick={handleSearch}
      />
      <CitySearchResults isFetched={isFetched} locations={locations} />
    </>
  );
};
