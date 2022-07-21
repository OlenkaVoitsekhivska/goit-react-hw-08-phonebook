import { useState } from 'react';

import contactsOperations from 'redux/contacts/contacts-operations';

import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

function Form() {
  const [input, setInput] = useState({ name: '', number: '' });
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleInputChange = e => {
    let key = e.target.name;
    setInput(prevState => ({ ...prevState, [key]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    let data = { ...input };
    console.log(data);
    let [check] = contacts.filter(el => {
      return el.name.toLowerCase() === data.name.toLowerCase();
    });

    if (check) {
      alert(`${data.name} is already in your contacts`);
    } else {
      dispatch(contactsOperations.addContact(data));
    }
    setInput({ name: '', number: '' });
  };

  return (
    <Box
      sx={{
        width: '500px',
        height: '300px',

        textAlign: 'center',
        position: 'sticky',
        top: '250px',

        mt: '250px',

        background: 'rgba(255, 255, 255, 0.4)',

        borderRadius: '8px',
        boxShadow:
          'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
      }}
    >
      <h2>Phonebook</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <label htmlFor="name">
          Name
          <Input
            id="name"
            onChange={handleInputChange}
            value={input.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
 
          />
        </label>
        <label htmlFor="number">
          Number
          <Input
            id="number"
            onChange={handleInputChange}
            value={input.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <Button
          type="submit"
          variant="contained"
          size="medium"
          sx={{ mt: '25px', width: 'fit-content' }}
        >
          Add contact
        </Button>
      </form>
    </Box>
  );
}

export default Form;
