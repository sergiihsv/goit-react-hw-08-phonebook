import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { Container, TitlePhoneBook, TitleContacts,TitleError, Spinner } from './AppStyled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../redux/filter';
import {
  useGetAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} from 'redux/contacts';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const dispatch = useDispatch();
  const filterContact = useSelector(state => state.filter.value);

  const { data: contacts, error, isFetching } = useGetAllContactsQuery();
  const [createContact, isSuccess] = useAddContactMutation();
  const [deleteContact] = useDeleteContactMutation();

  const showContacts = contacts && !isFetching;
  const errorMessage = 'Sorry , no data found.';

  const contactAntiDuplicator = name => {
    const normalizedName = name.toLowerCase();
    return contacts.some(
      contactName => normalizedName === contactName.name.toLowerCase()
    );
  };

  const addContact = ({ name, number }) => {
    if (contactAntiDuplicator(name)) {
      toast.error(`${name} is already in contacts`);
      return;
    } else {
      createContact({ name, number });
      if (isSuccess) {
        toast.success(`${name} successfully adding in the phonebook`);
      }
    }
  };

  const onFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  let visibleContacts = [];
  const normalizedFilter = filterContact.toLowerCase();
  if (showContacts) {
    visibleContacts = contacts.filter(data =>
      data.name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <Container>
      <TitlePhoneBook>Phonebook</TitlePhoneBook>
      <ContactForm onSubmit={addContact} contacts={contacts} />
      <TitleContacts>Contacts</TitleContacts>
      <ContactFilter filterValue={filterContact} onChange={onFilter} />
      {isFetching && (
        <Spinner
          size={80}
          thickness={180}
          color="rgba(57, 172, 171, 1)"
          secondaryColor="rgba(172, 57, 65, 0.45)"
        />
      )}
      {showContacts && (
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      )}
      {error && <TitleError>{errorMessage}</TitleError>}
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};
