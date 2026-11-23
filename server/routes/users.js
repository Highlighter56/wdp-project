
// require is how you import in js
// console.log("===============ONE=====================")
const express = require('express');
// console.log("===============TWO=====================")
const User = require('../models/users.js');
// console.log("===============THREE=====================")
const router = express.Router();
// console.log("===============FOUR=====================")

router.get('/getAllUsers', async (req, res) => {
	try {
		const users = await User.getAllUsers();
		res.send(users);
	} catch (err) {
		res.status(401).send({message: error.message});
	}
});

module.exports = router;