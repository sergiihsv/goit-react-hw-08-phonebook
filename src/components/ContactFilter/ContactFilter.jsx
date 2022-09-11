import propTypes from 'prop-types';
import { FilterBox, FilterInput } from './ContactFilterStyled';
import { FormLabel } from '../ContactForm/ContactFormStyled';

export const ContactFilter = ({ filterValue, onChange }) => {
  return (
    <FilterBox>
      <FormLabel htmlFor="filter">Find contacts by name</FormLabel>
      <div>
        <FilterInput
          type="text"
          name="filter"
          value={filterValue}
          onChange={onChange}
        />
      </div>
    </FilterBox>
  );
};

ContactFilter.propTypes = {
  onChange: propTypes.func,
  filterValue: propTypes.string,
};
