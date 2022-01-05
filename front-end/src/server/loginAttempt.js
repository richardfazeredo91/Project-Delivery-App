const loginAttempt = (login, password) => {
  fetch('http://localhost:3001/user/login ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.user);
        return true;
      }
      return false;
    });
};

export default loginAttempt;
