import React from 'react';

const handleExitButton = (e) => {
  e.preventDefault();
  localStorage.clear();
  window.location.href = '/';
};

const Header = () => {
  const name = JSON.parse(localStorage.getItem('user')).name;
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
