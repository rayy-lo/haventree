import { z } from 'zod';

export const cityFieldSchema = z
  .string()
  .min(3, 'City name must be at least 3 characters') // Ensure the input is not empty
  .regex(/^[A-Za-z\s]+$/, 'City name must contain only letters and spaces');
