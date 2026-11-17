console.log("User!")

let registerForm = document.getElementById("registerForm")

registerForm.addEventListener("submit", register)


function register(e){

	// Prevent Reloading of Page
	e.preventDefault()

	// Get Username and Password
	let fname = document.getElementById("fname").value
	let lname = document.getElementById("lname").value
	let username = document.getElementById("username").value
	let password = document.getElementById("pswd").value

	// Creating an object literal from the form submission
	if(validatePassword(password)) {
		const user = {
			fname: fname,
			lname: lname,
			username: username,
			password: password
		}
	
		console.log(user)
	} else {
		let errorMessage = "Enter more Complex Password"
		let p = document.getElementById("error")
		p.innerText = errorMessage
	}
}


function validatePassword(password) {
	// This is only temp
	return true
}