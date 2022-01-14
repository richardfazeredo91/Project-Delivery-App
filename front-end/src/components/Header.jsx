import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const { role } = JSON.parse(localStorage.getItem('user'));

  const handleExitButton = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/');
  };

  const user = localStorage.getItem('user');
  if (typeof user !== 'string') {
    navigate('/');
  }

  const { name } = JSON.parse(user);

  return (
    <div className="headerContainer">
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => navigate('/customer/products') }
      >
        Produtos
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => navigate(`/${role}/orders`) }
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
}

export default Header;
