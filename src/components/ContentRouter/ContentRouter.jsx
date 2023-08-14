import { Route, Routes } from 'react-router-dom';
import { ProtectedRouteElement } from '../ProtectedRouteElement';
import { Main } from '../Main';
import { NotFoundPage } from '../NotFoundPage';

export function ContentRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <ProtectedRouteElement loggedIn>
            <Main />
          </ProtectedRouteElement>
            )}
      />
      <Route
        path="/movies"
        element={(
          <ProtectedRouteElement loggedIn>
            <Main />
          </ProtectedRouteElement>
            )}
      />
      <Route
        path="/saved-movies"
        element={(
          <ProtectedRouteElement loggedIn>
            <Main />
          </ProtectedRouteElement>
            )}
      />
      <Route
        path="/profile"
        element={(
          <ProtectedRouteElement loggedIn>
            <Main />
          </ProtectedRouteElement>
            )}
      />

      <Route path="/signin" element={<h1>signin</h1>} />
      <Route path="/signup" element={<h1>signup</h1>} />
      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  );
}
