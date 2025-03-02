/* eslint-disable @typescript-eslint/no-explicit-any */

enum ValidDays {
  One = 1,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven,
  Twelve,
  Thirteen,
  Fourteen,
}

export type ForecastParams = { q: string; days: ValidDays };

export type ForecastResponse = {
  location: any;
  current: any;
  forecast: any;
};
