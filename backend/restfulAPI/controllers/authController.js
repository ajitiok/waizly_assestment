const { createUser, getUserByUsername, generateToken } = require('../models/userModel');
const bcrypt = require('bcryptjs');

// Registrasi pengguna baru
const registerUser = (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ message: 'Please provide username, password, and role' });
  }

  const existingUser = getUserByUsername(username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = createUser(username, password, role);
  const token = generateToken(newUser);

  res.status(201).json({ message: 'User registered successfully', token });
};

// Login pengguna
const loginUser = (req, res) => {
  const { username, password } = req.body;

  const user = getUserByUsername(username);
  if (!user) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  const token = generateToken(user);

  res.status(200).json({ message: 'Login successful', token });
};

module.exports = { registerUser, loginUser };
