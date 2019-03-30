import React from 'react';

const ReviewCard = props => {
  return (
  <article>
    <h1>Author: { props.review.author }</h1>
    <p>{ props.review.body }</p>
  </article>
  )
}

export default ReviewCard