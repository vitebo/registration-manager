import styled from 'styled-components';

import { HEADER_HEIGHT } from '~/constants';

export const Header = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.colors.gradients.redToOrange};
  display: flex;
  height: ${HEADER_HEIGHT};
  left: 0;
  padding: ${({ theme }) => theme.spacing.none} ${({ theme }) => theme.spacing['3xl']};
  position: fixed;
  top: 0;
  width: 100%;
`;

export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  margin: ${({ theme }) => theme.spacing.none};
`;
