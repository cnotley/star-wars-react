import React from 'react';
import PropTypes from 'prop-types';

const AutocompleteInput = ({ searchTerm, handleInputChange, handleFocus, handleBlur, inputRef, selectedPlanet }) => {
  const inputValue = selectedPlanet ? selectedPlanet.name : searchTerm;

  return (
    <input
      type="text"
      placeholder="Search for a Star Wars planet"
      value={inputValue}
      onChange={handleInputChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      ref={inputRef}
      className="autocomplete-input"
      aria-label="Search planets"
    />
  );
};

AutocompleteInput.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  inputRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]).isRequired
};

export default AutocompleteInput;
