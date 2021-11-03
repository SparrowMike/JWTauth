const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    sendToken(user, 201, res);

  } catch (error) {
    next(error);
  }
};
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    // res
    //   .status(400)
    //   .json({ success: false, error: "Please provide email and password" });
    //? Custom error
    return next(new ErrorResponse("Please provide email and password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      // res.status(404).json({ success: false, error: "Invalid credential" });
      //? Custom error
      return next(new ErrorResponse("Invalid credential", 401));
    }
    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      // res.status(404).json({ success: false, error: "Invalid credentials " });
      //? Custom error
      return next(new ErrorResponse("Invalid credential", 401));
    }
    sendToken(user, 200, res)
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.forgotpassword = (req, res, next) => {
  res.send("Forgot Password Route");
};

exports.resetpassword = (req, res, next) => {
  res.send("Reset Password Route");
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};
