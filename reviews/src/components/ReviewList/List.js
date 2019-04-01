import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { searchReviews, sortReviews, paginateReviews } from '../../helpers';


import { ListWrapper, Loading } from './Styles';
import ReviewCard from './ReviewCard';

function List(props) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
  async function fetchReviews() {
  const response = await axios(
    'https://shakespeare.podium.com/api/reviews', 
    { 'headers': { 'x-api-key':'H3TM28wjL8R4#HTnqk?c' }}
    );

    setReviews(response.data);
  }

  fetchReviews();
  }, []);

  return !reviews.length ? (<Loading>Loading...</Loading>) : (
    <ListWrapper>
      {paginateReviews(sortReviews(searchReviews(reviews, props.searchTerm), props.sortBy, props.sortOrder), props.page, 20).map(review => {
        return (<ReviewCard key={review.id} review={review}/>)
      })}
    </ListWrapper>
  )
}

export default List;

