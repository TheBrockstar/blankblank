import React from 'react';
import { ToolBarWrapper, StyledInput, StyledSelect, SortButton, PageButton, PageNumber, StyledLabel } from './Styles';

const ToolBar = props => {

  return (
      <ToolBarWrapper>
        <PageButton aria-label={"Previous"} flip={true} onClick={e => props.setPage(props.page > 1 ? props.page - 1 : 1)}>✒</PageButton>
        <StyledLabel>Search: 
          <StyledInput onChange={e => props.search(e.target.value)}/>
        </StyledLabel>
        <StyledLabel>
          Pg.<PageNumber aria-label={"Page Number"}>{ props.page }</PageNumber>
        </StyledLabel>
          <StyledLabel>
            Sort By: 
            <StyledSelect onChange={e => props.sort(e.target.value)}>
            <option value="author">Author</option>
            <option value="publish_date">Date</option>
            <option value="rating">Rating</option>
            </StyledSelect>
            <SortButton order={ props.sortOrder } type={1} onClick={e => props.order(1)}>ASC</SortButton> / 
            <SortButton order={ props.sortOrder } type={0} onClick={e => props.order(0)}>DESC</SortButton>
          </StyledLabel>
        <PageButton aria-label={"Next"} onClick={e => props.setPage(props.page + 1)}>✒</PageButton>
      </ToolBarWrapper>
  )
}

export default ToolBar