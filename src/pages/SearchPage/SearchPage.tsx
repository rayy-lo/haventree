import { Typography, Container, Paper } from '@mui/material';

import { Layout } from '@/components/layout';
import { CitySearch } from './components/CitySearch/CitySearch';

const SearchPage = () => {
  return (
    <Layout>
      <Container maxWidth='md'>
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography component='h1' variant='h4' gutterBottom>
            14-Day Weather Forecast
          </Typography>
          <Typography variant='body1' color='text.secondary' sx={{ mb: 4 }}>
            Enter a city name to get detailed weather information for the next
            14 days
          </Typography>
          <CitySearch />
          <Typography variant='body2' color='text.secondary' sx={{ mt: 4 }}>
            💡 We'll recommend you locations based on your search
          </Typography>
        </Paper>
      </Container>
    </Layout>
  );
};

export default SearchPage;
