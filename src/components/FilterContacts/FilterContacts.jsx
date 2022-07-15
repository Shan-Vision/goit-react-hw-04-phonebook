import { FilterBox, FilterLabel, FilterInput } from './FilterContacts.styled';
import PropTypes from 'prop-types';

function FilterContacts({ onChange }) {
  return (
    <FilterBox>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput onChange={onChange} />
    </FilterBox>
  );
}

FilterContacts.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default FilterContacts;
