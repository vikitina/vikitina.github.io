$(document).ready(function(){
	var winHeight = $(window).height();//высота окна
	var prev_pos = $(window).scrollTop();
	var winScrollTop = $(window).scrollTop();
    var target_city = $('#city');
    var moving = false;
    var opacity = 0;
    
	var topPosStart  = target_city.offset().top - 2000;          //начало анимации сверху
    var botPosEnd    = target_city.offset().top + 2000;                    //начало анимации снизу
                                 
    var topPosMiddle = target_city.offset().top-$('header.header_fixed').height()-winHeight/3;                               //середина анимации, должно все собраться - верх
    var botPosMiddle = target_city.offset().top; //середина анимации, должно все собраться - низ

    var opacity_step = 100/((target_city.offset().top-$('#about .img .l5').offset().top)/2);

    //коэффициенты скорости движения каждого слоя - на сколько быстрее по отношению к базе
    //расстояние
    var k_l2 = (target_city.offset().top-$('#about .img .l2').offset().top)/(topPosMiddle-topPosStart);
    var k_l3 = (target_city.offset().top-$('#about .img .l3').offset().top)/(topPosMiddle-topPosStart);
    var k_l4 = (target_city.offset().top-$('#about .img .l4').offset().top)/(topPosMiddle-topPosStart);
    var k_l5 = (target_city.offset().top-$('#about .img .l5').offset().top)/(topPosMiddle-topPosStart);
alert(k_l2);
    $('body').append('<div style="position:absolute;top:'+topPosStart+'px;left:0;width:100%;height:4px;background:red;"></div>');
    $('body').append('<div style="position:absolute;top:'+botPosEnd+'px;left:0;width:100%;height:4px;background:red;"></div>');
    $('body').append('<div style="position:absolute;top:'+topPosMiddle+'px;left:0;width:100%;height:4px;background:green;"></div>');
    $('body').append('<div style="position:absolute;top:'+botPosMiddle+'px;left:0;width:100%;height:4px;background:green;"></div>');
console.log('topPosStart '+topPosStart);
console.log('botPosEnd '+botPosEnd);

$(window).on('scroll', onScroll);

function onScroll(){
	winScrollTop = $(window).scrollTop();
	console.log('1------onscroll'+prev_pos);
    requestMoveUp();   
    
}

var update = function(){
    console.log('3------update'+prev_pos);
        if(winScrollTop >= topPosStart && winScrollTop <= topPosMiddle){
                 if (prev_pos < winScrollTop){
                        $('.sreeny').val('вниззззз '+winScrollTop);
                        parallaxScrollincrease();
                 }else{
                        $('.sreeny').val('up '+winScrollTop);
                        parallaxScrolldecrease();
                } 
        }
        if(winScrollTop >= topPosMiddle && winScrollTop <= botPosMiddle){
                       $('.sreeny').val('стоим '+winScrollTop);
                       parallaxScrollzero();
                }
        if(winScrollTop >= botPosMiddle && winScrollTop <= botPosEnd){
                if (prev_pos < winScrollTop){
                      $('.sreeny').val('вниззззз '+winScrollTop);
                      parallaxScrollincrease_down();
                }else{
                      $('.sreeny').val('up '+winScrollTop);
                      parallaxScrolldecrease();
                }
        }
        prev_pos = winScrollTop;
        moving = false;
};

var requestMoveUp = function(){
    if(!moving){
        console.log('2------requestMoveUp'+prev_pos);
        window.requestAnimationFrame(update);
        moving = true;
    }

}
 
function parallaxScrollincrease(){
    var scrolled = winScrollTop - prev_pos;

        console.log('increase '+scrolled+' '+parseFloat($('#about .img .l2').css('top'))+(scrolled*k_l2));
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
console.log('opacity_step '+opacity_step);
 var opacity_delta = opacity_step * scrolled;
console.log('opacity_delta '+opacity_delta);
  $('#about .img .animate').css('opacity',$('#about .img .animate').css('opacity')+opacity_delta);
  
 }
function parallaxScrolldecrease(){
    var scrolled = prev_pos - winScrollTop;
    console.log('parallaxScrolldecrease   prev_pos '+prev_pos+"  winScrollTop "+  winScrollTop);
       console.log('decrease '+scrolled+' '+parseFloat($('#about .img .l2').css('top'))-(scrolled*k_l2));
 if(parseFloat($('#about .img .l2').css('top'))-(scrolled*k_l2) > -500){       
    $('#about .img .l2').css('top',(parseFloat($('#about .img .l2').css('top'))-(scrolled*k_l2))+'px');
}else{
    $('#about .img .l2').css('top','-500px');

}
if(parseFloat($('#about .img .l3').css('top'))-(scrolled*k_l3) > -1000){
    $('#about .img .l3').css('top',(parseFloat($('#about .img .l3').css('top'))-(scrolled*k_l3))+'px');
}else{
    $('#about .img .l3').css('top','-1000px');
}
if(parseFloat($('#about .img .l4').css('top'))-(scrolled*k_l4)> -1500){
    $('#about .img .l4').css('top',(parseFloat($('#about .img .l4').css('top'))-(scrolled*k_l4))+'px');
}else{
    $('#about .img .l4').css('top','-1500px');
}
if(parseFloat($('#about .img .l5').css('top'))-(scrolled*k_l5) > -2000){
    $('#about .img .l5').css('top',(parseFloat($('#about .img .l5').css('top'))-(scrolled*k_l5))+'px');
}else{
    $('#about .img .l5').css('top','-2000px'); 
}    
   // $('#about .img .animate').css('opacity',($('#about .img .animate').css('opacity')-10));

   //$('#about .img .animate').css('opacity',($('#about .img .animate').css('opacity')+10));
}

function parallaxScrollincrease_down(){
    var scrolled = winScrollTop - prev_pos;

        console.log('increase '+scrolled+' '+parseFloat($('#about .img .l2').css('top'))+(scrolled*k_l2));
    if(parseFloat($('#about .img .l2').css('top'))+(scrolled*k_l2) < (target_city.offset().top+500)){
         $('#about .img .l2').css('top',(parseFloat($('#about .img .l2').css('top'))+(scrolled*k_l2))+'px');
 }else{
         $('#about .img .l2').css('top',(target_city.offset().top+500)+'px');
 }
 if(parseFloat($('#about .img .l3').css('top'))+(scrolled*k_l3) < (target_city.offset().top+1000)){
    $('#about .img .l3').css('top',(parseFloat($('#about .img .l3').css('top'))+(scrolled*k_l3))+'px');
}else{
   $('#about .img .l3').css('top',(target_city.offset().top+1000)+'1000px');
}
if(parseFloat($('#about .img .l4').css('top'))+(scrolled*k_l4)<(target_city.offset().top+1500)){
    $('#about .img .l4').css('top',(parseFloat($('#about .img .l4').css('top'))+(scrolled*k_l4))+'px');
}else{
    $('#about .img .l4').css('top',(target_city.offset().top+1500)+'px');
}
if(parseFloat($('#about .img .l5').css('top'))+(scrolled*k_l5) < (target_city.offset().top+2000)){
    $('#about .img .l5').css('top',(parseFloat($('#about .img .l5').css('top'))+(scrolled*k_l5))+'px');
}else{

   $('#about .img .l5').css('top',(target_city.offset().top+2000)+'px'); 
}
 
 }


function parallaxScrollzero(){
  $('#about .img .l2').css('top','0px');
  $('#about .img .l3').css('top','0px');
  $('#about .img .l4').css('top','0px');
  $('#about .img .l5').css('top','0px');
}

});