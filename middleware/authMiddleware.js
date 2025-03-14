const validateRegistration = (req, res, next) => {
  const { full_name, email, contact_number, nic, user_name, password, confirmPassword, terms_accepted } = req.body;
  
  if (!full_name || !email || !contact_number || !nic || !user_name || !password || !confirmPassword || terms_accepted !== true) {
    return res.status(400).json({ message: 'All fields are required and terms must be accepted' });
  }
  
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }
  
  next();
};

export default validateRegistration;
