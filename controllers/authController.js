const { users } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.JWT_SECRET;
console.log("JWT_SECRET:", process.env.JWT_SECRET);
const AuthController = {
  register: async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await users.create({ username, password });
      res.json({ message: 'User registered', user });
    } catch (err) {
      res.status(400).json({ error: 'Username already exists' });
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;

    const user = await users.findOne({ where: { username, password } });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
  },
};

module.exports = AuthController;
