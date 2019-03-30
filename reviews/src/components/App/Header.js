import React from 'react';
import { StyledHeader, HeaderWrapper } from './Styles';

const Header = _ => {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <h1>Shakespeare Reviews</h1>
      </StyledHeader>
    </HeaderWrapper>
  )
}

export default Header;