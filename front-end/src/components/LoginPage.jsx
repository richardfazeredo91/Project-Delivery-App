import React, { useEffect, useState } from 'react';
// import { useAppContext } from '../context/AppContext';
import validateLoginInfo from '../utils/validateLoginInfo';

function LoginPage() {
  const [login, setlogin] = useState('');
  const [password, setpassword] = useState('');
  const [enableButton, setenableButton] = useState(false);

  useEffect(() => {
    setenableButton(validateLoginInfo(login, password));
  }, [login, password]);

  return (
    <div className="loginPageContainer">
      <form>
        <div className="loginPage">
          <label htmlFor="login">
            login
            <input
              type="email"
              name="login"
              id="login"
              data-testid="common_login__input-email"
              onChange={ (e) => setlogin(e.target.value) }
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              id="password"
              data-testid="common_login__input-password"
              minLength="6"
              onChange={ (e) => setpassword(e.target.value) }
            />
          </label>

          <button
            type="submit"
            data-testid="common_login__input-button-login"
            disabled={ !enableButton }
          >
            Login
          </button>
          <button
            type="button"
            data-testid="common_login__input-button-register"
          >
            Ainda não tenho conta
          </button>
        </div>
        <div
          className="loginFailed"
          data-testid="common_login__element-invalid-email"
        >
          <p>Login ou senha inválidos</p>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
