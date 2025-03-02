import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material';
import { WbSunny } from '@mui/icons-material';
import { Link } from 'react-router';

import { paths } from '@/config/paths';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position='sticky'>
        <Toolbar>
          <Link
            to={paths.home.path}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <WbSunny color='inherit' sx={{ mr: 2 }} />
            <Typography variant='h6' component='div'>
              Weatherly
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>

      <Container
        component='main'
        sx={{
          flex: 1,
          py: { xs: 2, sm: 4, md: 6 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {children}
      </Container>

      <Box
        component='footer'
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: 'primary.light',
          color: 'primary.contrastText',
        }}
      >
        <Container maxWidth='lg'>
          <Typography variant='body2' align='center'>
            © {new Date().getFullYear()} Weatherly. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};
