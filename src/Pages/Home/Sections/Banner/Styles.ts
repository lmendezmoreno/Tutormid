import styled from 'styled-components';
import { colors } from '../../../../Styles/colors';

export const Container = styled.div`
    background:${colors.bgLight};
    padding: 30px 40px;
    img{
        width: 98%;
    }
`;

export const ColumnText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 10%;
    padding-right: 100px;
`;

export const Title = styled.h1`
     color: ${colors.darkColor}

`

export const SubTitle = styled.span`
    color: ${colors.darkColor}
`

