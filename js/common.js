$('#Next-button').click(function (e) {
	e.preventDefault();
	var $tabs = $('.nav-tabs li');

	$tabs.filter('.active').next('li').find('a[data-toggle="tab"]').tab('show');
	$('html, body').animate({
		scrollTop: $(".nav-tabs").offset().top
	}, 1);
})
$('#Previous-button').click(function (e) {
	e.preventDefault();
	var $tabs = $('.nav-tabs li');

	$tabs.filter('.active').prev('li').find('a[data-toggle="tab"]').tab('show');
	$('html, body').animate({
		scrollTop: $(".nav-tabs").offset().top
	}, 1);
})

$('.ref').click(function (e) {
	e.preventDefault();
	$('a[href="#References"]').tab('show');

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 1);
})

// Javascript to enable link to tab
var url = document.location.toString();
if (url.match('#')) {
	$('.nav-tabs a[href=#' + url.split('#')[1] + ']').tab('show');
	$('html, body').animate({
		scrollTop: $(".nav-tabs").offset().top
	}, 1);
}

$('.dropdown-menu a').click(function (e) {
	location.reload();

})

$(document).ready(function () {
	var url = document.location.toString();
	if (url.match('#')) {
		$('.nav-tabs a[href=#' + url.split('#')[1] + ']').tab('show');
		$('html, body').animate({
			scrollTop: $(".nav-tabs").offset().top
		}, 1);
	}
	myFunction();
});
function myFunction() {
    if ($('.nav-tabs a:first')[0] == $(".nav-tabs li.active a")[0]) {
        $("#Previous-button").hide();
    }
    else {
        $("#Previous-button").show();
    }


    if ($('.nav-tabs a:last')[0] == $(".nav-tabs li.active a")[0]) {
        $("#Next-button").hide();
    }
    else {
        $("#Next-button").show();
    }

}
$('a[data-toggle="tab"]').on('shown.bs.tab', myFunction);


