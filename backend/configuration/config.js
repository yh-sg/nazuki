const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).json({
      message: "Unable to access!",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWTTOKENPASSWORD);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Token is not valid",
    });
  }
};