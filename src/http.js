const sendSuccess = (res, message, data) => {
  res.status(200).json({ message, data });
};

const sendError = (res, message, statusCode = 500) => {
  res.status(statusCode).json({ message });
};

const injectUtilities = (req, res, next) => {
  req.sendSuccess = sendSuccess.bind(null, res);
  req.sendError = sendError.bind(null, res);
  next();
};

module.exports = {
  sendSuccess,
  sendError,
  injectUtilities,
};
