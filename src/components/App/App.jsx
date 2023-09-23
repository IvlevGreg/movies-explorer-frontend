import { Route, Routes } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { ProtectedRouteElement } from '../ProtectedRouteElement';
import { Landing } from '../Main';
import { Register } from '../Register';
import { NotFoundPage } from '../NotFoundPage';
import { Login } from '../Login';
import { Profile } from '../Profile';
import { SavedMovies } from '../SavedMovies';
import { Movies } from '../Movies';
import { MainApi } from '../../utils/Api/MainApi';
import { CurrentUserContext } from '../../hooks/CurrentUserContext';

export function App() {
  const [userData, setUserData] = useState(null);
  const [userStatus, setUserStatus] = useState('initial');
  const userValue = useMemo(() => ({ userData, setUserData }), [userData]);

  useEffect(
    () => {
      setUserStatus('loading');
      MainApi.getUsersMe().then((user) => {
        setUserData(user);
        setUserStatus('success');
      }).catch((e) => {
        setUserStatus('error');
        // eslint-disable-next-line no-console
        console.log(e);
      });
    },
    [],
  );
  if (userStatus === 'loading' || userStatus === 'initial') {
    return <h1>loading</h1>;
  }

  return (
    <CurrentUserContext.Provider value={userValue}>

      <div className="App">
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Header loggedIn={!!userData} color="secondary" />
                <Landing />
                <Footer />
              </>
            )}
          />
          <Route
            path="/movies"
            element={(
              <ProtectedRouteElement loggedIn={!!userData}>
                <Header />
                <Movies />
                <Footer />
              </ProtectedRouteElement>
            )}
          />
          <Route
            path="/saved-movies"
            element={(
              <ProtectedRouteElement loggedIn={!!userData}>
                <Header loggedIn={!!userData} />
                <SavedMovies />
                <Footer />
              </ProtectedRouteElement>
            )}
          />
          <Route
            path="/profile"
            element={(
              <ProtectedRouteElement loggedIn={!!userData}>
                <Header loggedIn={!!userData} />
                <Profile />
              </ProtectedRouteElement>
            )}
          />

          <Route
            path="/signin"
            element={(
              <ProtectedRouteElement loggedIn={!userData}>
                <Login />
              </ProtectedRouteElement>
              )}
          />
          <Route
            path="/signup"
            element={(
              <ProtectedRouteElement loggedIn={!userData}>
                <Register />
              </ProtectedRouteElement>
            )}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}
