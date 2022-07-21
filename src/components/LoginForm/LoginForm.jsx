import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import authOperations from 'redux/auth/auth-operations';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Input from '@mui/material/Input';

import { isLoggedIn } from 'redux/selectors';
import ContactsView from 'views/ContactsView';

export default function LoginForm() {
  const dispatch = useDispatch();
  const isLogged = useSelector(isLoggedIn);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
  };

  return isLogged ? (
    <ContactsView />
  ) : (
    <Box
      sx={{
        width: '500px',
        m: '250px auto 0',
        pt: '25px',
        background: 'rgba(255, 255, 255, 0.4)',

        borderRadius: '8px',
        boxShadow:
          'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
      }}
    >
      <Box component="h3" sx={{ textAlign: 'center' }}>
        To view your contacts please sign in
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pb: '25px',
        }}
      >
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
          sx={{ width: '60%' }}
        />

        <Button
          type="submit"
          variant="contained"
          size="medium"
          sx={{ mt: '25px', width: '25%' }}
        >
          Sign in
        </Button>
      </Box>
    </Box>
  );
}
