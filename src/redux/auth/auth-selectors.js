const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserEmail
};
export default authSelectors;