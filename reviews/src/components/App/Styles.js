import  styled  from 'styled-components';
import { flexContainer } from '../../globalStyles/Styles';

export const StyledHeader = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1080px;
`

export const HeaderWrapper = styled(flexContainer)` 
width: 100%;
height: 50px;
background-color: rgb(81, 197, 212);
`

export const StyledFooter = styled.footer `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1080px;
`

export const FooterWrapper = styled(flexContainer)`
width: 100%;
height: 50px;
background-color: rgb(234, 168, 58);
`

export const ViewWrapper = styled(flexContainer)`
width: 100%;
height: auto;
min-height: calc(100vh - 100px);
`