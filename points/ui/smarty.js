$(function(){
	
	var fix = 0;
	var points = 0;
	var scale = 1;
	var $scale = $('#scale');
	var $points = $('#points');
	var $smart = $("#smart");
	
	// Change a value
	$smart.on("change keyup", function() {
		var temp = $scale.val().replace(/[^0-9./*+-]/g,'');
		$scale.val(temp);
		var oldScale = scale;
		if (temp === '') {
			scale = 1;
		} else {
			try { 
				scale = eval( temp );
			} 
			catch(error) {
				scale = oldScale;
			}
			if (scale === NaN) {
				scale = oldScale;
			}
		}
		showPoints();
	});

	// Click on Points to change percision
	$points.on('click', function() {
		fix = fix ? 0 : 2;
		$points.text(points.toFixed(fix));
	});

	// Update on Blur
	$scale.on('blur', function() {
		//scale = eval( $scale.val() );
		$scale.val( Math.round(scale*100)/100 );
	});

	// Select value on focus
	$smart.on('click', 'button', function(event) {
		var target = event.target,
			$target = $(target);
		if(target.id === 'clearScale') {
			scale = 1;
		}
		
		// clear the parent -> input
		$target.parent().children('input').val('').focus();
		showPoints();
	});
	
	// function to calc and display points
	function showPoints() {
		points = ( 
			$('#calories').val()*.0305
			+ $('#fat').val()*.275
			+ $('#sugar').val()*.120
			- $('#protein').val()*.098 )
			* scale;
		$points.text(points.toFixed(fix));
	}

});
