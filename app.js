const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const db = require('./models');
const employeeRoutes = require('./routes/employeeRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 8085;

app.use(bodyParser.json());

app.use(express.json()); // <--- This is required!
app.use(express.urlencoded({ extended: true }));

app.use('/api/employee', employeeRoutes);
app.use('/api/auth', authRoutes);

db.sequelize.authenticate().then(() => {
  console.log("✅ DB Connected");
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("❌ DB Connection failed:", err);
});
