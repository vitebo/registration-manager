import styled from 'styled-components';

import { IconButton } from '~/components/Buttons';

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  padding: 24px;
  min-width: 320px;
  min-height: 320px;
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: 16px;
  right: 16px;
  border-color: black;
  svg {
    color: black;
  }
`;

export const Content = styled.div`
  display: block;
  width: 100%;
  flex-grow: 1;
`;
