import styled from 'styled-components';
import { colors } from '../../../Styles/colors';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export const NewCard = styled.div `
position: relative;
margin-top: 50px;
`
/*export const NewButton = styled(Button)`
background: purple;
`

export const NewAlert = styled(Alert)`
background: gray;

`
*/

export const ContainerIcon = styled.div `
background-color: ${colors.primaryColor};
color: white;
width: 50px;
height: 50px;
padding: 15px;
border-radius: 8px;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
margin-top: -25px;
`

export const Card = styled.div `
padding: 25px;
border: 1px solid ${colors.borderCard};
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
border-radius: 10px;
color: ${colors.textColor};
max-width: 310px;
background: white;
`
export const Title = styled.p `
font-weight: 500;
font-size: 22px;
color: ${colors.primaryColor};

`