import { paths } from '@/config/paths';

export const AppFallbackError = () => {
  return (
    <div>
      <p>Something went wrong!</p>
      <a href={`${paths.home}`}>Go back to the home page</a>
    </div>
  );
};
