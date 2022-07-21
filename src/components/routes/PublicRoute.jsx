import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedIn } from 'redux/selectors';

export default function PublicRoute({ restricted = false, navigateTo = '/' }) {
  const logged = useSelector(isLoggedIn);
  const shouldRedirect = logged && restricted;
  return shouldRedirect ? <Navigate to={navigateTo} /> : <Outlet />;
}
