import loginAttempt from '../../server/loginAttempt';

const handleLoginButton = async (e, email, password) => {
  e.preventDefault();
  const response = await loginAttempt(email, password);
  if (response.token) {
    window.location.href = '/customer/products';
  } else {
    return true;
  }
  return false;
};

export default handleLoginButton;
