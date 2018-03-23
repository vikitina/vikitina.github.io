$(document).ready(function(){
	var winHeight = $(window).height();//высота окна
	var prev_pos = $(window).scrollTop();
	var winScrollTop = $(window).scrollTop();
    var target_city = $('#about');

	var topPosStart  = target_city.offset().top - 2000;          //начало анимации сверху
    var botPosEnd    = target_city.offset().top + 2000;                    //начало анимации снизу
                                 
    var topPosMiddle = target_city.offset().top;                               //середина анимации, должно все собраться - верх
    var botPosMiddle = target_city.offset().top+winHeight-$('#city').height(); //середина анимации, должно все собраться - низ

    //коэффициенты скорости движения каждого слоя - на сколько быстрее по отношению к базе
    //расстояние
    var k_l2 = (topPosMiddle-topPosStart+500)/(topPosMiddle-topPosStart);
    var k_l3 = (topPosMiddle-topPosStart+1000)/(topPosMiddle-topPosStart);
    var k_l4 = (topPosMiddle-topPosStart+1500)/(topPosMiddle-topPosStart);
    var k_l5 = (topPosMiddle-topPosStart+2000)/(topPosMiddle-topPosStart);
alert(k_l2);
    $('body').append('<div style="position:absolute;top:'+topPosStart+'px;left:0;width:100%;height:4px;background:red;"></div>')
    $('body').append('<div style="position:absolute;top:'+botPosEnd+'px;left:0;width:100%;height:4px;background:green;"></div>')
console.log('topPosStart '+topPosStart);
console.log('botPosEnd '+botPosEnd);
$(window).bind('scroll',function(e){
	
	winScrollTop = $(window).scrollTop();
	if(winScrollTop >= topPosStart && winScrollTop <= topPosMiddle){
	if (prev_pos < winScrollTop){

		$('.sreeny').val('вниззззз '+winScrollTop);
		parallaxScrollincrease(winScrollTop);
	}else{

		$('.sreeny').val('up '+winScrollTop);
		parallaxScrolldecrease(winScrollTop);
	}
}
if(winScrollTop >= topPosMiddle && winScrollTop <= botPosMiddle){
    $('.sreeny').val('стоим '+winScrollTop);
}
    if(winScrollTop >= botPosMiddle && winScrollTop <= botPosEnd){
    if (prev_pos < winScrollTop){

        $('.sreeny').val('вниззззз '+winScrollTop);
        parallaxScrolldecrease(winScrollTop);
    }else{

        $('.sreeny').val('up '+winScrollTop);
        
        parallaxScrollincrease(winScrollTop);
    }
}

	prev_pos = $(window).scrollTop();
    
});
 
function parallaxScrollincrease(winScrollTop){
    var scrolled = winScrollTop - prev_pos;

        console.log('increase '+scrolled);
    if(parseFloat($('#about .img .l2').css('top'))+(scrolled*k_l2) < 0){
         $('#about .img .l2').css('top',(parseFloat($('#about .img .l2').css('top'))+(scrolled*k_l2))+'px');
 }else{
         $('#about .img .l2').css('top','0px');
 }
 if(parseFloat($('#about .img .l3').css('top'))+(scrolled*k_l3) < 0){
    $('#about .img .l3').css('top',(parseFloat($('#about .img .l3').css('top'))+(scrolled*k_l3))+'px');
}else{
   $('#about .img .l3').css('top','0px');
}
if(parseFloat($('#about .img .l4').css('top'))+(scrolled*k_l4)<0){
    $('#about .img .l4').css('top',(parseFloat($('#about .img .l4').css('top'))+(scrolled*k_l4))+'px');
}else{
    $('#about .img .l4').css('top','0px');
}
if(parseFloat($('#about .img .l5').css('top'))+(scrolled*k_l5) < 0){
    $('#about .img .l5').css('top',(parseFloat($('#about .img .l5').css('top'))+(scrolled*k_l5))+'px');
}else{

   $('#about .img .l5').css('top','0px'); 
}
 
 }
function parallaxScrolldecrease(winScrollTop){
    var scrolled = prev_pos - winScrollTop;
       console.log('decrease '+scrolled);
 if(parseFloat($('#about .img .l2').css('top'))+(scrolled*k_l2) < -500){       
    $('#about .img .l2').css('top',(parseFloat($('#about .img .l2').css('top'))-(scrolled*k_l2))+'px');
}else{
    $('#about .img .l2').css('top','-500px');

}
if(parseFloat($('#about .img .l3').css('top'))+(scrolled*k_l3) < -1000){
    $('#about .img .l3').css('top',(parseFloat($('#about .img .l3').css('top'))-(scrolled*k_l3))+'px');
}else{
    $('#about .img .l3').css('top','-1000px');
}
if(parseFloat($('#about .img .l4').css('top'))+(scrolled*k_l4)< -1500){
    $('#about .img .l4').css('top',(parseFloat($('#about .img .l4').css('top'))-(scrolled*k_l4))+'px');
}else{
    $('#about .img .l4').css('top','-1500px');
}
if(parseFloat($('#about .img .l5').css('top'))+(scrolled*k_l5) < -2000){
    $('#about .img .l5').css('top',(parseFloat($('#about .img .l5').css('top'))-(scrolled*k_l5))+'px');
}else{
    $('#about .img .l5').css('top','-2000px'); 
}    
   // $('#about .img .animate').css('opacity',($('#about .img .animate').css('opacity')-10));

   //$('#about .img .animate').css('opacity',($('#about .img .animate').css('opacity')+10));
}


});