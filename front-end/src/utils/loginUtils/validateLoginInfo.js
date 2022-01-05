const validateLoginInfo = (login, password) => {
  const patternLogin = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const minPasswordLength = 6;
  if (password.length >= minPasswordLength && patternLogin.test(login)) {
    return true; // Colocar a função de login do backend;
  }
  return false;
};

export default validateLoginInfo;
