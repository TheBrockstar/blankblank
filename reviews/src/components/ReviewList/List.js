import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { ListWrapper, Loading } from './Styles';
import ReviewCard from './ReviewCard';

function List() {
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
      {reviews.map(review => {
        return (<ReviewCard key={review.id} review={review}/>)
      })}
    </ListWrapper>
  )
}

export default List;

