import React, { useState, useRef, useEffect } from 'react';
import usePlanetSearch from '../../hooks/usePlanetSearch';
import AutocompleteInput from './AutocompleteInput';
import SuggestionList from './SuggestionList';
import './Autocomplete.css';

const Autocomplete = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const { planets, isLoading, isError } = usePlanetSearch(debouncedSearchTerm);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setSelectedPlanet(null);
  };

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (event) => {
    if (!containerRef.current.contains(event.relatedTarget)) {
      setIsFocused(false);
    }
  };

  const handleCloseSuggestionList = () => {
    setIsFocused(false);
  };

  return (
    <div className="autocomplete-container" ref={containerRef}>
      <AutocompleteInput
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        inputRef={inputRef}
        selectedPlanet={selectedPlanet}
      />
      {isFocused && (
        <SuggestionList
          isFocused={isFocused}
          searchTerm={searchTerm}
          planets={planets}
          isLoading={isLoading}
          isError={isError}
          handleSelectPlanet={setSelectedPlanet}
          handleCloseSuggestionList={handleCloseSuggestionList}
        />
      )}
    </div>
  );
};

export default Autocomplete;