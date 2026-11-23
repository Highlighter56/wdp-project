
const express = require('express');
const Stat = require('../models/stats.js');
const router = express.Router();

router.get('/getAllStats', async (req, res) => {
	try {
		const stats = await Stat.getAllStats();
		res.send(stats);
	} catch (err) {
		res.status(401).send({message: error.message});
	}
});

module.exports = router;