const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/user'));
app.use('/api/todos', require('./routes/todos'));
app.use('/api/list', require('./routes/list'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
