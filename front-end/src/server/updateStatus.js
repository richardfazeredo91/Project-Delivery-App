const updateStatus = async (id, status) => {
  const sale = fetch(`http://localhost:3001/sale/status/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: JSON.parse(localStorage.getItem('user')).token,
    },
    body: JSON.stringify({
      status,
    }),
  })
    .then((response) => response.json())
    .then((data) => data);
  return sale;
};

export default updateStatus;
