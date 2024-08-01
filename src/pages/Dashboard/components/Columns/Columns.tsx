import { ReactNode } from 'react';

import * as S from './styles';

interface ColumnsProps {
  children: ReactNode;
}

export const Collumns = ({ children }: ColumnsProps) => {
  return <S.Container>{children}</S.Container>;
};
