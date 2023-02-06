import { useRoutes } from 'react-router-dom';
import { privateRoutes } from './private';
import { publicRoutes } from './public';

export default function AppRoutes() {
  const user = { isLoggedIn: false };

  const routes = user.isLoggedIn ? privateRoutes : [];
  const routing = useRoutes([...publicRoutes, ...routes]);
  return <>{routing}</>;
}
