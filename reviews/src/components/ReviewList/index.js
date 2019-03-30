import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReviewList() {
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

  return !reviews.length ? (<p>Loading...</p>) : (
    <div>
      {reviews.map(review => {
        return (<h1 key={review.id}>{review.body}</h1>)
      })}
    </div>
  )
}

export default ReviewList;

