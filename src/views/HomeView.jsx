import Box from '@mui/material/Box';

export const HomeView = () => {
  return (
    <Box
      sx={{
        p: '50px',
        width: '500px',
        m: '250px auto 0',
        background: 'rgba(255, 255, 255, 0.4)',

        borderRadius: '8px',
        boxShadow:
          'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
        textAlign: 'justify',
      }}
    >
      <h1>Hello, wonderful person!</h1>
      <p>This is an app for storing your contacts.</p>
      <p>
        There are three tabs in the nav bar, please use these to navigate the
        site.
      </p>
      <p>
        If it's your first time ever using the service, please fill in the
        registration form, immediately after that you'll be redirected to the
        contacts tab, where you can start saving contacts right away!
      </p>
      <p>If you already have an account, please sign in.</p>
      <p>
        Please note that you won't be able to access your contacts unless you've
        signed in first. If you try to access the contacts tab you'll be
        automatically redirected to the login tab.
      </p>
      <p>May the application we made serve you well!</p>
    </Box>
  );
};
