import { useRoutes } from "react-router-dom";
import { privateRoutes } from "./private";
import { publicRoutes } from "./public";


export default function AppRoutes() {
  const user = { isLoggedIn: false}

  const routes = user.isLoggedIn ? privateRoutes : publicRoutes;
  const routing = useRoutes([...routes]);
  return <>{routing}</>;
}