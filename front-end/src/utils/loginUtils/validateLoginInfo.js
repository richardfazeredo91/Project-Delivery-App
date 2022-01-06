const validateLoginInfo = (login, password) => {
  const patternLogin = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const maxPasswordLength = 5;
  if (password.length <= maxPasswordLength && patternLogin.test(login)) {
    return true;
  }
  return false;
};

export default validateLoginInfo;
