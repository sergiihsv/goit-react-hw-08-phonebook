import propTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactListStyled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, phone, id }) => (
        <ContactItem
          key={id}
          name={name}
          id={id}
          phone={phone}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
 contacts: propTypes.array.isRequired,
  onDelete: propTypes.func.isRequired, 
};
