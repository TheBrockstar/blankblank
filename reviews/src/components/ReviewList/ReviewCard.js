import React from 'react';

import { Card, CardContent, CardRating, OuterStars, InnerStars } from './Styles';

const ReviewCard = props => {
  return (
  <Card>
    <CardRating>
      <span>{ props.review.rating }</span>
      <OuterStars><InnerStars rating={ props.review.rating }>★ ★ ★ ★ ★</InnerStars></OuterStars>
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