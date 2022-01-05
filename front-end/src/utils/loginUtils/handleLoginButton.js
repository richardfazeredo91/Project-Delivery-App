import loginAttempt from '../../server/loginAttempt';

const handleLoginButton = async (e, email, password) => {
  e.preventDefault();
  const response = await loginAttempt(email, password);
  if (response) {
    window.location.href = '/TELA DE LOGADO';
  } else {
    return true;
  }
  return false;
};

export default handleLoginButton;
