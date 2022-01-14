import loginAttempt from '../../server/loginAttempt';
import route from './routes';

const handleLoginButton = async (e, email, password, navigate) => {
  e.preventDefault();
  const response = await loginAttempt(email, password);
  if (response.token) {
    localStorage.setItem('user', JSON.stringify(response));

    navigate(route[response.role]);
    return;
  }
  return false;
};

export default handleLoginButton;
