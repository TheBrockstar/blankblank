import React from 'react';
import { 
  ToolBarWrapper, 
  StyledInput, 
  StyledSelect, 
  SortButton, 
  PageButton, 
  PageNumber, 
  StyledLabel,
  ToolBarContainer 
} from './Styles';

const ToolBar = props => {

  return (
    <ToolBarContainer>
      <ToolBarWrapper>
        <PageButton title={"Previous"} aria-label={"Previous"} flip={true} onClick={e => props.setPage(props.page > 1 ? props.page - 1 : 1)}>✒</PageButton>
        <StyledLabel htmlFor={"search"}>Search: 
          <StyledInput id={"search"} onChange={e => props.search(e.target.value)}/>
        </StyledLabel>
        <StyledLabel>
          Pg.<PageNumber aria-label={"Page Number"}>{ props.page }</PageNumber>
        </StyledLabel>
          <StyledLabel htmlFor={"sort"}>
            Sort By: 
            <StyledSelect id={"sort"} onChange={e => props.sort(e.target.value)}>
              <option value="rating">Rating</option>
              <option value="author">Author</option>
              <option value="publish_date">Date</option>
            </StyledSelect>
            <SortButton aria-label={"Ascending Order"} order={ props.sortOrder } type={1} onClick={e => props.order(1)}>ASC</SortButton> / 
            <SortButton aria-label={"Descending Order"} order={ props.sortOrder } type={0} onClick={e => props.order(0)}>DESC</SortButton>
          </StyledLabel>
        <PageButton title={"Next"} aria-label={"Next"} onClick={e => props.setPage(props.page < props.size ? props.page + 1 : props.size)}>✒</PageButton>
      </ToolBarWrapper>
    </ToolBarContainer>
  )
}

export default ToolBar