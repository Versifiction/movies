import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import './Pages.css';

const Pages = () => {
  return (
    <div className="App-Pagination">
      <Pagination
        size="lg"
      >
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    </div>
  );
}

export default Pages;