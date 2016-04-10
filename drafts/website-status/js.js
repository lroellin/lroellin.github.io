$("#go").click(function() {
	try {
		if (!$("#progress").hasClass("active")) {
			$("#progress").addClass("active")
		}

		if (!$("#progress").hasClass("progress-bar-striped")) {
			$("#progress").addClass("progress-bar-striped")
		}
		$("#progress").removeClass("progress-bar-success progress-bar-warning progress-bar-danger")
		$("#panel").show();
		$("#Warning").hide();
		$("#WarningDescription").text("");
		$("#Error").hide();
		$("#ErrorDescription").text("");
		let website = $("#website").val();
		website = "http://www.golem.de"
		/*if(ip === "") {
			throw "Input is empty";
		}*/
		$.ajax({
			type: 'GET',
			url: website,
			dataType: 'html',
			crossDomain: true,
		}).done(function(response) {
			if (response.status == "fail") {
				$("#progress").removeClass("active progress-bar-striped");
				$("#progress").addClass("progress-bar-warning")
				$("#Warning").show();
				$("#WarningDescription").text(response.message);
			} else {
				console.log("Success");
			}
		}).fail(function(jqXHR, textStatus, errorThrown) {
			$("#progress").removeClass("active progress-bar-striped");
			$("#progress").addClass("progress-bar-danger")
			$("#Error").show();
			$("#ErrorDescription").text("The query was not successful");
			console.log(jqXHR);
		});
	} catch (err) {
		$("#progress").removeClass("active progress-bar-striped");
		$("#progress").addClass("progress-bar-warning")
		$("#Warning").show();
		$("#WarningDescription").text(err)
	}
});
