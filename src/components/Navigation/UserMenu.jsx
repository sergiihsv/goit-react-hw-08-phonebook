import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const UserMenu = ({userName,handleLogout}) => {
  return (
    <>
      <Typography
        variant="subtitle1"
        component="p"
        align="right"
        sx={{ flexGrow: 1 }}
      >
        Hello, {userName}
      </Typography>
      <Button color="inherit" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
};