import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ListContainer } from './Styles';

import List from './List';

function ReviewList() {

  return (
    <ListContainer>
      <List />
    </ListContainer>
  )
}

export default ReviewList;

