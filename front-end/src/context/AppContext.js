import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

const MyContext = React.createContext();

function AppContext({ children }) {
  const [user, setUser] = useState('LimaLima');

  const contextValue = {
    user,
    setUser,
  };

  return (
    <MyContext.Provider value={ contextValue }>{children}</MyContext.Provider>
  );
}

export default AppContext;

const useAppContext = () => useContext(MyContext);

export { useAppContext };

AppContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
