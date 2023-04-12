// Define a function to send a request to the Elixir backend
function sendRequest() {
	// Get input value from user
	const input = document.getElementById("input").value;

	// Create a new XMLHttpRequest object
	const xhr = new XMLHttpRequest();

	// Define the request URL and method
	const url = "http://localhost:4000/process";
	const method = "POST";

	// Set the request headers
	xhr.setRequestHeader("Content-Type", "application/json");

	// Define the callback function for when the response is received
	xhr.onreadystatechange = function() {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			// Check if the request was successful
			if (xhr.status === 200) {
				// Parse the JSON response and display it
				const response = JSON.parse(xhr.responseText);
				document.getElementById("output").innerHTML = response.result;
			} else {
				// Display an error message
				document.getElementById("output").innerHTML = "Error: " + xhr.statusText;
			}
		}
	};

	// Create the request payload
	const payload = {input};

	// Convert the payload to a JSON string
	const jsonPayload = JSON.stringify(payload);

	// Send the request
	xhr.open(method, url, true);
	xhr.send(jsonPayload);
}
