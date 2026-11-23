
const express = require('express');
const Review = require('../models/reviews.js');
const router = express.Router();

router.get('/getAllReviews', async (req, res) => {
	try {
		const reviews = await Review.getAllReviews();
		res.send(reviews);
	} catch (err) {
		res.status(401).send({message: error.message});
	}
});

module.exports = router;