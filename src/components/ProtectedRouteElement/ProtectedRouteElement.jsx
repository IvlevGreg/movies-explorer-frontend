import { Navigate } from 'react-router-dom';

export function ProtectedRouteElement({ children, loggedIn }) {
  return loggedIn ? children : <Navigate to="/signin" replace />;
}
