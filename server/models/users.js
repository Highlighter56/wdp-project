

// async function getAllUsers() {
// 	let sql = `
// 		SELECT * FROM Users;
// 	`

// 	return await confirm.query(sql)
// }

// module.exports = { getAllUsers }


// Will eventualy be reaplaced by SQL
const users = [
	{
		username: "bobby",
		password: "badPassword"
	},
	{
		username: "charlie",
		password: "1234"
	},
	{
		username: "sam",
		password: "987"
	}
]

function getAllUsers() {
	return users;
}

module.exports = {getAllUsers}