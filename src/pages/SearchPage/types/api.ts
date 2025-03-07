export type Location = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
};

export type SearchAPIParams = {
  q: string;
};
