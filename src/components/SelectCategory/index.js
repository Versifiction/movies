import React from 'react';
import { Container } from 'reactstrap';

import './SelectCategory.css';

const SelectCategory = ({ moviesList, handleCategoryChange }) => {
  var uniqueArray = function(arrArg) {
    return arrArg.filter(function(elem, pos,arr) {
      return arr.indexOf(elem) === pos;
    });
  };

  const moviesCategories = moviesList.map(movie => movie.category);

  const moviesCategoriesFiltered = uniqueArray(moviesCategories);

  const moviesCategoriesFilteredFinal = moviesCategoriesFiltered.map((category, i) => {
    return <option value={category} key={i}>{category}</option>
  });

  return (
    <div className="App-Select-Category">
      <Container>
        <label
          htmlFor="select-control"
        >
          Choisissez une catégorie
        </label>
        <select
          id="select-control"
          className="select-button"
          onClick={handleCategoryChange}
        >
          <option value="all" defaultValue>Toutes les catégories</option>
          {moviesCategoriesFilteredFinal}
        </select>
      </Container>
    </div>
  );
}

export default SelectCategory;