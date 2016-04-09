$("#encrypt").click(function() {
	let cleartext = $("#cleartext").val();
	var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase"); var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
	alert(encrypted);
	alert(decrypted);
	$("#crypt").val(cleartext);
});

$("#decrypt").click(function() {
	let crypt = $("#crypt").val();
	$("#cleartext").val(crypt);
});
