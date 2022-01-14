import registerAttempt from '../../server/registerAttempt';

const handleRegisterButton = async (e, name, email, password) => {
  e.preventDefault();
  const response = await registerAttempt(name, email, password);
  if (response.token) {
    localStorage.setItem('user', response);
    window.location.href = '/customer/products';
    return;
  }
  return false;
};

export default handleRegisterButton;
