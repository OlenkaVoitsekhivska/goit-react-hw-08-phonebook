import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import Box from '@mui/material/Box';
const ContactsView = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        ml: 'auto',
        mr: 'auto',
      }}
    >
      <Form />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: '250px',
        }}
      >
        <Filter />
        <ContactsList />
      </Box>
    </Box>
  );
};
export default ContactsView;
