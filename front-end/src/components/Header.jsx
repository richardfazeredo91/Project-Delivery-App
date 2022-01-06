import React from "react";

const handleExitButton = (e) => {
  e.preventDefault();
  localStorage.clear();
  window.location.href = "/";
};

const Header = () => {
  const name = localStorage.getItem("name");
  return (
    <div className="headerContainer">
      <button data-testid="customer_products__element-navbar-link-products">Produtos</button>
      <button data-testid="customer_products__element-navbar-link-orders">Meus Pedidos</button>
      <p data-testid="customer_products__element-navbar-user-full-name" >{name}</p>
      <button data-testid="customer_products__element-navbar-link-logout" onClick={ (e) => handleExitButton(e) } >Sair</button>
    </div>
  );
}

export default Header;