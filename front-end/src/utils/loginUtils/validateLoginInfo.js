const validateLoginInfo = (login, password) => {
  const patternLogin = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const minPasswordLength = 6;
  if (password.length >= minPasswordLength && patternLogin.test(login)) {
    return true;
  }
  return false;
};

export default validateLoginInfo;
