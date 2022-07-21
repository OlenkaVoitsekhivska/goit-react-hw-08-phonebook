import Navigation from './Navigation/Navigation';

import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import operations from '../redux/auth/auth-operations';
import PrivateRoute from './routes/PrivateRoute';
import ContactsView from 'views/ContactsView';
import PublicRoute from './routes/PublicRoute';
import { HomeView } from 'views/HomeView';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
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
      </Route>
    </Routes>
  );
}

export default App;
