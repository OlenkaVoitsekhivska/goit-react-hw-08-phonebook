import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedIn } from 'redux/selectors';

export default function PrivateRoute() {
  const logged = useSelector(isLoggedIn);

  return logged ? <Outlet /> : <Navigate to="login" replace />;
}
