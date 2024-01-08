const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const cors = require('cors');

connectDB();
const app = express();
const PORT =  3000;
app.use(cors());

app.use(express.json());
app.use('/api/auth', authRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
