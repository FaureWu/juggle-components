import styled from 'styled-components';
import defaultTheme, { getTheme } from '../../themes';

const H1 = styled.h1`
  position: relative;
  color: ${props => props.theme.hello.color};
`;

H1.defaultProps = {
  theme: getTheme(defaultTheme),
};

export default H1;
