import { createContext, useContext, useState } from 'react'

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
  }

  const logout = () => {
    setUsername('');
    setIsLoggedIn(false);
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