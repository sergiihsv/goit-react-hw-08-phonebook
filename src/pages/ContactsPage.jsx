import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ContactsPageItems } from '../components/ContactsPageItem';
import AddContactModal from '../components/Modal/AddContactModal';
import { FilterSection } from '../components/Filter/FilterSection';
import { filterContacts } from '../redux/filter';
import {phoneBookApi} from '../redux/phoneBookRTK';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { data: contacts} = phoneBookApi.useGetAllContactsQuery();
  const [showAddingModal, setShowAddingModal] = useState(false);

  const toggleAddingModal = () => {
    setShowAddingModal(!showAddingModal);
  };

  const filterContact = useSelector(state => state.filter.value);

  const changeFilter = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };

  let visibleContacts = [];
  const normalizedFilter = filterContact.toLowerCase();
  if (contacts) {
    visibleContacts = contacts.filter(data =>
      data.name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.main',
        color: 'text.primary',
        p: 3,
      }}
    >
      <Button
        variant="contained"
        endIcon={<AddCircleOutlineIcon />}
        onClick={toggleAddingModal}
      >
        Add new contact
      </Button>
      <FilterSection changeFilter={changeFilter} />
      {!contacts && (
        <Typography
          variant="h6"
          component="h2"
          color="inherit"
          sx={{ flexGrow: 1 }}
        >
          You have no contacts yet
        </Typography>
      )}
      <ContactsPageItems data={visibleContacts} />
      {showAddingModal && <AddContactModal onClose={toggleAddingModal} />}
    </Box>
  );
};

export default ContactsPage;