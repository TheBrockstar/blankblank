import  styled  from 'styled-components';
import { flexContainer } from '../../globalStyles/Styles';

export const StyledHeader = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(81, 197, 212);
`

export const HeaderWrapper = styled(flexContainer)` 
height: 50px;
width: 80%;

`

export const StyledFooter = styled.footer `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(234, 168, 58);
`

export const FooterWrapper = styled(flexContainer)`
height: 50px;
width: 80%;
max-width: 1080px;
`

export const ViewWrapper = styled(flexContainer)`
width: 100%;
height: auto;
min-height: calc(100vh - 100px);
`