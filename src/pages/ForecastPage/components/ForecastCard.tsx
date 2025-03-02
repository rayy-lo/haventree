import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  CardHeader,
} from '@mui/material';
import { WbSunny, Cloud, Opacity } from '@mui/icons-material';

export const ForecastCard = ({ forecastDay }) => {
  const date = new Date(forecastDay.date);
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  const { day } = forecastDay;
  const srCardContent = `${Math.round(day.avgtemp_c)}°C - Condition: ${
    day.condition.text
  } - High: ${Math.round(day.maxtemp_c)}°C - Low: ${Math.round(
    day.mintemp_c
  )}°C - Rain chance: ${day.daily_chance_of_rain}%`;

  return (
    <Card
      elevation={2}
      component='article'
      aria-labelledby={`forecast-${forecastDay.date}`}
    >
      <CardHeader
        id={`forecast-${forecastDay.date}`}
        title={<Typography variant='h6'>{formattedDate}</Typography>}
      />
      <CardContent tabIndex={0} aria-label={srCardContent}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <img
            src={day.condition.icon}
            alt={day.condition.text}
            width={54}
            height={54}
          />
          <Typography variant='h4' component='div' sx={{ ml: 2 }}>
            <span>{Math.round(day.avgtemp_c)}°C</span>
          </Typography>
        </Box>

        <Typography variant='body2' color='text.secondary' gutterBottom>
          {day.condition.text}
        </Typography>

        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip
            size='small'
            icon={<WbSunny aria-hidden='true' />}
            label={`High: ${Math.round(day.maxtemp_c)}°C`}
            color='primary'
          />
          <Chip
            size='small'
            icon={<Cloud aria-hidden='true' />}
            label={`Low: ${Math.round(day.mintemp_c)}°C`}
            variant='outlined'
          />
          <Chip
            size='small'
            icon={<Opacity aria-hidden='true' />}
            label={`Rain chance: ${day.daily_chance_of_rain}%`}
            variant='outlined'
          />
        </Box>
      </CardContent>
    </Card>
  );
};
