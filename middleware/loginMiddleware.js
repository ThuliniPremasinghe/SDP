const validateLogin = (req, res, next) => {
    const { user_name, password } = req.body;
  
    if (!user_name || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }
  
    next();
};
  
export default validateLogin;
