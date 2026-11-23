

// ==== Proper Function Using the Database ====
// async function getAllReviews() {
// 	let sql = `
// 		SELECT * FROM Reviews;
// 	`

// 	return await confirm.query(sql)
// }



// ==== Temp ====
const reviews = [
	{
		rating: 5,
		comment: "Great Game!"
	},
	{
		rating: 4,
		comment: "So Fun!"
	},
	{
		rating: 3,
		comment: "Cool!"
	}
]

function getAllReviews() {
	return reviews;
}

// Needed to allow other fiels to access the method
module.exports = {getAllReviews}