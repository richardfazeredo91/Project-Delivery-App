const validateLoginInfo = (name, login, password) => {
  const patternLogin = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const maxPasswordLength = 5;
  const maxNameLength = 11;
  if (
    password.length <= maxPasswordLength
    && patternLogin.test(login)
    && name.length <= maxNameLength
  ) {
    return true;
  }
  return false;
};

export default validateLoginInfo;
