import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export const PrivateRoute  = ({ children }) => {
    const loggedIn = useSelector(state => state.authification.isLoggedIn);
    if (loggedIn) {
      return children;
    } else return <Navigate to="/" />;
  };