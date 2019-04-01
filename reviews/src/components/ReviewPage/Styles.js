import styled from 'styled-components';
import { flexContainer } from '../../globalStyles/Styles';


// Review Page Components
export const ReviewContainer = styled.section`
  margin-top:  30px;
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
  margin-right: 1.5rem;
  align-self: center;

  span {
    font-size: 5.2rem;
  }


  @media only screen and (max-width: 450px) {
    width: 8rem;
    span {
      font-size: 3.3rem;
    }
  }
`;

export const Author = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 30px;
  align-self: center;
  text-decoration: underline;+
`
export const ReviewDate = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 30px;
`
export const Quote = styled.blockquote`
  max-width: 600px;
  font-style: italic;
  font-size: 2.5rem;
  padding-left: 30px;
  border-left: 10px solid rgb(105,68,37);
  margin: 30px 0;
`

export const Stars = styled.div`
  font-size: 1.5rem;
  white-space: nowrap;
  overflow-x: hidden;
  width: ${props => ((props.rating / 5) * 100) + "%"} // Calculates the number of stars to show.

  @media only screen and (max-width: 450px) {
    font-size: .7rem;
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
`