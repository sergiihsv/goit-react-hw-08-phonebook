import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import authOperations from '../api/authification';

const LoginPage = () => {
  const loginMessage = `Please, enter the login information to use the application.`;

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.loginUser({ email, password }));
    setEmail('');
    setPassword('');
    event.currentTarget.reset();
  };


  const schema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
  });

  return (
    <Box
      component="form"
      sx={{
        
        bgcolor: 'background.main',
        color: 'text.primary',
        p: 3,
      }}
      validate={schema}
      onSubmit={handleSubmit}
    >
      <Typography
        variant="h6"
        component="h2"
        color="inherit"
        sx={{ flexGrow: 1}}
      >
        {loginMessage}
      </Typography>
      <TextField
        id="email"
        label="Enter your email"
        variant="standard"
        sx={{ m:2}}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        id="password"
        type="password"
        label="Enter your password"
        variant="standard"
        sx={{ m:2}}
        onChange={e => setPassword(e.target.value)}
      />
      <Button variant="contained" size="medium" type="submit" sx={{ m:2}}>
        Submit
      </Button>
    </Box>
  );
};

export default LoginPage;