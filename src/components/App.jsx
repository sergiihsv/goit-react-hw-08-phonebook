import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { dark, light } from '../style/theme';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import authOperations from '../redux/auth/authification';

const Navigation = lazy(() => import('./Navigation/Navigation'));
const StartPage = lazy(() => import('../pages/StartPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();

  const loggedIn = useSelector(state => state.authification.isLoggedIn);
  const isFetchingUser = useSelector(
    state => state.authification.isFetchingUser
  );

  useEffect(() => {
    dispatch(authOperations.getUserInformation());
  }, [dispatch]);

  
  const [isDarkTheme, setIsDarkTheme] = useState(
    JSON.parse(window.localStorage.getItem('darkTheme')) ?? false
  );

  useEffect(() => {
    window.localStorage.setItem('darkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

 
  const handleLogout = () => {
    dispatch(authOperations.logoutUser());
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation
          isDark={isDarkTheme}
          changeTheme={handleChangeTheme}
          loggedIn={loggedIn}
          handleLogout={handleLogout}
        />
        {!isFetchingUser && (
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <StartPage />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </ThemeProvider>
  );
};
