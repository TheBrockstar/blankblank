import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { searchReviews, sortReviews, paginateReviews } from '../../helpers';

import { ListWrapper } from './Styles';
import { Loading, NotFound404 } from '../../globalStyles/Styles'
import ReviewCard from './ReviewCard';

function List(props) {

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
  async function fetchReviews() {
    try {
      const response = await axios(
      'https://shakespeare.podium.com/api/reviews', 
      { 'headers': { 'x-api-key':'H3TM28wjL8R4#HTnqk?c' }}
      );
        
      props.setSize(Math.ceil((response.data.length) / 20));
      setReviews(response.data);
    } catch (error) {
      setReviews('404');
    }
  }
  
  fetchReviews();
  }, []);

  if (reviews) {
    return reviews === '404' ? (<NotFound404>404 - Not Found <br/> Get Thee Hence!</NotFound404>) : (
      <ListWrapper className="listWrapper" role='list'>
        {paginateReviews(sortReviews(searchReviews(reviews, props.searchTerm), props.sortBy, props.sortOrder), props.page, 20).map(review => {
          return (<ReviewCard history={props.history} key={review.id} review={review}/>)
        })}
      </ListWrapper>
    )
  } else {
    return (<Loading>Loading...</Loading>)
  }

}

export default List;

