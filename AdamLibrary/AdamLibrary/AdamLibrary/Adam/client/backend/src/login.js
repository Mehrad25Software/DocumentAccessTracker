import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

const USER = {
  "admin": {
    password: "Adem_967",
    role: "adem" // make it lowercase for consistency
  }
};

const JWT_SECRET = "supersecretkey"; // Use an env variable in real apps

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = USER[username];

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "You do not have access to this page" });
  }

  const token = jwt.sign({ username, role: user.role }, JWT_SECRET, {
    expiresIn: '1h'
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "Lax"
  });

  return res.status(200).json({ message: "Login successful", role: user.role });
});

export default router;
