import registerAttempt from '../../server/registerAttempt';

const handleRegisterButton = async (e, name, email, password) => {
  e.preventDefault();
  const response = await registerAttempt(name, email, password);
  if (response.token) {
    localStorage.setItem('token', response.token);
    localStorage.setItem('email', response.email);
    localStorage.setItem('name', response.name);
    window.location.href = '/customer/products';
    return;
  }
  console.log(`${response} + TESTE`);
  return false;
};

export default handleRegisterButton;
