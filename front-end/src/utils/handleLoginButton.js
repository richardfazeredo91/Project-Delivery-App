import loginAttempt from '../server/loginAttempt';

const handleLoginButton = async (e, login, password) => {
  e.preventDefault();
  const response = await loginAttempt(login, password);
  const successApiReturn = 200;
  if (response.status === successApiReturn) {
    window.location.href = '/TELA DE LOGADO';
  } else {
    return true;
  }
};

export default handleLoginButton;
