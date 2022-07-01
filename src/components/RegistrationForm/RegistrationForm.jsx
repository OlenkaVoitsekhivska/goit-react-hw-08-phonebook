import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import s from './RegistrationForm.module.css'

const ariaLabel = { 'aria-label': 'description' };

export default function RegistrationForm() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
    //   noValidate
    //   autoComplete="off"
      className ={s.container}
    >
      <Input placeholder = "Name" inputProps={ariaLabel} />
      <Input  placeholder = "E-mail" inputProps={ariaLabel} />
      <Input placeholder = "Password" inputProps={ariaLabel} />

      {/* <Input disabled defaultValue="Disabled" inputProps={ariaLabel} /> */}
   
    </Box>
  );
}
