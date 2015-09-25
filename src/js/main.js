$('a[href^="#"]').on('click', function(event) {
    var target = $(this.href);
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$(window).scroll(function() {
    var y_scroll_pos = $(document).scrollTop() + 45
    var home = $( "#home" ).position()
    var aboutme = $( "#aboutMe" ).position()
    var portfolio = $( "#portfolio" ).position()
	// set to whatever you want it to be

	console.log(aboutme.top)
	console.log(portfolio.top)
	console.log(y_scroll_pos)

    if (y_scroll_pos < aboutme.top) {
    	$("#nav").removeClass().addClass("greenNav");
    }
    else if (y_scroll_pos < portfolio.top) {
    	$("#nav").removeClass().addClass("whiteNav");
    }	
	else {
		$("#nav").removeClass().addClass("blueNav");	
	}
});