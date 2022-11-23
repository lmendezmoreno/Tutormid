import Home from './Home';
import styled from 'styled-components';
import { colors } from '../../Styles/colors';

export const TeacherSection = styled.section `
.title-prof {
    color: ${colors.tittlePurpleColor};
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
}

.text-prof {
    color: ${colors.secondaryColor};
    font-weight: 300;
    font-size: 22px;
    line-height: 27px;
}
`;
