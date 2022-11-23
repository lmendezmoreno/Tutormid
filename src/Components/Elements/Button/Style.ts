import Button from 'react-bootstrap/Button';
import { colors } from '../../../Styles/colors';
import styled from "styled-components";

export const ButtonElement = styled.button`
    border: none;
    box-sizing: border-box;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;

    transition: all 0.3s ease-out;

    height: 40px;
    box-sizing: border-box;

    /* si hay icono, lo separo un poco del texto */
    > svg {
        margin-left: 10px;
        height: 20px;
        width: 20px;
    }

    /* tamaños */
    &.default-size {
        padding: 10px 50px;
    }

    &.small-size {
        padding: 10px 20px;
    }
    /* fin tamaños */

    /* colores */
    &.primary {
        background: ${colors.primaryColor};
        color: white;
    }

    &.secondary {
        background: ${colors.secondaryColor};
        color: white;
    }

    &.info {
        background: ${colors.blueColor};
        color: white;
    }

    &.group {
      border-radius: 8px 0px 0px 8px;
    }

    &.outline {
        border: 1px solid ${colors.primaryColor};
        background: white;
        color: ${colors.primaryColor};
    }


    /* fin colores */

    /* cuando se hace hover */
    &:hover {
        filter: brightness(1.15);
        box-shadow: 0 5px 10px 2px #00000018;
    }

    /* cuando está deshabilitado */
    &:disabled {
        filter: grayscale(1);
        opacity: 0.5;
    }
`;
