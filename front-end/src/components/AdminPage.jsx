import React from "react";

function AdminPage() {
  return (
    <div className="adminPageContainer">
      <h1>Cadastrar novo usuário</h1>
      <div className="adminNewUser">
        <form>
          <label htmlFor="newUserName">
            Nome
            <input
              type="text"
              name="newUserName"
              id="newUserName"
              minLength="12"
              data-testid="admin_manage__input-name"
            />
          </label>
          <label htmlFor="newUserEmail">
            Email
            <input
              type="email"
              name="newUserEmail"
              id="newUserEmail"
              data-testid="admin_manage__input-email"
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
          <button type="button" data-testid="admin_manage__button-register">
            CADASTRAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminPage;
