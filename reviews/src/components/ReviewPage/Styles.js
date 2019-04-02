import styled from 'styled-components';
import { flexContainer } from '../../globalStyles/Styles';


// Review Page Components
export const ReviewContainer = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Rating = styled(flexContainer)`
  width: 200px;
  height: 200px;
  flex-direction: column;
  background-color: whitesmoke;
  border-radius: .7rem;
  background-color: rgba(53, 23, 6, 0.5);
  color: rgb(81,197,212);;
  font-weight: bold;
  align-self: center;

  span {
    font-size: 5.2rem;
  }

  @media only screen and (max-width: 650px) {
    width: 160px;
    height: 160px;

    span {
      font-size: 4.2rem;
    }
  }

  @media only screen and (max-width: 450px) {
    width: 140px;
    height: 140px;

    span {
      font-size: 3.2rem;
    }
  }

`;

export const Author = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 30px;
  align-self: center;
  text-decoration: underline;
  
  @media only screen and (max-width: 650px) {
    font-size: 2rem;
    margin-top: 30px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 1.5rem;
    margin-top: 15px;
  }
`

export const Quote = styled.blockquote`
  max-width: 600px;
  font-style: italic;
  font-size: 2.5rem;
  padding-left: 30px;
  border-left: 10px solid rgb(105,68,37);
  margin: 30px 0;

  @media only screen and (max-width: 650px) {
    font-size: 2rem;
    margin: 20px 10px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 1.5rem;
    margin: 10px 10px;
  }
`
export const ReviewDate = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 30px;

  @media only screen and (max-width: 650px) {
    font-size: 1rem;
    margin: 20px 10px;
  }

  @media only screen and (max-width: 450px) {
    font-size: .75rem;
    margin: 10px 10px;
  }
`

export const Stars = styled.div`
  font-size: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  width: ${props => ((props.rating / 5) * 100) + "%"} // Calculates the number of stars to show.

  @media only screen and (max-width: 650px) {
    font-size: 1.25rem;
  }

  @media only screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;

export const ReturnToList = styled.button`
  align-self: center;
  background-color: rgba(254,197,107,0.3);
  box-shadow: 0 .1rem .2rem .1rem rgba(126,56,12,.5);
  margin-top: 60px;
  padding: 10px 15px;
  border: 0px;
  border-radius: 10px;
  font-size: 1.5rem;
  color: rgb(53, 23, 6);
  cursor: pointer;

  &:hover {
    background-color: rgba(254,197,107,0.5);
  }

  @media only screen and (max-width: 650px) {
    margin-top: 30px;
  }

  @media only screen and (max-width: 450px) {
    margin-top: 15px;
  }
`