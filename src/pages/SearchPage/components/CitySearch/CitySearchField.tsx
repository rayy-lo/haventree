import { Box, TextField, Button } from '@mui/material';

type CitySearchFieldProps = {
  query: string;
  onChange: (value: string) => void;
  onClick: () => void;
  onBlur?: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  isFetching: boolean;
  errorMessage: string;
};

export const CitySearchField = ({
  query,
  onChange,
  onClick,
  onBlur,
  onKeyDown,
  isFetching,
  errorMessage,
}: CitySearchFieldProps) => {
  return (
    <Box component='div'>
      <TextField
        onKeyDown={(e) => onKeyDown(e)}
        onBlur={onBlur}
        error={Boolean(errorMessage)}
        fullWidth
        label='City'
        variant='outlined'
        margin='normal'
        placeholder='Enter city name'
        value={query}
        onChange={(e) => onChange(e.target.value)}
        required
        helperText={errorMessage}
      />
      <Button
        type='button'
        onClick={onClick}
        variant='contained'
        color='primary'
        size='large'
        sx={{ mt: 2 }}
        disabled={isFetching || Boolean(errorMessage)}
      >
        Get Weather Forecast
      </Button>
    </Box>
  );
};
