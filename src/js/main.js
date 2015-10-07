/////////////////
//Array of all Prefix's for selectors
/////////////////

var prefixSufix = ["home","aboutMe","portfolio","contactMe"];

/////////////////
//Nav color change based on scroll position
/////////////////

$(window).scroll(function(){

    $.each(prefixSufix, function(i, selector)
    {
      var y_scroll_pos = $(document).scrollTop() + 45;
      var nextElementPos = $("#" + prefixSufix[i]).position().top;
      if (y_scroll_pos > nextElementPos) 
      {
        $("#nav").removeClass().addClass(selector + "Nav");
        $("#aboutMeLink, #homeLink, #portfolioLink, #contactMeLink").removeClass();
        $("#" + selector + "Link").addClass("active");    
    }
  });
});

/////////////////
//Fade based on Scroll position
//From: http://stackoverflow.com/questions/9097501/show-div-when-scroll-position
/////////////////


    
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

$.each(prefixSufix, function(i, selector) 
  {
  $('#' + selector + 'Link').click(function (event) 
    {
    event.preventDefault();
    $('#' + selector).scrollView();
  });
});