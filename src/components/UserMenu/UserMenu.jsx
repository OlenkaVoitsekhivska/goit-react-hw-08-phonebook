import authOperations from 'redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from 'redux/selectors';
import { useNavigate } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const logged = useSelector(isLoggedIn);
  const userEmail = useSelector(authSelectors.getUserEmail);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (logged) {
      dispatch(authOperations.logOut());
      navigate('/', { replace: true });
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        width: '400px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <h3>{userEmail}</h3>
      <Button
        onClick={handleLogout}
        type="button"
        size="small"
        variant="contained"
        color="success"
        sx={{
          height: 'fit-content',
        }}
      >
        Log out
      </Button>
    </Box>
  );
};

export default UserMenu;