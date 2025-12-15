require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const contactRoutes = require('./routes/contact');
const projectRoutes = require('./routes/projects');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';
mongoose.connect(MONGO).then(()=>console.log('MongoDB connected')).catch(err=>console.error(err));

app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log('Server running on port ' + PORT));
