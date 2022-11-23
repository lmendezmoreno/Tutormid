import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const StyledContainer = styled(Container)`
    /* max-width: 1200px; */
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* justify-content: center; */
    /* margin: auto; */
    /* justify-content: space-around; */
`;
export const StyledCard = styled(Card) `
    margin: 0;
    width: 320px;
    height: 422px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    background: white;
 
`;