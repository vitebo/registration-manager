import styled from 'styled-components';

const registrationStatusStyles: {
  [key in string]: { background: string; title: string };
} = {
  REVIEW: {
    background: '#FDF8E9',
    title: '#EFC24D'
  },
  APPROVED: {
    background: '#EEEEFD',
    title: '#4242DF'
  },
  REPROVED: {
    background: '#FBEDF6',
    title: '#CE2893'
  }
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  justify-content: center;
  margin-top: 24px;
`;

export const Column = styled.div.withConfig({
  shouldForwardProp: (prop) => !['status'].includes(prop)
})<{ status: any }>`
  height: auto;
  background-color: ${({ status }) => registrationStatusStyles[status].background};
  border-radius: 32px;
  min-height: 80vh;
  max-height: 80vh;

  &.loading {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;

    @keyframes loading {
      to {
        background-position: -200% 0;
      }
    }
  }
`;

export const TitleColumn = styled.h3.withConfig({
  shouldForwardProp: (prop) => !['status'].includes(prop)
})<{ status: any }>`
  color: ${({ status }) => registrationStatusStyles[status].title};
  margin: 24px;

  &.loading {
    color: #64748b;
  }
`;

export const CollumContent = styled.div`
  overflow: auto;
  max-height: 85%;
`;
