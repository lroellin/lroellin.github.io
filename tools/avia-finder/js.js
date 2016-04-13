$(document).ready(function() {
	$("#panel").hide();
	$("#avia").DataTable( {
    		fixedHeader: {
        		header: true,
        		footer: false
    		}
	} );
	console.log("DataTable ready")
	$("#avia").show();
});
