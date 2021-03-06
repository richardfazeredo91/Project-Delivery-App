import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validateLoginInfo from '../utils/loginUtils/validateLoginInfo';
import handleLoginButton from '../utils/loginUtils/handleLoginButton';
import route from '../utils/loginUtils/routes';

function LoginPage() {
  const [login, setlogin] = useState('');
  const [password, setpassword] = useState('');
  const [enableButton, setenableButton] = useState(false);
  const [error, setError] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setenableButton(validateLoginInfo(login, password));
  }, [login, password]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) navigate(route[user.role]);
  }, []);

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
            data-testid="common_login__button-login"
            disabled={ !enableButton }
            onClick={ async (e) => {
              setError(await handleLoginButton(e, login, password, navigate));
            } }
          >
            Login
          </button>
          <Link to="/register">
            <button type="button" data-testid="common_login__button-register">
              Ainda não tenho conta
            </button>
          </Link>
        </div>
        {!error ? (
          <p data-testid="common_login__element-invalid-email">
            Login ou senha inválidos
          </p>
        ) : null}
      </form>
      <p>zebirita@email.com</p>
      <p>$#zebirita#$</p>
      <br />
      <p>fulana@deliveryapp.com</p>
      <p>fulana@123</p>
      <br />
      <p> adm@deliveryapp.com  </p>
      <p>--adm2@21!!--</p>
    </div>
  );
}

export default LoginPage;
