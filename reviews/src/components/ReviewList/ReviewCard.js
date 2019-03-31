import React from 'react';

import { Card, CardContent, CardRating, Stars, Quote } from './Styles';

const ReviewCard = props => {
  return (
  <Card>
    <CardRating>
      <span>{ props.review.rating }</span>
      <div>
        <Stars rating={ props.review.rating }>★ ★ ★ ★ ★</Stars>
      </div>
    </CardRating>
    <CardContent>
      <h1>{ props.review.author }</h1>
      <Quote>{ props.review.body }</Quote>
      <p>{ (new Date(props.review.publish_date)).toDateString() }</p>
    </CardContent>

  </Card>
  )
}

export default ReviewCard