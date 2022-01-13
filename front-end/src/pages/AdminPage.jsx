import React, { useEffect, useState } from 'react';
import validateAdminInfo from '../utils/adminUtils/validateAdminInfo';

// name, email, password, role

function AdminPage() {
  const [name, setname] = useState('');
  const [login, setlogin] = useState('');
  const [password, setpassword] = useState('');
  const [enableButton, setenableButton] = useState(false);
  const [error, setError] = useState(true);

  useEffect(() => {
    setenableButton(validateAdminInfo(name, login, password));
  }, [name, login, password]);
  return (
    <div className="adminNewUser">
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="name"
            minLength="12"
            data-testid="admin_manage__input-name"
            onChange={ (e) => setname(e.target.value) }
          />
        </label>
        <label htmlFor="newUserEmail">
          Email
          <input
            type="email"
            name="newUserEmail"
            id="newUserEmail"
            data-testid="admin_manage__input-email"
            onChange={ (e) => setlogin(e.target.value) }
          />
        </label>
        <label htmlFor="newUserPassword">
          Senha
          <input
            type="password"
            name="newUserPassword"
            id="newUserPassword"
            minLength="6"
            data-testid="admin_manage__input-password"
            onChange={ (e) => setpassword(e.target.value) }
          />
        </label>
        <label htmlFor="newUserRole">
          Tipo
          <select
            name="newUserRole"
            id="newUserRole"
            data-testid="admin_manage__select-role"
          >
            <option value="administrator">Administrador</option>
            <option value="seller">P. Vendedora</option>
            <option value="customer" selected="selected">
              Cliente
            </option>
          </select>
        </label>
        <button
          type="button"
          disabled={ !enableButton }
          onClick={ async (e) => setError(await handleLoginButton(e, login, password)) }
          data-testid="admin_manage__button-register"
        >
          CADASTRAR
        </button>
      </form>
      {!error ? (
        <p data-testid="admin_manage__element-invalid-register">
          Pessoa usuária já existe
        </p>
      ) : null}
    </div>
  );
}

export default AdminPage;
