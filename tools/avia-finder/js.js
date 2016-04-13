$(document).ready(function() {
	$("#panel").hide();
	$("#avia").DataTable( {
    		fixedHeader: {
        		header: true,
        		footer: false
    		},
    		"pageLength": 25
	} );
	console.log("DataTable ready")
	$("#avia").show();
});
