
// require is how you import in js
const express = require('express');
const User = require('../models/users.js');
const router = express.Router();

router.get('/getAllUsers', async (req, res) => {
	try {
		const users = await User.getAllUsers();
		res.send(users);
	} catch (err) {
		res.status(401).send({message: error.message});
	}
});

module.exports = router;