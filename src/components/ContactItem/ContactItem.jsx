import propTypes from 'prop-types';
import { Item, DelButton } from './ContactItemStyled';

export const ContactItem = ({ id, name, phone, onDelete }) => {
  return (
    <Item>
      <span>{name}:</span>
      <span>{phone}</span>
      <DelButton type="button" onClick={() => onDelete(id)}>
        Delete
      </DelButton>
    </Item>
  );
};

ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  phone: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};
