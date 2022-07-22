import Navigation from './Navigation/Navigation';

import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import operations from '../redux/auth/auth-operations';
import PrivateRoute from './routes/PrivateRoute';
import ContactsView from 'views/ContactsView';
import PublicRoute from './routes/PublicRoute';
import { HomeView } from 'views/HomeView';
import { Navigate } from 'react-router-dom';
import { isFetchingUser } from 'redux/selectors';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './Spinner/Spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function App() {
  const dispatch = useDispatch();

  const isFetchingUserRefresh = useSelector(isFetchingUser);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return isFetchingUserRefresh ? (
    <Spinner />
  ) : (
    <>
      <Navigation />
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route element={<PublicRoute restricted navigateTo="contacts" />}>
          <Route path="login" element={<LoginForm />} />
        </Route>

        <Route element={<PublicRoute restricted navigateTo="contacts" />}>
          <Route path="register" element={<RegistrationForm />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="contacts" element={<ContactsView />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
