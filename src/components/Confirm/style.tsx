import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h2`
  color: #424242;
  margin: 0;
`;

export const Message = styled.p`
  color: #424242;
`;

export const Actions = styled.div`
  display: flex;
  gap: 16px;
`;

export const Button = styled.button`
  background: #f0f0f0;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  flex: 1;
`;

export const ConfirmButton = styled(Button)`
  background: rgb(155, 229, 155);
  color: #000;
`;

export const CancelButton = styled(Button)`
  background: #f0f0f0;
  color: #424242;
`;
