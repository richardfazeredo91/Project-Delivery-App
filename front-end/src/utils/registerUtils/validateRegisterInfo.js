const validateLoginInfo = (name, login, password) => {
  const patternLogin = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const minPasswordLength = 6;
  const minNameLength = 12;
  if (
    password.length >= minPasswordLength
    && patternLogin.test(login)
    && name.length >= minNameLength
  ) {
    return true;
  }
  return false;
};

export default validateLoginInfo;
