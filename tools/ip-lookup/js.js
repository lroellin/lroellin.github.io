$("#go").click(function() {
	try {
		if (!$("#progress").hasClass("active")) {
			$("#progress").addClass("active")
		}

		if (!$("#progress").hasClass("progress-bar-striped")) {
			$("#progress").addClass("progress-bar-striped")
		}
		$("#progress").removeClass("progress-bar-success progress-bar-warning progress-bar-danger")
		$(".start-show").show();
		$(".start-hide").hide();
		$(".start-empty").html("");
		let ip = $("#ip").val();
		$.ajax({
			type: 'GET',
			url: 'http://ip-api.com/json/' + ip,
			dataType: 'jsonp',
			crossDomain: true
		}).done(function(response) {
			if (response.status === "fail") {
				$("#progress").removeClass("active progress-bar-striped");
				$("#progress").addClass("progress-bar-warning")
				$("#Warning").show();
				$("#WarningDescription").text(response.message);
			} else {
				$("#progress").removeClass("active progress-bar-striped");
				$("#progress").addClass("progress-bar-success");
				$("#table").show();
				$("#address").html(response.query);
				$("#country").html(response.countryCode);
				$("#region").html(response.region);
				$("#city").html(response.city);
				$("#isp").html(response.isp);
				$("#as").html(response.as);
				$("#organization").html(response.org);
				$("#reverse").html(response.reverse);
			}
		}).fail(function(jqXHR, textStatus, errorThrown) {
			$("#progress").removeClass("active progress-bar-striped");
			$("#progress").addClass("progress-bar-danger")
			$("#Error").show();
			$("#ErrorDescription").text("The query was not successful. The EasyPrivacy list of Ad blockers may block ip-api.com");
			console.log(jqXHR);
		});
	} catch (err) {
		$("#progress").removeClass("active progress-bar-striped");
		$("#progress").addClass("progress-bar-warning")
		$("#Warning").show();
		$("#WarningDescription").text(err)
	}
});
