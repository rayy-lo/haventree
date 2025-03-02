import { Layout } from '@/components/layout';
import {
  Container,
  Typography,
  Grid2 as Grid,
  Box,
  Button,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router';

import { useGetForecast } from './api/get-forecast';
import { ForecastCard } from './components/ForecastCard';

const ForecastPage = () => {
  const { city } = useParams();
  const navigate = useNavigate();

  const { data } = useGetForecast({ q: city!, days: 14 });

  return (
    <Layout>
      <Container maxWidth='xl'>
        <Box sx={{ mb: 4 }}>
          <Button
            aria-label='Back to Home'
            startIcon={<ArrowBack />}
            onClick={() => navigate(-1)}
            sx={{ mb: 2 }}
            variant='contained'
          >
            Back
          </Button>
          <Typography component='h1' variant='h4' gutterBottom>
            {city}
          </Typography>
          <Typography color='text.secondary'>
            14-Day Weather Forecast
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {data?.forecast.forecastday.map((forecastDay) => (
              <ForecastCard forecastDay={forecastDay} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default ForecastPage;
