$(document).ready(function(){
	var mousewheelVal = false;
	var keylPressVal = false;
	(function(){
		page = document.getElementsByTagName('html')[0];
		$page = $(page);
		$page.css("zoom", 1);
	}());
	function zoom(e){
		e = e|| window.event;
	    if ($page != null && e.shiftKey) {
	    	if(e.wheelDelta >0){
				$page.css("zoom", new Number($page.css("zoom")) + e.wheelDelta/	12000);
	    	}else{
		    	if(new Number($page.css("zoom")) - e.wheelDelta/12000 >= 1){
		    		$page.css("zoom", new Number($page.css("zoom")) + e.wheelDelta/	12000);
		    	}
	    	}
	    }
	}

	window.onmousewheel=document.onmousewheel=zoom;
})