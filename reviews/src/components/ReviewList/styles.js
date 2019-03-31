import styled from 'styled-components';
import { flexContainer } from '../../globalStyles/Styles';

export const Card = styled.article`
width: 48%;
display: flex;
flex-direction: column;
margin-top: 15px;
padding: 15px 10px;
border-radius: 5px;
box-shadow: 0px 1px 2px 1px rgba(126, 56, 12, .7);
background-color: rgba(254, 197, 107, 0.3);

  h1 {
    font-size: 1.6rem;
    margin: 5px 0 10px 0;
  }

  p {
    font-size: 1rem;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    line-height: 1.5rem;
  }

`;

export const ListContainer = styled.section`
display: flex;
justify-content: center;
`;

export const ListWrapper = styled(flexContainer)`
width: 80%;
max-width: 1080px;
justify-content: space-around;
flex-wrap: wrap;
`

export const outerStars = styled.div`

`

export const innerStars = styled.div`

`