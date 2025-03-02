import { Typography, Link, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { LocationOn } from '@mui/icons-material';
import { paths } from '@/config/paths';

import { Location } from '../../types/api';

type CitySearchResultsProps = {
  locations: Location[];
  isFetched: boolean;
};

export const CitySearchResults = ({
  locations,
  isFetched,
}: CitySearchResultsProps) => {
  if (isFetched && locations.length === 0) {
    return (
      <Box component='div' sx={{ mt: 2 }}>
        <Typography variant='body1' color='text.secondary'>
          No results for your search
        </Typography>
      </Box>
    );
  }

  return (
    <Box component='div' sx={{ mt: 2 }}>
      <Box component='nav' sx={{ mt: 2, display: 'flex' }}>
        {locations.map((location) => (
          <Link
            key={location.id}
            component={RouterLink}
            to={paths.forecast.getHref(location.name)}
          >
            <LocationOn />
            {location.name}, {location.country}
          </Link>
        ))}
      </Box>
    </Box>
  );
};
