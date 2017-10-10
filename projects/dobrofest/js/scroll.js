$(function(){

	$('.ball').click(function(){
		$(this).toggleClass('move');
	});
	
	var btn = $('.btn_up');
	var btn_show = false;
	
	$(document).scroll(function(){
		if(!btn_show && $(document).scrollTop() > window.innerHeight / 2){
			btn.fadeIn(500);
			btn_show = true;
		}
		
		if(btn_show && $(document).scrollTop() <= window.innerHeight / 2){
			btn.fadeOut(500);
			btn_show = false;
		}
	});
	
	btn.click(function(){
		$('html, body').animate({scrollTop: 0}, 1000);
	});	
});