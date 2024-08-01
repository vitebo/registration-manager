import { ReactNode } from 'react';

import { RegistrationStatusEnum } from '~/entities';

import * as S from './styles';

interface ColumnProps {
  children: ReactNode;
  status: RegistrationStatusEnum;
  title: string;
  isLoading?: boolean;
}

export const Column = ({ children, status, title, isLoading }: ColumnProps) => {
  return (
    <S.Column status={status} className={isLoading ? 'loading' : ''}>
      <S.TitleColumn status={status} className={isLoading ? 'loading' : ''}>
        {title}
      </S.TitleColumn>
      <S.CollumContent>{children}</S.CollumContent>
    </S.Column>
  );
};
