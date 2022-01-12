import loginAttempt from '../../server/loginAttempt';

const handleLoginButton = async (e, email, password) => {
  e.preventDefault();
  console.log('Iniciando handleLoginButton em server/loginAttempt');
  const response = await loginAttempt(email, password);
  if (response.token) {
    localStorage.setItem('user', JSON.stringify(response));
    window.location.href = '/customer/products';
    return;
  }
  return false;
};

export default handleLoginButton;
