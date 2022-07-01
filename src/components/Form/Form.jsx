import { useState } from 'react';
import { nanoid } from 'nanoid';

import { useGetContactsQuery, useAddContactMutation } from 'redux/contacts-Api';
import style from './Form.module.css';

function Form() {
  const [input, setInput] = useState({ name: '', phone: '' });

  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleAddContact = async data => {
    await addContact(data).unwrap();
  };

  const handleInputChange = e => {
    let key = e.target.name;
    setInput(prevState => ({ ...prevState, [key]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    let data = { ...input, id: nanoid() };

    let [check] = contacts.filter(el => {
      return el.name.toLowerCase() === data.name.toLowerCase();
    });

    if (check) {
      alert(`${data.name} is already in your contacts`);
    } else {
      handleAddContact(data);
    }
    setInput({ name: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Phonebook</h2>
      <label htmlFor="">
        Name
        <input
          className={style.nameInput}
          onChange={handleInputChange}
          value={input.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="">
        Number
        <input
          className={style.numberInput}
          onChange={handleInputChange}
          value={input.phone}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={style.submitBtn}>
        Add contact
      </button>
    </form>
  );
}

export default Form;
