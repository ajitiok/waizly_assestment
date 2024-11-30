const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const { protect } = require('./middleware/authMiddleware');

dotenv.config();
const app = express();
app.use(express.json());

// Rute autentikasi
app.use('/api/auth', authRoutes);

// Rute buku
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
