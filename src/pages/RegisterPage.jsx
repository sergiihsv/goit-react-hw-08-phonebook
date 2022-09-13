import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import authOperations from '../api/authification';

const RegisterPage = () => {
  const registrationMessage = `Please, fill out the registration form to use the application.`;

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.addNewUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  //Схема валидации
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  return (
    <Box
      component="form"
      color="inherit"
      sx={{
        width: '100%',
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
        sx={{ flexGrow: 1 }}
      >
        {registrationMessage}
      </Typography>
      <TextField
        id="name"
        label="Enter your name"
        variant="standard"
        sx={{ m: 2 }}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        id="email"
        label="Enter your email"
        variant="standard"
        sx={{ m: 2 }}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        id="password"
        type="password"
        label="Enter your password"
        variant="standard"
        sx={{ m: 2 }}
        onChange={e => setPassword(e.target.value)}
      />
      <Button variant="contained" size="medium" type="submit" sx={{ m: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default RegisterPage;