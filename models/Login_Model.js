import db from "../config/db.js";

const LoginModel = {
  findByUsernameOrEmail: (user_name, email, callback) => {
    db.query("SELECT * FROM users WHERE user_name = ? OR email = ?", [user_name, email], callback);
  },

  createUser: (userData, callback) => {
    const query = `INSERT INTO users (full_name, email, contact_number, nic, user_name, password, terms_accepted) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(query, userData, callback);
  },
};

export default LoginModel;
