$(document).ready(function(){
	var winHeight = $(window).height();
	var prev_pos = $(window).scrollTop();
	var winScrollTop = $(window).scrollTop();
    var target_city = $('#about');
	var topPos = target_city.offset().top - $('#city').height();
    var botPos = target_city.offset().top + winHeight/2;
    $('body').append('<div style="position:absolute;top:'+botPos+'px;left:0;width:100%;height:4px;background:red;"></div>')
    $('body').append('<div style="position:absolute;top:'+topPos+'px;left:0;width:100%;height:4px;background:green;"></div>')
console.log('topPos '+topPos);
console.log('botPos '+botPos);
$(window).bind('scroll',function(e){
	
	winScrollTop = $(window).scrollTop();
	if(winScrollTop > topPos && winScrollTop < botPos){
	if (prev_pos < winScrollTop){

		$('.sreeny').val('вниззззз '+winScrollTop);
		parallaxScrollincrease(winScrollTop);
	}else{

		$('.sreeny').val('up '+winScrollTop);
		parallaxScrolldecrease(winScrollTop);
	}
}
	prev_pos = $(window).scrollTop();
    
});
 
function parallaxScrollincrease(winScrollTop){
    var scrolled = winScrollTop - prev_pos;
    console.log('increase '+scrolled);
    $('#about .img .l2').css('top',(parseFloat($('#about .img .l2').css('top'))-(scrolled*0.15))+'px');
    $('#about .img .l3').css('top',(parseFloat($('#about .img .l3').css('top'))-(scrolled*0.25))+'px');
    $('#about .img .l4').css('top',(parseFloat($('#about .img .l4').css('top'))-(scrolled*0.45))+'px');
    $('#about .img .l5').css('top',(parseFloat($('#about .img .l5').css('top'))-(scrolled*0.75))+'px');
   // $('#about .img .animate').css('opacity',($('#about .img .animate').css('opacity')-10));
}
function parallaxScrolldecrease(winScrollTop){
    var scrolled = prev_pos - winScrollTop;
    console.log('decrease '+scrolled);
    $('#about .img .l2').css('top',(parseFloat($('#about .img .l2').css('top'))+(scrolled*0.15))+'px');
    $('#about .img .l3').css('top',(parseFloat($('#about .img .l3').css('top'))+(scrolled*0.25))+'px');
    $('#about .img .l4').css('top',(parseFloat($('#about .img .l4').css('top'))+(scrolled*0.45))+'px');
    $('#about .img .l5').css('top',(parseFloat($('#about .img .l5').css('top'))+(scrolled*0.75))+'px');
    //$('#about .img .animate').css('opacity',($('#about .img .animate').css('opacity')+10));
}
});