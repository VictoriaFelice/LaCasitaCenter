/* google cse */
(function() {
  var cx = '014868025166861344839:dksfom8q7wq';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();

/* declare variables */
var menubar = $('.menu-icon-bar');
		navwrap = $('.nav-wrap');
		mainNav = $('.main-nav');
		donate = $('.verticalribbon');
    topbarH = $('.top-bar').height();

/* toggle nav */
menubar.on('click', function() {
	mainNav.slideToggle();
	$('html, body').scrollTop(0);
});

/* sticky nav past certain point */
$(window).scroll(function() {
	if ($(this).scrollTop() > topbarH && window.matchMedia('(min-width: 768px)').matches) {
		navwrap.addClass('scrolled');
		donate.addClass('scrolled');
	}
	else if ($(this).scrollTop() > topbarH) {
		menubar.addClass('scrolled');
		donate.addClass('scrolled');
	}
	else  {
		navwrap.removeClass('scrolled');
		menubar.removeClass('scrolled');
		donate.removeClass('scrolled');
	}
});

/* image carousel */
$('#carousel img:gt(0)').hide();

setInterval(function(){
  $('#carousel :first-child')
    .fadeTo(500, 0)
    .next('img')
    .fadeTo(500, 1)
    .end()
    .appendTo('#carousel');
}, 5000);   