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

/////////////////
//Scroll function
/////////////////

$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 500);
  });
}

//Scroll to About Me

$('#aboutMeLink').click(function (event) {
  event.preventDefault();
  $('#aboutMe').scrollView();
});

//Scroll to Portfolio

$('#portfolioLink').click(function (event) {
  event.preventDefault();
  $('#portfolio').scrollView();
});

//Scroll to Home

$('#homeLink').click(function (event) {
  event.preventDefault();
  $('#home').scrollView();
});

/////////////////
//Remove col-xs-4 from portfolio section if window width gets smaller than 651px
/////////////////
$( window ).scroll(function(){
    if ($(window).width() < 651) {
        $(".portfolioCol").removeClass("col-xs-4");
    }
    else {
        $(".portfolioCol").removeClass().addClass("portfolioCol col-md-4 col-xs-4")
    }
});

