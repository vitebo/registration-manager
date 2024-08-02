import { ReactNode } from 'react';

import { RegistrationStatusEnum } from '~/entities';

import * as S from './styles';

interface ColumnProps {
  children: ReactNode;
  status: RegistrationStatusEnum;
  title: string;
  isLoading: boolean;
}

export const Column = ({ children, status, title, isLoading }: ColumnProps) => {
  return (
    <S.Column loading={isLoading} type={status}>
      <S.TitleColumn>{title}</S.TitleColumn>
      <S.CollumContent>{children}</S.CollumContent>
    </S.Column>
  );
};
