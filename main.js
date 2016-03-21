$(document).ready(function(){
	console.log("hello world");

	//Smooth scroll vertically when click link
	$('a[href^="#"]').click(function (e) {
    	e.preventDefault();

    	var target = this.hash;
    	var $target = $(target);

    	$('html, body').stop().animate({
          'scrollTop': $target.offset().top
    	}, 900, 'swing', function () {
          window.location.hash = target;
    	});
  	});

});
