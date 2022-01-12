const validateAdminInfo = (newUserName, newUserEmail, newUserPassword) => {
  const patternEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const minPasswordLength = 6;
  const minNameLength = 12;
  if (newUserName.length >= minNameLength && newUserPassword.length >= minPasswordLength && patternEmail.test(newUserEmail)) {
    return true;
  }
  return false;
};

export default validateAdminInfo;