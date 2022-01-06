import loginAttempt from '../../server/loginAttempt';

const handleLoginButton = async (e, email, password) => {
  e.preventDefault();
  const response = await loginAttempt(email, password);
  if (response.token) {
    localStorage.setItem('name', response.name);
    localStorage.setItem('email', response.email);
    localStorage.setItem('role', response.role);
    localStorage.setItem('token', response.token);
    window.location.href = '/customer/products';
    return;
  }
  return false;
};

export default handleLoginButton;
