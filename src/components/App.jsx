// import ContactsList from './ContactsList/ContactsList';
// import Form from './Form/Form';
// import Filter from './Filter/Filter';
import UserMenu from './UserMenu/UserMenu';
// import Inputs from './RegistrationForm/RegistrationForm';
import {Routes, Route} from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import operations from '../redux/auth/auth-operations';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);


  return (
    <Routes>
      <Route path='/' element = {<UserMenu/>}>
        <Route path='login' element = {<LoginForm/>}/>
        <Route path='register' element = {<RegistrationForm/>}/>
        </Route>

    </Routes>
  );
}

export default App;


      /* <Form />
      <Filter />
      <ContactsList /> */