import Collumns from './components/Columns';
import * as S from './styles';
import { SearchBar } from './components/Searchbar';
import { useContext } from 'react';
import { StoreContext } from '~/contexts/store-context.ts';

const DashboardPage = () => {
  const { registrations } = useContext(StoreContext);

  return (
    <S.Container>
      <SearchBar />
      <Collumns registrations={registrations} />
    </S.Container>
  );
};
export default DashboardPage;
