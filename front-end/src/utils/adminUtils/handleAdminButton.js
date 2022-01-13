
//ALterar tudo aqui
import adminRegisterAttempt from '../../server/adminRegisterAttempt';

const handleRegisterButton = async (e, name, email, password, role) => {
  e.preventDefault();
  const response = await adminRegisterAttempt(name, email, password, role);
  if (response.token) {
    console.log(`${response} + TESTE`);
    return;
  }
  return false;
};

export default handleRegisterButton;
