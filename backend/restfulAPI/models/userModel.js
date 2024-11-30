const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Tempat penyimpanan pengguna sementara
const users = [];

const createUser = (username, password, role) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = { id: users.length + 1, username, password: hashedPassword, role };
  users.push(newUser);
  return newUser;
};

const getUserByUsername = (username) => {
  return users.find(user => user.username === username);
};

const generateToken = (user) => {
  return jwt.sign({ user: { id: user.id, username: user.username, role: user.role } }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = { createUser, getUserByUsername, generateToken };
