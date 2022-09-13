import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({
  children,
  restricted = false
}) => {
  const loggedIn = useSelector(state => state.authification.isLoggedIn);
  const willRedirected = loggedIn && restricted;
      if(willRedirected){return <Navigate to="/contacts" />}
      else return children;

};