const decoder = (error) => {
  const codes = {
  ER_DUP_ENTRY: { status: 409, message: 'Cannot register this email' },
  INVALID_FIELDS: { status: 400, message: 'Invalid fields' },
  WRONG_CREDENTIALS: { status: 404, message: 'email or password incorrect' },
  USER_NOT_FOUND: { status: 404, message: 'User does not exist' },
  SALES_NOT_FOUND: { status: 404, message: 'Sale(s) not found' },
  MISSING_TOKEN: { status: 401, message: 'Token not found' },
  INVALID_TOKEN: { status: 401, message: 'Expired or invalid token' },
  ACCESS_DENIED: { status: 401, message: 'Unauthorized user' },
  ER_NO_REFERENCED_ROW_2: { status: 400, message: 'products not found' },
  SELLER_NOT_FOUND: { status: 404, message: 'seller does not exist' },
  default: { status: 500, message: 'internal server error' },
  };
  return (codes[error] || codes.default);
};

module.exports = (err, _req, res, _next) => {
  let response;

  if (err.parent) response = decoder(err.parent.code);
  else response = decoder(err.message);
  return res.status(response.status).json({ message: response.message });
};
