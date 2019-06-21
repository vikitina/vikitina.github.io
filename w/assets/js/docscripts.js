$(document).ready(function() {

	$("a.fancybox").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'hideOnContentClick': true
	});
	
	$("form#auth_form input").keypress(function (event) {
		if (event.keyCode == 13) 
			$("form#auth_form").submit();
	});

	
});
