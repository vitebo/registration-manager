import { ReactNode, HTMLAttributes } from 'react';

import { RegistrationStatusEnum } from '~/entities';

import * as S from './styles';

interface ColumnProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  status: RegistrationStatusEnum;
  title: string;
  isLoading: boolean;
}

export const Column = ({ children, status, title, isLoading, ...rest }: ColumnProps) => {
  return (
    <S.Column loading={isLoading} type={status} {...rest}>
      <S.TitleColumn>{title}</S.TitleColumn>
      <S.CollumContent>{children}</S.CollumContent>
    </S.Column>
  );
};
