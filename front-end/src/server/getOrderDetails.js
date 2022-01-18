const getOrderDetails = (id) => {
  const orderDetails = fetch(`http://localhost:3001/sale/details/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: JSON.parse(localStorage.getItem('user')).token,
    },
  })
    .then((response) => response.json())
    .then((data) => data);

  return orderDetails;
};

export default getOrderDetails;
