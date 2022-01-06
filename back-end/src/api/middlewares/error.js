module.exports = (err, _req, res, _next) => {
  const decoder = {
    ER_DUP_ENTRY: { status: 409, message: 'Cannot register this email' },
    INVALID_FIELDS: { status: 400, message: 'Invalid fields' },
    USER_NOT_FOUND: { status: 404, message: 'User does not exist or wrong password' },
    MISSING_TOKEN: { status: 401, message: 'Token not found' },
    INVALID_TOKEN: { status: 401, message: 'Expired or invalid token' },
    // ER_NO_REFERENCED_ROW_2: { status: 400, message: '"categoryIds" not found' },
    // INEXISTENT_POST: { status: 404, message: 'Post does not exist' },
    // ACCESS_DENIED: { status: 401, message: 'Unauthorized user' },
  };
  let response;
  if (err.parent) response = decoder[err.parent.code];
  else response = decoder[err.message];
  return res.status(response.status || 500)
  .json({ message: response.message || 'internal server error' });
};