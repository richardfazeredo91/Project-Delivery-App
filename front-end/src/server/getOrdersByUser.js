const getOrdersByUser = (token) => {
  const userOrders = fetch('http://localhost:3001/sale', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then((response) => response.json())
    .then((data) => data);
  return userOrders;
};

export default getOrdersByUser;
