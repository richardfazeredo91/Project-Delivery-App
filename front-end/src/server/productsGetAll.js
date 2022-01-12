const productsGetAll = () => {
  const allProducts = fetch('http://localhost:3001/product/listall', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => data);
  return allProducts;
};

export default productsGetAll;
