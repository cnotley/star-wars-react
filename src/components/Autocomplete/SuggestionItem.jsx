import React from 'react';
import PropTypes from 'prop-types';
import './SuggestionItem.css';

const SuggestionItem = ({ planet, handleSelectPlanet, handleCloseSuggestionList }) => {
  const handleMouseDown = (event) => {
    event.preventDefault();
    handleSelectPlanet(planet);
    handleCloseSuggestionList();
  };

  return (
    <li onMouseDown={handleMouseDown} className="suggestion-item">
      {planet.name}
    </li>
  );
};

SuggestionItem.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleSelectPlanet: PropTypes.func.isRequired,
  handleCloseSuggestionList: PropTypes.func.isRequired,
};

export default SuggestionItem;
