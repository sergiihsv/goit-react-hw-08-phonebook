import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Overlay, Modal } from './ModalStyled';
import { phoneBookApi } from '../../redux/phoneBookRTK';

//Делаем портал для рендера модалки
const modalRoot = document.querySelector('#modal-root');

const AddContactModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [createContact] = phoneBookApi.useAddContactMutation();

  //Вешаем/снимаем слушатель событий при нажатии клавиши Escape
  const handleEsc = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });

  const handleBackDrop = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  //При сабмите формы отправляем новый контакт на бек
  const handleSubmit = event => {
    event.preventDefault();
    createContact({ name, number });
    setName('');
    setNumber('');
    onClose();
  };

  return createPortal(
    <Overlay onClick={handleBackDrop}>
      <Modal>
        <Box
          component="form"
          color="inherit"
          sx={{
            width: '100%',
            bgcolor: 'background.main',
            color: 'text.primary',
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            id="name"
            label="Enter contact name"
            variant="standard"
            sx={{ m: 2 }}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            id="number"
            label="Enter contact number"
            variant="standard"
            sx={{ m: 2 }}
            onChange={e => setNumber(e.target.value)}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              ml: 1,
            }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              ml: 1,
            }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </Overlay>,
    modalRoot
  );
};

export default AddContactModal;