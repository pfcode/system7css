$(document).ready(function(){
	// Windows
	var windowStack = $('.window');
	
	function focusWindow(stack, window){
		stack.each(function(){
			$(this).removeClass("window-focus");
			$(this).find('a').hide();
		});
		window.addClass("window-focus");
		window.find('a').show();
	}
	
	$(".window").each(function(){
		var w = $(this);
		
		// Draggable
		w.draggable({
			handle: 'div.window-title',
			stack: windowStack
		});
		
		// Focus
		w.mousedown(function(){
			focusWindow(windowStack, w);
		});
		
		// Close button
		w.find('a.btn-close').click(function(){
			w.hide();
		});
	});
	
	// Links to windows
	$(".desktop .icon a").each(function(){
		$(this).click(function(){
			var o = $($(this).attr('href'));
			if(o.length > 0){
				o.toggle();
				focusWindow(windowStack, o);
			}
			return false;
		});
	});
});