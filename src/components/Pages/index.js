import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import './Pages.css';

const Pages = ({ currentPage, getNextPage, getPreviousPage, goToPage, moviesList, state, itemsPerPage, currentMovies }) => {
  const pageNumbers = [];

  if (state.selectCategoryValue === "all") {
    for (let i = 1; i <= Math.ceil(moviesList.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  } else if (state.selectCategoryValue !== "all") {
    for (let i = 1; i <= Math.ceil(currentMovies.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <PaginationItem
        key={number}
        id={number}
        onClick={() => goToPage(`${number}`)}
      >
        <PaginationLink>
          {number}
        </PaginationLink>
      </PaginationItem>
    );
  });

  return (
    <div className="App-Pagination">
      <Pagination
        size="lg"
      >
        <PaginationItem>
          <PaginationLink previous href="#" onClick={getPreviousPage} />
        </PaginationItem>
        {renderPageNumbers}
        <PaginationItem>
          <PaginationLink next href="#" onClick={getNextPage}/>
        </PaginationItem>
      </Pagination>
    </div>
  );
}

export default Pages;