import db from "../config/db.js";

const createRegisterTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contact_number VARCHAR(20) NOT NULL,
    nic VARCHAR(20) NOT NULL,
    user_name VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'customer', 'manager') DEFAULT 'customer',
    terms_accepted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

db.query(createRegisterTableQuery, (err) => {
  if (err) {
    console.error("Error creating users table:", err);
  } else {
    console.log("Users table ready.");
  }
});

class User {
  static createUser(userData, callback) {
    const sql = "INSERT INTO users (full_name, email, contact_number, nic, user_name, password, terms_accepted) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, userData, callback);
  }
}

export default User;
