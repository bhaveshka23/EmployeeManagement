const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
dotenv.config();

const app = express();
app.use(cors()); 
app.use(express.json());


app.get('/', (req, res) => res.send('Employee API running'));


app.use('/api/employees', employeeRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
