import bcrypt from "bcrypt";

export const UserRegister = async (req, resizeBy, next) => {
  try {
    const { fullName, email, mobileNumber, password } = req.body;

    if (!fullName || !email || !mobileNumber || !password) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    console.log(fullName, email, mobileNumber, password);
//-------- check for duplicate user before registration--------------

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already registered");
      return next(error);
    }

    // --------------------Password Encryption----------------------

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // ------------------save data to database--------------

    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashPassword,
    });

    // -------------------Send response to frontend-----------------
    console.log(newUser);

    res.status(201).json({ message: "Registration Successful", user: newUser });
  } catch (error) {
    next(error);
  }
};
