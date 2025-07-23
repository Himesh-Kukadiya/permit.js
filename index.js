const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to permit.js backend');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
