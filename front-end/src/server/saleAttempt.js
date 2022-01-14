const saleAttempt = async (
  products,
  { sellerId, totalPrice, deliveryAddress, deliveryNumber },
) => {
  const loginData = fetch('http://localhost:3001/sale', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: JSON.parse(localStorage.getItem('user')).token,
    },
    body: JSON.stringify({
      products,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
    }),
  })
    .then((response) => response.json())
    .then((data) => data);
  return loginData;
};

export default saleAttempt;
