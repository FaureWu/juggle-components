import styled from 'styled-components';
import { Wapper } from '../../styled/tag.styled';

export const Layout = styled(Wapper)`
  display: flex;
  flex: 1 0 auto;
  flex-direction: ${props => props.direction === 'horizontal' ? 'row' : 'column'};
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;
`;

Layout.defaultProps = {
  direction: 'vertical',
};

export const Vertical = styled(Wapper)`
  flex: 1 0 auto;
`;

export const Horizontal = styled(Wapper)`
  flex: 0 0 auto;
`;
