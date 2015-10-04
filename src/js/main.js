/////////////////
//Nav color change based on scroll position
/////////////////

$(window).scroll(function() {
  var y_scroll_pos = $(document).scrollTop() + 45;
  var aboutme = $( "#aboutMe" ).position();
  var portfolio = $( "#portfolio" ).position();
  if (y_scroll_pos < aboutme.top) {
  	$("#nav").removeClass().addClass("homeNav");
      $("#aboutMeLink, #homeLink, #portfolioLink").removeClass();
      $("#homeLink").addClass("active");

  }
  else if (y_scroll_pos < portfolio.top) {
  	$("#nav").removeClass().addClass("aboutMeNav");
      $("#aboutMeLink, #homeLink, #portfolioLink").removeClass();
      $("#aboutMeLink").addClass("active");
  }	
  else {
    $("#nav").removeClass().addClass("portfolioNav");
      $("#aboutMeLink, #homeLink, #portfolioLink").removeClass();
      $("#portfolioLink").addClass("active");
	}
});

/////////////////
//Fade based on Scroll position
//From: http://stackoverflow.com/questions/9097501/show-div-when-scroll-position
/////////////////

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(){           
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){               
                $(this).animate({'opacity':'1'},500);               
            }        
        });  
    });
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
};

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
        $(".portfolioCol").removeClass().addClass("portfolioCol col-md-4 col-xs-4");
    }
});

/////////////////
//Modify height of section based on height of window
/////////////////

$(window).on("resize",function(){

var mainWindowHeight = $( window ).height();

var homeHeight = $("#homeContent").height();
var homeWindowPadding = (mainWindowHeight - homeHeight) / 2 - 45;

var aboutMeHeight = $("#aboutMeContent").height();
var aboutMeWindowPadding = (mainWindowHeight - aboutMeHeight) / 2 - 45;

var portfolioHeight = $("#portfolioContent").height();
var portfolioWindowPadding = (mainWindowHeight - portfolioHeight) / 2 - 45;



//Home Height Set
$("#home").css("min-height",mainWindowHeight);
if (homeWindowPadding > 50) {
  $("#homeContent").css("padding-top",homeWindowPadding);
}
else {
  $("#homeContent").css({"padding-top":"50px", "padding-bottom":"50px"});
}


//About Me Height Set
$("#aboutMe").css("min-height",mainWindowHeight);
if (aboutMeWindowPadding > 50) {
  $("#aboutMeContent").css("padding-top",aboutMeWindowPadding);
}
else {
  $("#aboutMeContent").css({"padding-top":"50px", "padding-bottom":"50px"});
}


//Portfolio Height Set
$("#portfolio").css("min-height",mainWindowHeight);
if (portfolioWindowPadding > 50) {
  $("#portfolioContent").css("padding-top",portfolioWindowPadding);
}
else {
  $("#portfolioContent").css({"padding-top":"50px", "padding-bottom":"50px"});
}

}).resize();