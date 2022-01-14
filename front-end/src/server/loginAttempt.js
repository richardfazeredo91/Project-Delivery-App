const loginAttempt = async (email, password) => {
  const loginData = fetch('http://localhost:3001/user/login ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => data);
  return loginData;
};

export default loginAttempt;
