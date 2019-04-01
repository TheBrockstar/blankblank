import React, { useState } from 'react';

import { ListContainer } from './Styles';

import List from './List';
import ToolBar from './ToolBar';

function ReviewList() {
  const [searchTerm, setSearch] = useState("");
  const [sortBy, setSort] = useState("rating");
  const [sortOrder, setOrder] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <ListContainer>
      <ToolBar 
      search={setSearch}
      sort={setSort}
      order={setOrder}
      sortOrder={sortOrder}
      setPage={setPage}
      page={page}
      />
      <List 
      searchTerm={searchTerm}
      sortBy={sortBy}
      sortOrder={sortOrder}
      page={page}
      />
    </ListContainer>
  )
}

export default ReviewList;

