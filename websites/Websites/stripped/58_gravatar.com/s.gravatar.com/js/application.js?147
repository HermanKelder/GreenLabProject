grav={};

$(document).ready(function(){
	$('#overlay').hide();
	$('#overlay').height($(document).height());
	$('#overlay').width($(document).width());
	$(window).bind('resize', function(){
		$('#overlay').height($(document).height());
		$('#overlay').width($(document).width());
	});
});

function showOverlay() {
	$('#overlay').show();
	$('#overlay').fadeTo("normal", 0.6, function() {$('#gravatar_confirmation_container').fadeIn("fast");});
	window.scroll(0,0);
}

function hideOverlay() {
	$('#gravatar_confirmation_container').fadeOut(
		"normal", 
		function() { 
			$('#overlay').fadeTo("fast", 0, function() { 
				$('#overlay').hide(0, function() {
						$('#overlay').height($(document).height());
						$('#overlay').width($(document).width());
				}); 
			});
			$('#gravatar_list > div > div > div.pending').each( function(e) {
				$(this).removeClass('pending');
			});
		}
	);
}
