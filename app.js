const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const db = require('./models');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = process.env.PORT || 8085;

app.use(bodyParser.json());
app.use('/api/employee', employeeRoutes);

db.sequelize.authenticate().then(() => {
  console.log("✅ DB Connected");
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("❌ DB Connection failed:", err);
});
