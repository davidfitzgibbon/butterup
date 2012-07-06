$(function () {

	butterup = {};

	butterup.horizontal_carousel = function (item) {
		var carousel = $(item);
		var panels = [];

		carousel.addClass('horizontal_carousel');

		carousel.find('.panel').each(function(){
			var panel = $(this);
			panels.push(panel);
		});

		var count = panels.length;

		// CREATE THE CONTROLS
		var controls = '<div class=controls>';
			for (var i = 0; i < count; i++) { controls += '<a href=# data-child=' + i + '></a>'; }
		controls += '</div>';
		carousel.append(controls);

		// select the controls
		controls = $('.controls');
		controls.find('a:nth-child(1)').addClass('selected');

		carousel_controls(carousel, controls);
	};

	function carousel_controls (carousel, controls) {
		controls.click( function (e) {
			if(e.target.tagName == "A") {
				var child = $(e.target),
				childNum = child.attr('data-child');
				childNum++;

				controls.find('a').each(function(){$(this).removeClass('selected');});
				child.addClass('selected');

				carousel.find('.panel').hide();
				carousel.find('.panel:nth-child(' + childNum + ')').show();
			}
		} );
	}

	butterup.horizontal_carousel();

});