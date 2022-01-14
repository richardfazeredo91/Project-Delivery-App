import adminRegisterAttempt from '../../server/adminRegisterAttempt';

const handleRegisterButton = async (name, email, password, role) => {
  const response = await adminRegisterAttempt(name, email, password, role);
  console.log(response);
  if (response.token) {
    console.log(`${response} + TESTE`);
    return;
  }
  return false;
};

export default handleRegisterButton;
