let commentForm = document.getElementById("commentForm");

commentForm.addEventListener("submit", leaveComment);

function leaveComment(e) {
	// Prevent the page from reloading
	e.preventDefault();

	// Grab the comment text (just like before)
	let commentText = document.getElementById("comment").value;

	// Find whichever radio button is currently checked
	let selectedStar = document.querySelector('input[name="starReview"]:checked');

	// Safely extract the value (in case they didn't pick a star)
	let rating = selectedStar ? selectedStar.value : "No rating selected";

	// Create an object literal with the form data
	const review = {
		rating: rating,
		comment: commentText
	};

	console.log(review);
}
