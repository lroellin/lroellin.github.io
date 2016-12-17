function Hex2Bin(n){if(!checkHex(n))return 0;return parseInt(n,16).toString(2)}
function checkHex(n){return/^[0-9A-Fa-f]{1,64}$/.test(n)}
function pad(s,z){s=""+s;return s.length<z?pad("0"+s,z):s}

function globalorlocal(bit) {
	return bit === "0" ? "Global" : "Local";
}

function unicastormulticast(bit) {
	return bit === "0" ? "Unicast" : "Multicast";
}

$("#go").click(function() {
	try {
		resetProgress();
		mac = $("#mac").val();
		if(mac === "") {
			throw "Input is empty";
		}

		if(!(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(mac))) {
			throw "Input does not match IEEE 802";
		}

		firstByte = mac.split(':', 1)[0];
		if(firstByte.length != 2) {
			firstByte = mac.split('-', 1)[0];
			if(firstByte.length != 2) {
				throw "Could not split properly" + firstByte
			}
		}
		$("#first-byte").text(firstByte);
		binary = Hex2Bin(firstByte);
		binary = pad(binary, 8);
		$("#high-bits").text(binary.substring(0,4));
		$("#low-bits-two-first").text(binary.substring(4,6));
		globalLocal = binary.substring(6,7);
		$(".global-local").text(globalLocal);
		unicastMulticast = binary.substring(7,8);
		$(".unicast-multicast").text(unicastMulticast);

		$("#global-local-text").text(globalorlocal(globalLocal));
		$("#unicast-multicast-text").text(unicastormulticast(unicastMulticast));

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
