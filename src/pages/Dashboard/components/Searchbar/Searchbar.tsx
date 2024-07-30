import { HiRefresh } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';

import { Button, IconButton } from '~/components/Buttons';
import { TextField } from '~/components/TextField';
import { routes } from '~/router';

import * as S from './styles';
export const SearchBar = () => {
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  return (
    <S.Container>
      <TextField placeholder="Digite um CPF válido" />
      <S.Actions>
        <IconButton aria-label="refetch">
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
