

// Specify we want to use express
const express = require('express');
const app = express();
require("dotenv").config()
app.use(express.json())

const userRoutes = require("./server/routes/users");
const reviewRoutes = require("./server/routes/reviews");
const statRoutes = require("./server/routes/stats");

// CORS middleware
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,, Content-Type, Accept, Authorization");
	res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
	next();
});

app.use("/users", userRoutes);
app.use("/reviews", reviewRoutes);
app.use("/stats", statRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!!`));



