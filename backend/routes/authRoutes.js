const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModels');
const router = express.Router();

// Registro de usuario
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  
  // Hashear la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const user = new User({ username, password: hashedPassword });

  try {
    await user.save();
    res.status(201).send('Usuario registrado');
  } catch (error) {
    res.status(400).send('Error al registrar el usuario');
  }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) return res.status(400).send('Usuario no encontrado');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send('Contraseña incorrecta');

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
