import { useDispatch, useSelector } from 'react-redux';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import contactsOperations from 'redux/contacts/contacts-operations';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import style from './ContactsList.module.css';
import { useEffect } from 'react';

function ContactsList() {
  const dispatch = useDispatch();
  let filter = useSelector(contactsSelectors.getFilter);
  let list = useSelector(contactsSelectors.getAllContacts);

  const display = filter => {
    if (filter === '') {
      return list;
    }
    const normalizedFilter = filter.toLowerCase();
    return list.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id =>
    dispatch(contactsOperations.deleteContact(id));

  let filteredList = display(filter);

  return (
    <div className={style.contactsBox}>
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <ul>
        {filteredList &&
          filteredList.map(({ id, name, number }) => {
            return (
              <ContactsItem
                key={id}
                name={name}
                number={number}
                onDeleteContact={() => handleDeleteContact(id)}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ContactsList;
