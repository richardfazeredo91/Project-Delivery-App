import React from 'react';

const handleExitButton = (e) => {
  e.preventDefault();
  localStorage.clear();
  window.location.href = '/';
};

const Header = () => {
  const user = localStorage.getItem('user');
  if (typeof user !== 'string') {
    window.location.href = '/';
  }

  const { name } = JSON.parse(user);

  return (
    <div className="headerContainer">
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus Pedidos
      </button>
      <p data-testid="customer_products__element-navbar-user-full-name">
        {name}
      </p>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ (e) => handleExitButton(e) }
      >
        Sair
      </button>
    </div>
  );
};

export default Header;
