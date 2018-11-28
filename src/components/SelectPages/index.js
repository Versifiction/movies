import React from 'react';
import { Container } from 'reactstrap';

import './SelectPages.css';

const SelectPages = ({ handlePagesChange }) => {
  return (
    <div className="App-Select-Pages">
      <Container>
        <label
          htmlFor="select-control"
        >
          Choisissez un nombre de films par page
        </label>
        <select
          id="select-control"
          className="select-button"
          onClick={handlePagesChange}
        >
          <option value="3" defaultValue>3</option>
          <option value="6" defaultValue>6</option>
          <option value="9" defaultValue>9</option>
        </select>
      </Container>
    </div>
  );
}

export default SelectPages;