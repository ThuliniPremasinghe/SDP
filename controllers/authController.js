import bcrypt from 'bcryptjs';
import db from "../config/db.js";

const registerUser = (req, res) => {
  const { full_name, email, contact_number, nic, user_name, password, terms_accepted } = req.body;

  const userExistsQuery = "SELECT * FROM users WHERE email = ? OR user_name = ?";
  db.query(userExistsQuery, [email, user_name], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error', error: err });

    if (result.length > 0) return res.status(400).json({ message: 'User already exists' });

    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return res.status(500).json({ message: 'Error hashing password', error: err });

      const userData = [full_name, email, contact_number, nic, user_name, hashedPassword, terms_accepted];
      const insertQuery = `INSERT INTO users (full_name, email, contact_number, nic, user_name, password, terms_accepted) VALUES (?, ?, ?, ?, ?, ?, ?)`;

      db.query(insertQuery, userData, (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        
        res.status(201).json({ message: 'User registered successfully' });
      });
    });
  });
};

export default { registerUser };
