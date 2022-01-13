const saleAttempt = async (
  products,
  { sellerName, totalPrice, deliveryAddress, deliveryNumber },
) => {
  const loginData = fetch('http://localhost:3001/sale', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authentication: localStorage.getItem('user').token,
    },
    body: JSON.stringify({
      products,
      sellerName,
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

/*
{
"products":[
{ "productId": 1, "quantity": 3},
{ "productId": 4, "quantity": 1},
{ "productId": 7, "quantity": 5}
],
"sellerName": "Fulana Pereira",
"totalPrice": 28.30,
"deliveryAddress": "rua paraisopolis",
"deliveryNumber": "numero 507, apto 102"
}
*/
