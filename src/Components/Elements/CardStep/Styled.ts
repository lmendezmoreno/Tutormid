import styled from 'styled-components';
import { colors } from '../../../Styles/colors';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export const NewCard = styled.div`
width: 200px;
height: 200px;
border: 1px solid red;
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
width: 60px;
height: 60px;
padding: 15px;
border-radius: 12px;
display: flex;
justify-content: center;
align-items: center;

`