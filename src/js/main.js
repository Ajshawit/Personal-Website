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
    var y_scroll_pos = $(document).scrollTop() + 50
    var home = $( "#home" ).position()
    var aboutme = $( "#aboutMe" ).position()
    var portfolio = $( "#portfolio" ).position()
	// set to whatever you want it to be

	console.log(aboutme.top)
	console.log(portfolio.top)
	console.log(y_scroll_pos)

    if (y_scroll_pos < aboutme.top) {
	   $(".navbar-default").css("background-color","#2CC990");
	   $(".navbar-default .navbar-nav > li > a, .navbar-default .navbar-brand").css("color","#ecf0f1")
    }
    else if (y_scroll_pos < portfolio.top) {
		$(".navbar-default").css("background-color","#ecf0f1");
		$(".navbar-default .navbar-nav > li > a, .navbar-default .navbar-brand").css("color","#34495e");
		$(".icon-bar").css("border-color","#34495e");
	}
	else
	{
		$(".navbar-default").css("background-color","#2C82C9");
		$(".navbar-default .navbar-nav > li > a, .navbar-default .navbar-brand").css("color","#ecf0f1")
	}
});