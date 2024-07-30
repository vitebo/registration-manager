import { useEffect, useContext } from 'react';
import Collumns from './components/Columns';
import * as S from './styles';
import { SearchBar } from './components/Searchbar';
import { StoreContext } from '~/contexts/store-context.ts';
import { DiContext } from '~/contexts/di-context';

const DashboardPage = () => {
  const { registrations, setRegistrations } = useContext(StoreContext);
  const { registrationGateway } = useContext(DiContext);

  useEffect(() => {
    const fetchRegistrations = async () => {
      const registrations = await registrationGateway.get();
      setRegistrations(registrations);
    };
    fetchRegistrations();
  }, []);

  return (
    <S.Container>
      <SearchBar />
      <Collumns registrations={registrations} />
    </S.Container>
  );
};
export default DashboardPage;
