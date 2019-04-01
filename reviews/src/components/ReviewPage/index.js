import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ReviewContainer, Rating, Stars, Quote, Author, ReviewDate, ReturnToList } from './Styles';

import { Loading, NotFound404 } from '../../globalStyles/Styles';

function ReviewPage(props) {

  const [review, setReview] = useState(null);

  useEffect(() => {
  async function fetchReview() {
    try {
      const response = await axios(
      `https://shakespeare.podium.com/api/reviews/${props.match.params.id}`, 
      { 'headers': { 'x-api-key':'H3TM28wjL8R4#HTnqk?c' }}
      );

      setReview(response.data);
    } catch ( error ) {
      setReview('404')
    }
  }

  fetchReview();

 ;
  }, []);
    if (review) {
      return review === "404" ? (
        <NotFound404>
          404 - Not Found 
          <br/> 
          Get Thee Hence!
        </NotFound404>
      ) : (
        <ReviewContainer>
          <Rating>
            <span>{ review.rating }</span>
            <div>
              <Stars rating={ review.rating }>★ ★ ★ ★ ★</Stars>
            </div>
          </Rating>
          <Author>{ review.author }</Author>
          <Quote>“{ review.body }”</Quote>
          <ReviewDate>Reviewed On: { (new Date(review.publish_date)).toDateString() }</ReviewDate>
          <ReturnToList role='link' onClick={_ => props.history.push('/')}>Return to Full List</ReturnToList>
        </ReviewContainer>
      );
    } else {
      return (<Loading>Loading...</Loading>)
    }
    
}

export default ReviewPage;
