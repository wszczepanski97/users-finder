import { useState, useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { CircleLoader } from './components/CircleLoader/CircleLoader';
import { UserSearch } from './components/UserSearch/UserSearch';
import AppContext from './AppContext';
import { fetchUsers, User } from './fetchRequest';
import { AnimatedBackground } from './components/AnimatedBackground/AnimatedBackground';

export default function App() {
  const [error, setError] = useState<null | string>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [usersCache, setUsersCache] = useState<User[]>([]);

  const setStateAfterFetchingData = (result: User[], inputEventPassed: boolean) => {
    setIsLoaded(true);
    setUsers(result);
    if (!inputEventPassed && !usersCache.length) setUsersCache(result);
  }

  const catchFetchingErrors = (error: string) => {
    setIsLoaded(true);
    setError(error);
  }

  const getUsersData = (inputEvent?: React.ChangeEvent<HTMLInputElement>) => {
    (inputEvent && !inputEvent.target.value) ?
      setUsers(usersCache) :
      fetchUsers(inputEvent).then(
        (result: User[]) => setStateAfterFetchingData(result, !!inputEvent),
        (error) => catchFetchingErrors(error.message)
      )
  }

  useEffect(getUsersData, []);

  if (error) return <ErrorBoundary message={error} />;
  else if (!isLoaded) return <CircleLoader />;
  else return (
    <>
      <AnimatedBackground />
      <AppContext.Provider value={{ users, handleInputChange: getUsersData }}>
        <UserSearch />
      </AppContext.Provider>
    </>
  );
}