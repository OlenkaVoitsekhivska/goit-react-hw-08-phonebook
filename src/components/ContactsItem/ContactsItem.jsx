import style from './ContactsItem.module.css';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function ContactsItem({ name, number, onDeleteContact }) {
  return (
    <Box
      element="li"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: '15px',
        borderBottom: '2px solid #a6a4a1',
      }}
    >
      <Box>
        <p className={style.contName}>{name}</p>
        <p className={style.contNumber}>{number}</p>
      </Box>
      <Button
        onClick={onDeleteContact}
        variant="contained"
        size="small"
        sx={{
          height: 'fit-content',
        }}
      >
        delete
      </Button>
    </Box>
  );
}
ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
