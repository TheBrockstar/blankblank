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
  width: 50%;
  border: none;
  background: none;
  cursor: pointer;
  margin-top: 60px;
  font-size: 1.5rem;
  color: rgb(53, 23, 6);
  align-self: center;
  border: 5px solid rgba(53, 23, 6, 0.5);
  border-radius: 10px;
  padding: 10px 0;

  &:hover {
    background-color: rgb(81,197,212);
    color: whitesmoke;
    border: 5px solid rgb(105,68,37);
  }
`