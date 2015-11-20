$(document).ready(function () {

    $("#sn1").animate({
        marginLeft: "0px",
        marginRight: "0px",
        opacity: 1

    }, 1000, function () {

    });

	$(document).scroll(function (e) {




		if ($(window).scrollTop() >= ($(document).height() - $(window).height()) * 0.17) {

			$("#sn2").animate({
				marginLeft: "0px",
				marginRight: "0px",
				opacity: 1


			}, 1000, function () {

			});
		}

		if ($(window).scrollTop() >= ($(document).height() - $(window).height()) * 0.40) {

			$("#sn3").animate({
				marginLeft: "0px",
				marginRight: "0px",
				opacity: 1


			}, 1000, function () {

			});
		}

		if ($(window).scrollTop() >= ($(document).height() - $(window).height()) * 0.7) {

			$("#sn4").animate({
				marginLeft: "0px",
				marginRight: "0px",
				opacity: 1


			}, 1000, function () {

			});
		}
	});
});