/* Enable FitText */
$(".fittext").fitText();

/* Social Buttons */
$(".count" ).each(function() {
	var count=Math.floor(Math.random()*10);
	$(this).append(count);
});

$('.google').bind('click', function(e) { 
    e.preventDefault();
	window.open("https://plus.google.com/share?url=" + document.URL + "'",
  '_blank');
});

$('.twitter').bind('click', function(e) { 
    e.preventDefault();
	window.open("https://twitter.com/intent/tweet?text=%23salvius%20&url=" + document.URL + "&via=salviusrobot");
});

$('.pinterest').bind('click', function(e) { 
    e.preventDefault();
	window.open("http://pinterest.com/pin/create/button/?url=" + document.URL + "&via=salviusrobot");
});

$('.facebook').bind('click', function(e) { 
    e.preventDefault();
	window.open("http://www.facebook.com/sharer/sharer.php?u=" + document.URL + "'");
});

$('.linkedin').bind('click', function(e) { 
    e.preventDefault();
	window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + document.URL + "'");
});

$('.bookmark').bind('click', function(e) { 
    e.preventDefault();
	if (window.sidebar) { // Mozilla Firefox Bookmark
	window.sidebar.addPanel(location.href,document.title,"");
	} else if(window.external) { // IE Favorite
	window.external.AddFavorite(location.href,document.title); }
	else if(window.opera && window.print) { // Opera Hotlist
	this.title=document.title;
	return true;
	}
});

$('.like').bind('click', function(e) { 
    e.preventDefault();
    var colors = ["#f00", "#ff6600", "#ff9933", "green", "#9933cc", "#3399FF", "#006633", "#ff3333"];
	var col = colors[Math.floor(Math.random()*8)];
	$(this).css("background", col);
});

/* Close and colapse buttons */
$('.close').bind('click', function(e) { 
    e.preventDefault();
    $(this).parent().animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
});

$('.colapse').bind('click', function(e) { 
    e.preventDefault();
	$(this).find("i").toggleClass("icon-minus icon-plus");
});

$('.colapse').click((function() {
    var i = 0;
    return function() {
        $(this).parent().animate({
            height: (++i % 2) ? 0 : 100
        }, 200);
    }
})());