const registerAttempt = async (name, email, password) => {
  const loginData = fetch('http://localhost:3001/admin/register ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => data);
  return loginData;
};

export default registerAttempt;
