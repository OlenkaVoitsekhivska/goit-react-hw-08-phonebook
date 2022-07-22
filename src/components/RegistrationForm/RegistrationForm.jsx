import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';

import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

import ContactsView from 'views/ContactsView';


import authOperations from 'redux/auth/auth-operations';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const isLogged = useSelector(isLoggedIn);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
  };
  return isLogged ? (
    <ContactsView />
  ) : (
    <form
      onSubmit={handleSubmit}
      style={{
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '250px auto 0',
        padding: '50px 0',
        background: 'rgba(255, 255, 255, 0.4)',

        borderRadius: '8px',
        boxShadow:
          'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
      }}
    >
      <Input
        placeholder="Name"
        name="name"
        onChange={handleChange}
        value={name}
        sx={{ mb: '25px', width: '60%' }}
      />
      <Input
        placeholder="E-mail"
        name="email"
        onChange={handleChange}
        value={email}
        sx={{ mb: '25px', width: '60%' }}
      />
      <Input
        placeholder="Password"
        name="password"
        onChange={handleChange}
        value={password}
        sx={{ mb: '25px', width: '60%' }}
        minLength='7'
      />

      <Button
        type="submit"
        variant="contained"
        size="medium"
        sx={{ width: '25%' }}
      >
        Register
      </Button>
    </form>
  );
}
