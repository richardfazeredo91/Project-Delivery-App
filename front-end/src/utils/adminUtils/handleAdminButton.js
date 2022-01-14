import adminRegisterAttempt from '../../server/adminRegisterAttempt';

const handleRegisterButton = async (name, email, password, role) => {
  const response = await adminRegisterAttempt(name, email, password, role);
  if (response.token) {
    return;
  }
  return false;
};

export default handleRegisterButton;
