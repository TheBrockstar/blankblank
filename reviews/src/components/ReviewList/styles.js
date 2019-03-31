import styled from 'styled-components';
import { flexContainer } from '../../globalStyles/Styles';

export const Card = styled.article`
width: 48%;
display: flex;
justify-content: flex-start;
margin-top: 15px;
padding: 15px 10px 15px 15px;
border-radius: 5px;
box-shadow: 0px 1px 2px 1px rgba(126, 56, 12, .5);
background-color: rgba(254, 197, 107, 0.3);

@media only screen and (max-width: 850px) {
  width: 96%;
}
`;

export const CardContent = styled(flexContainer)`
width: 70%;
flex-direction: column;
align-items: flex-start;

@media only screen and (max-width: 450px) {
  width: 65%;
}


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
`

export const CardRating = styled(flexContainer)`
width: 100px;
flex-direction: column;
font-size: 1.2rem;
background-color: whitesmoke;
border-radius: 7px;
background-color: rgba(53, 23, 6, 0.5);
color: #51c5d4;
font-weight: bold;
margin-right: 15px;

span {
  font-size: 3.2rem;
}


@media only screen and (max-width: 450px) {
  width: 80px;
  span {
    font-size: 2.3rem;
  }
}
`

export const ListContainer = styled.section`
width: 100%;
display: flex;
justify-content: center;
`;

export const ListWrapper = styled(flexContainer)`
width: 100%;
max-width: 1080px;
justify-content: space-around;
flex-wrap: wrap;

@media only screen and (max-width: 850px) {
  flex-direction: column;
}
`

export const outerStars = styled.div`

`

export const innerStars = styled.div`

`