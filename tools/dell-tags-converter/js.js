$("#stButton").click(function() {
	try {
		// Gather input
		let stInput = $("#stInput").val().toUpperCase();
		// Error checking
		if (stInput === "") {
			throw "Input is empty";
		}

		// Calculation
		let escCode = parseInt(stInput, 36).toString();
		escCode = escCode.match(/.{1,3}/g).join("-")

		// Output
		$("#stOutput").val(escCode);

		// Reset
		$("#stWarning").hide();
		$("#stWarningDescription").text("");
	} catch (err) {
		// Show container
		$("#stWarning").show();
		// Set error
		$("#stWarningDescription").text(err);
	}
});

$("#escButton").click(function() {
	try {
		let escInput = $("#escInput").val().replace(/-/gi, '');
		if (escInput === "") {
			throw "Input is empty";
		}
		let stTag = parseInt(escInput, 10).toString(36).toUpperCase();
		$("#escOutput").val(stTag);
		$("#escWarning").hide();
		$("#escWarningDescription").text("");
	} catch (err) {
		$("#escWarning").show();
		$("#escWarningDescription").text(err);
	}

});
