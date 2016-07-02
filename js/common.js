$(document).ready(function() {
	$.material.init()
	console.log("common ready!");
});

function resetProgress() {
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
}

function showError(err) {
	$("#progress").removeClass("active progress-bar-striped");
	$("#progress").addClass("progress-bar-warning")
	$("#Warning").show();
	$("#WarningDescription").text(err)
	console.log(err);
}
