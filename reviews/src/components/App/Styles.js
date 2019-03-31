import  styled  from 'styled-components';
import { flexContainer } from '../../globalStyles/Styles';

export const StyledHeader = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(81, 197, 212);
  border-bottom: 5px solid rgb(105, 68, 37);
  margin-bottom: 15px;

  h1 {
    font-size: 2.5rem;
    color: whitesmoke
    margin-top: 5px;
  }

  @media only screen and (max-width: 850px) {
    h1 {
    font-size: 2rem;
    }
  }

  @media only screen and (max-width: 450px) {
    h1 {
    font-size: 1.7rem;
    }
  }
`

export const HeaderWrapper = styled(flexContainer)` 
height: 60px;
width: 80%;

@media only screen and (max-width: 850px) {
  width: 96%;
}
`

export const StyledFooter = styled.footer `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(234, 168, 58);
  margin-top: 15px;

  h1 {
    font-size: 1.2rem;
    margin-top: 5px;
    color: whitesmoke;
  }
`

export const FooterWrapper = styled(flexContainer)`
height: 60px;
width: 80%;
max-width: 1080px;

@media only screen and (max-width: 850px) {
  width: 96%;
}
`

export const ViewWrapper = styled(flexContainer)`
width: 100%;
height: auto;
align-items: flex-start;
min-height: calc(100vh - 155px);
`