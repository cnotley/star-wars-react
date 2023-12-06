import React from 'react';
import PropTypes from 'prop-types';
import SuggestionItem from './SuggestionItem';

const SuggestionList = ({ isFocused, searchTerm, planets, isLoading, isError, handleSelectPlanet, handleCloseSuggestionList }) => {
  if (!isFocused || !searchTerm) {
    return null;
  }

  let content;

  if (isLoading) {
    content = <li>Loading...</li>;
  } else if (isError) {
    content = <li>Error loading suggestions</li>;
  } else if (!isLoading && planets.length === 0 && searchTerm.length >= 2) {
    content = <li>No planets found</li>;
  } else {
    content = planets.map((planet) => (
      <SuggestionItem key={planet.name} planet={planet} handleSelectPlanet={handleSelectPlanet} handleCloseSuggestionList={handleCloseSuggestionList} />
    ));
  }

  return <ul className="autocomplete-list">{content}</ul>;
};

SuggestionList.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  handleSelectPlanet: PropTypes.func.isRequired,
  handleCloseSuggestionList: PropTypes.func.isRequired,
  
};

export default SuggestionList;