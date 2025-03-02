export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },
  forecast: {
    path: '/forecast/:city',
    getHref: (city: string) => `/forecast/${city}`,
  },
};
