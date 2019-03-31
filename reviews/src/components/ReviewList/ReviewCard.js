import React from 'react';

import { Card } from './Styles';

const ReviewCard = props => {
  return (
  <Card>
    <h1>{ props.review.author }</h1>
    <p>Rating: { props.review.rating }</p>
    <p>{ props.review.body }</p>
    <p>Published on: { (new Date(props.review.publish_date)).toDateString() }</p>
  </Card>
  )
}

export default ReviewCard