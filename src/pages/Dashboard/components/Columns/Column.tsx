import { ReactNode } from 'react';

import { RegistrationStatusEnum } from '~/entities';

import * as S from './styles';

interface ColumnProps {
  children: ReactNode;
  status: RegistrationStatusEnum;
  title: string;
}

export const Column = ({ children, status, title }: ColumnProps) => {
  return (
    <S.Column status={status}>
      <S.TitleColumn status={status}>{title}</S.TitleColumn>
      <S.CollumContent>{children}</S.CollumContent>
    </S.Column>
  );
};
