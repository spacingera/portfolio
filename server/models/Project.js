const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  link: String,
  tech: [String],
  imageUrl: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Project', ProjectSchema);
