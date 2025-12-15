const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Public get
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Add new project (simple, no auth)
router.post('/', async (req, res) => {
  try {
    const { title, description, link, tech, imageUrl } = req.body;
    const p = new Project({ title, description, link, tech, imageUrl });
    await p.save();
    res.json(p);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
