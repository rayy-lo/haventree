import { Link } from 'react-router';

import { paths } from '@/config/paths.ts';
import { Layout } from '@/components/layout';

const NotFoundRoute = () => {
  return (
    <Layout>
      <div className='mt-52 flex flex-col items-center font-semibold'>
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to={paths.home.getHref()} replace>
          Go to Search
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundRoute;
