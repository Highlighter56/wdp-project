

// ==== Proper Function Using the Database ====
// async function getAllUsers() {
// 	let sql = `
// 		SELECT * FROM Users;
// 	`

// 	return await confirm.query(sql)
// }



// ==== Temp ====
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

// Needed to allow other fiels to access the method
module.exports = {getAllUsers}