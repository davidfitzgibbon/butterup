$(function () {

	var butterup = {};

	butterup.horizontal_carousel = function () {
		var carousel = $('.horizontal_carousel');
		var panels = [];

		carousel.find('.panel').each(function(){
			var panel = $(this);
			panels.push(panel);
		});

		var count = panels.length;
		console.log('count: ' + count);

		// CREATE THE CONTROLS
		var controls = '<div class=controls>';
			for (var i = 0; i < count; i++) { console.log('hi'); controls += '<a href=# data-child=' + i + '></a>'; }
		controls += '</div>';
		carousel.append(controls);

		// select the controls
		controls = $('.controls');

		carousel_controls(controls);
	};

	function carousel_controls (controls) {
		controls.click( function (e) {
			if(e.target.tagName == "A") {
				var child = $(e.target),
				childNum = child.attr('data-child');
				childNum++;

				controls.find('a').each(function(){$(this).removeClass('selected');});
				child.addClass('selected');

				$('.horizontal_carousel .panel').hide();
				$('.horizontal_carousel .panel:nth-child(' + childNum + ')').show();


				console.log(' Move to the ' + childNum + ' item in the list');
			}
		} );
	}

	butterup.horizontal_carousel();

});