console.log("User!")

let loginForm = document.getElementById("loginForm")

// console.log(loginForm)
/**
 * When calling a function, regular functions can
 * be declared anywhere, and will be hoisted to
 * the rest of the program 
 */
// loginForm.addEventListener("submit", login)


// Same thing but as an Arrow Function
let login2 = (e) => {

	/**
	 * The default behavior of a form is to 
	 * refresh the page (which would prevent the 
	 * info from being submitted. This stops it)
	 */
	e.preventDefault()

	// Get Username and Password
	let username = document.getElementById("username").value
	let password = document.getElementById("pswd").value

	// console.log(username)
	// console.log(password)

	// Creating an object literal from the form submission
	if(validatePassword(password)) {
		const user = {
			username: username,
			password: password
		}
	
		console.log(user)
	} else {
		let errorMessage = "Password or Username is Incorrect"
		let p = document.getElementById("error")
		p.innerText = errorMessage
	}
}

/**
 * Arrow functions can only be called after they 
 * are declared (they are not hoisted)
 */
loginForm.addEventListener("submit", login2)


function validatePassword(password) {
	// This is only temp
	return false
}