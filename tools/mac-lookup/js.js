$("#go").click(function() {
	try {
		resetProgress();
		mac = $("#mac").val();
		if(mac === "") {
			throw "Input is empty";
		}
		$.ajax({
			type: 'GET',
			url: 'http://macvendors.co/api/jsonp/' + mac,
			dataType: 'jsonp',
			crossDomain: true
		}).done(function(response) {
			if (response.result.error) {
				$("#progress").removeClass("active progress-bar-striped");
				$("#progress").addClass("progress-bar-warning")
				$("#Warning").show();
				$("#WarningDescription").text(response.result.error);
			} else {
				$("#progress").removeClass("active progress-bar-striped");
				$("#progress").addClass("progress-bar-success");
				$("#table").show();
				$("#prefix").html(response.result.mac_prefix);
				$("#company").html(response.result.company);
				$("#address").html(response.result.address);
			}
		}).fail(function(jqXHR, textStatus, errorThrown) {
			$("#progress").removeClass("active progress-bar-striped");
			$("#progress").addClass("progress-bar-danger")
			$("#Error").show();
			$("#ErrorDescription").text("The query was not successful");
			console.log(jqXHR);
		});
	} catch (err) {
		showError(err);
	}
});
