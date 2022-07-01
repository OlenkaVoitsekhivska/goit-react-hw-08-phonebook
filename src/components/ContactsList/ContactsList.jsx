import { useSelector } from 'react-redux';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import style from './ContactsList.module.css';

import {
  useGetContactsQuery,
  useDeleteContactMutation,
  useGetContactByNameQuery,
} from 'redux/contacts-Api';

function ContactsList() {
  let filter = useSelector(state => state.contacts.filter);

  const { data: contacts } = useGetContactsQuery();
  const [deletedContact] = useDeleteContactMutation();
  const { data: filtered } = useGetContactByNameQuery(filter);

  const display = filter => {
    if (filter === '') {
      return contacts;
    }
    return filtered;
  };

  let filteredList = display(filter);

  const handleDeleteContact = async id => {
    await deletedContact(id).unwrap();
  };

  return (
    <div className={style.contactsBox}>
      <h2>Contacts</h2>
      <ul>
        {filteredList &&
          filteredList.map(({ id, name, phone }) => {
            return (
              <ContactsItem
                key={id}
                name={name}
                phone={phone}
                onDeleteContact={() => handleDeleteContact(id)}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ContactsList;
