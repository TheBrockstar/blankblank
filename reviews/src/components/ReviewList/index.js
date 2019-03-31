import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ListContainer } from './Styles';

import List from './List';
import ToolBar from './ToolBar';

function ReviewList() {

  return (
    <ListContainer>
      <ToolBar/>
      <List />
    </ListContainer>
  )
}

export default ReviewList;

