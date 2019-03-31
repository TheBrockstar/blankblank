import React from 'react';

import { Card, CardContent, CardRating, Stars } from './Styles';

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
      <p>{ props.review.body }</p>
      <p>{ (new Date(props.review.publish_date)).toDateString() }</p>
    </CardContent>

  </Card>
  )
}

export default ReviewCard