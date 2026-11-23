

// ==== Proper Function Using the Database ====
// async function getAllStats() {
// 	let sql = `
// 		SELECT * FROM Stats;
// 	`

// 	return await confirm.query(sql)
// }



// ==== Temp ====
const stats = [
	{
		timeSpentPlaying: "1:31:45",
		deathCount: "34"
	},
	{
		timeSpentPlaying: "2:31:45",
		deathCount: "24"
	},
	{
		timeSpentPlaying: "3:31:45",
		deathCount: "14"
	}
]

function getAllStats() {
	return stats;
}

// Needed to allow other fiels to access the method
module.exports = {getAllStats}