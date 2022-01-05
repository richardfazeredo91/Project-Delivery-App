export const loginAttempt = (login, password) => {
  fetch('ENDPOINT POST QUE VERIFICA LOGIN', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        password,
        }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.user);
        return true;
      }
      return false;
    }
  );
};
