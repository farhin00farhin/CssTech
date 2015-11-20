$("#open-hand, .hand-click, .hand-circle").click(function () {
	
	$("#hand-thumb").delay( 0 ).animate({
		opacity: 1
	}, 1500);

	$("#hand-index").delay(300).animate({
		opacity: 1
	}, 1500);

	$("#hand-middle").delay(600).animate({
		opacity: 1
	}, 1500);

	$("#hand-ring").delay(900).animate({
		opacity: 1
	}, 1500);

	$("#hand-little").delay(1200).animate({
		opacity: 1
	}, 1500);
});
