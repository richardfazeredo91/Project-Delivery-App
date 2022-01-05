import { loginAttempt } from '../server/loginAttempt';
export const handleLoginButton = async (e, login, password) => {
    e.preventDefault();
    const response = await loginAttempt(login, password);
    if (response.status === 200) {
      window.location.href = '/TELA DE LOGADO';
    } else {
      setloginError(true);
    }
  
}