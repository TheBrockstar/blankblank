import styled from 'styled-components';
import { flexContainer } from '../../globalStyles/Styles';


// List Components
export const ListContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListWrapper = styled(flexContainer)`
  width: 100%;
  max-width: 1080px;
  justify-content: space-around;
  flex-wrap: wrap;

  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

export const Loading = styled.h1`
  font-size: 2rem;
  margin-top: 10rem;
  color: whitesmoke;
`;


// Card Components
export const Card = styled.article`
  width: 48%;
  display: flex;
  justify-content: flex-start;
  margin-top: 1.5rem;
  padding: 1.5rem 1rem 1.5rem 1.5rem;
  border-radius: .5rem;
  box-shadow: 0 .1rem .2rem .1rem rgba(126, 56, 12, .5);
  background-color: rgba(254, 197, 107, 0.3);

  @media only screen and (max-width: 850px) {
    width: 96%;
  }
`;

export const CardContent = styled(flexContainer)`
  width: 70%;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    width: 100%;
    font-size: 1.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 2.8rem;
  }

  p {
    width: 100%;
    font-size: 1rem;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    line-height: 1.5rem;
  }

  @media only screen and (max-width: 450px) {
    width: 65%;
  }
`;

export const Quote = styled.p`
  font-style: italic;
`

export const CardRating = styled(flexContainer)`
  width: 100px;
  flex-direction: column;
  font-size: 1.2rem;
  background-color: whitesmoke;
  border-radius: .7rem;
  background-color: rgba(53, 23, 6, 0.5);
  color: #51c5d4;
  font-weight: bold;
  margin-right: 1.5rem;

  span {
    font-size: 3.2rem;
  }


  @media only screen and (max-width: 450px) {
    width: 8rem;
    span {
      font-size: 2.3rem;
    }
  }
`;

export const Stars = styled.div`
  font-size: .9rem;
  white-space: nowrap;
  overflow-x: hidden;
  width: ${props => ((props.rating / 5) * 100) + "%"} // Calculates the number of stars to show.

  @media only screen and (max-width: 450px) {
    font-size: .7rem;
  }
`;


// Toolbar Components
export const ToolBarWrapper =  styled(flexContainer)`
  position: sticky;
  top: 1.5rem;
  margin: 15px 0;
  width: 80%;
  max-width: 1080px;
  height: 4rem;
  background-color: white;
  border-radius: 10px;
  padding: 0 10px;
  justify-content: space-between;
`;

export const StyledInput = styled.input`
  padding: 5px;
  border-radius: 5px;
`

export const StyledSelect = styled.select`
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`

export const SortButton = styled.button`
  border: 0px;
  background: none;
  cursor: pointer;
  font-weight: ${props => props.order === props.type ? "bold" : "normal"};
`

export const PageButton = styled.button`
  border: 0px;
  background: none;
  cursor: pointer;
  font-size: 3rem;
  font-weight: "bold";
  padding-bottom: 7px;
  &:hover {
    color: rgb(81, 197, 212);
  }
  ${props => props.flip ? "transform: scale(-1, 1);" : ""}
`

export const PageNumber = styled(flexContainer)`
  font-size: 1rem;
  padding: 10px
`