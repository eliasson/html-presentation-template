
function nextSlide() {
    var current = $('.slide.active');
    var next = current.next();
    var actions = current.find('.action.hidden');
    
    if(actions.length > 0) {
	   $(actions[0]).removeClass('hidden');
	}
	else if(next.length > 0) {
	   $("html,body").animate({scrollTop: (next.offset().top)}, 800);
	   current.removeClass('active');
	   next.addClass('active');
	}
}

function previousSlide() {
    var current = $('.slide.active');
    var previous = current.prev();
    var actions = current.find('.action:not(.hidden)');
    
    if(actions.length > 0) {
		$(actions.last()).addClass('hidden');
	}
	else if(previous.length > 0) {
        $("html,body").animate({scrollTop: (previous.offset().top)}, 800);
        current.removeClass('active');
        previous.addClass('active');
	}
}
