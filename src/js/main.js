$(window).scroll(function() {
    var y_scroll_pos = $(document).scrollTop() + 45
    var home = $( "#home" ).position()
    var aboutme = $( "#aboutMe" ).position()
    var portfolio = $( "#portfolio" ).position()
	// set to whatever you want it to be

    if (y_scroll_pos < aboutme.top) {
    	$("#nav").removeClass().addClass("greenNav");
        $("#aboutMeLink, #homeLink, #portfolioLink").removeClass();
        $("#homeLink").addClass("active");

    }
    else if (y_scroll_pos < portfolio.top) {
    	$("#nav").removeClass().addClass("whiteNav");
        $("#aboutMeLink, #homeLink, #portfolioLink").removeClass();
        $("#aboutMeLink").addClass("active");
    }	
	else {
		$("#nav").removeClass().addClass("blueNav");
        $("#aboutMeLink, #homeLink, #portfolioLink").removeClass();
        $("#portfolioLink").addClass("active");

	}
});

