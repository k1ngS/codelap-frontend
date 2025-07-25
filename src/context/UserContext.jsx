import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(() => localStorage.getItem('username') || '');
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('username'));

  useEffect(() => {
    if (username) {
      localStorage.setItem('username', username);
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem('username');
      setIsLoggedIn(false);
    }
  }, [username]);

  const login = (name) => {
    setUsername(name);
  }

  const logout = () => {
    setUsername('');
  }

  return (
    <UserContext.Provider value={{
      username,
      isLoggedIn,
      login,
      logout
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}