import styled from "styled-components";
import { colors } from "../../../Styles/colors";

export const Footercontainer = styled.footer`

.footer-middle{
    background-color: ${colors.secondaryColor};
    padding-top: 0.3rem;
    color: #FFF;
}

.footer-botton {
    padding-top: 1rem;
    padding-bottom: 0.1rem;
    background: ${colors.darkPurpleColor};
    text-align: center;
}

ul li a {
    color: white;
    text-decoration: none;
&:hover{
    color: ${colors.textColor};
    transition: all 0.3s ease-in-out;  
}
}

`;


