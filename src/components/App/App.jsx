import { Route, Routes } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { ProtectedRouteElement } from '../ProtectedRouteElement';
import { Main } from '../Main';
import { Register } from '../Register';
import { NotFoundPage } from '../NotFoundPage';
import { Login } from '../Login';
import { Profile } from '../Profile';

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={(
            <ProtectedRouteElement loggedIn>
              <Header />
              <Main />
              <Footer />
            </ProtectedRouteElement>
          )}
        />
        <Route
          path="/movies"
          element={(
            <ProtectedRouteElement loggedIn>
              <Header />
              movies
              <Footer />
            </ProtectedRouteElement>
          )}
        />
        <Route
          path="/saved-movies"
          element={(
            <ProtectedRouteElement loggedIn>
              <Header />
              saved-movies
              <Footer />
            </ProtectedRouteElement>
          )}
        />
        <Route
          path="/profile"
          element={(
            <ProtectedRouteElement loggedIn>
              <Header />
              <Profile />
            </ProtectedRouteElement>
          )}
        />

        <Route
          path="/signin"
          element={(<Login />)}
        />
        <Route
          path="/signup"
          element={(<Register />)}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
