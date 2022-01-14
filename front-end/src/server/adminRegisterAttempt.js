const adminRegisterAttempt = async (name, email, password, role) => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  const newUserData = fetch('http://localhost:3001/admin/register ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
    body: JSON.stringify({
      name,
      email,
      password,
      role,
    }),
  })
    .then((response) => response.json())
    .then((data) => data);
  return newUserData;
};

export default adminRegisterAttempt;
