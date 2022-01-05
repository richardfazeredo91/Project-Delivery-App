import React from 'react';
import rockGlass from '../images/rockGlass.svg';
import { useAppContext } from '../context/AppContext';

function LoginPage() {
  const { user } = useAppContext();
  return (
    <div className="App">
      <span className="logo">TRYBE</span>
      <h1>{ user }</h1>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
    </div>
  );
}

export default LoginPage;
