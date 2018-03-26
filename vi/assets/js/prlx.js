$(document).ready(function(){
	var winHeight = $(window).height();//высота окна
	var prev_pos = $(window).scrollTop();
	var winScrollTop = $(window).scrollTop();
    var target_city = $('#city');
    var moving = false;
    var opacity = 0;
    
	var topPosStart  = target_city.offset().top - 2000;          //начало анимации сверху
    var botPosEnd    = target_city.offset().top + 2000;                    //начало анимации снизу
                                 
    var topPosMiddle = target_city.offset().top-80-winHeight/3;                               //середина анимации, должно все собраться - верх
    var botPosMiddle = target_city.offset().top - 160; //середина анимации, должно все собраться - низ



    var topPosOpacity = topPosMiddle - 300;
    var botPosOpacity = botPosMiddle + 300;
    var opacity_step = 1/300;



    //коэффициенты скорости движения каждого слоя - на сколько быстрее по отношению к базе
    //расстояние
    var k_l2 = ($('#about .img .l2').attr('data-speed') * 1)/(topPosMiddle-topPosStart);
    var k_l3 = ($('#about .img .l3').attr('data-speed') * 1)/(topPosMiddle-topPosStart);
    var k_l4 = ($('#about .img .l4').attr('data-speed') * 1)/(topPosMiddle-topPosStart);
    var k_l5 = ($('#about .img .l5').attr('data-speed') * 1)/(topPosMiddle-topPosStart);
    //начальное положение
        if(winScrollTop < topPosStart){
                 $.each($('#about .img .animate'), function(){
                       $(this).css('top', ($(this).attr('data-speed') * 1) + 'px' );
                });
     }  
    if(winScrollTop >= topPosStart && winScrollTop <= topPosMiddle){
                 var rest_path = topPosMiddle - winScrollTop;
                 $('#about .img .l2').css('top', (rest_path * k_l2) + 'px' );
                 $('#about .img .l3').css('top', (rest_path * k_l3) + 'px' );
                 $('#about .img .l4').css('top', (rest_path * k_l4) + 'px' );
                 $('#about .img .l5').css('top', (rest_path * k_l5) + 'px' );
     }          
      if(winScrollTop >= topPosMiddle && winScrollTop <= botPosMiddle){

                 $('#about .img .l2').css('top', '0px' );
                 $('#about .img .l3').css('top', '0px' );
                 $('#about .img .l4').css('top', '0px' );
                 $('#about .img .l5').css('top', '0px' );
      } 
      if(winScrollTop >= botPosMiddle && winScrollTop <= botPosEnd){

                 var rest_path = winScrollTop - topPosMiddle;
                 $('#about .img .l2').css('top', '-'+(rest_path * k_l2) + 'px' );
                 $('#about .img .l3').css('top', '-'+(rest_path * k_l3) + 'px' );
                 $('#about .img .l4').css('top', '-'+(rest_path * k_l4) + 'px' );
                 $('#about .img .l5').css('top','-'+(rest_path * k_l5) + 'px' );
  
      }
              if(winScrollTop > botPosEnd){
                 
                 $.each($('#about .img .animate'), function(){
                       $(this).css('top', '-' +($(this).attr('data-speed') * 1) + 'px' );
                });
                
     } 

      alert($('#about .img .l2').css('top'));

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
                        parallaxScrolldecrease_up();
                 }else{
                        $('.sreeny').val('up '+winScrollTop);
                        parallaxScrollincrease_down();
                } 
                if (winScrollTop >=topPosOpacity) {
                        if (prev_pos < winScrollTop){

                                  increase_opacity();
                        }else{

                                  decrease_opacity();
                        }
                }
        }
        if(winScrollTop >= topPosMiddle && winScrollTop <= botPosMiddle){
                       $('.sreeny').val('стоим '+winScrollTop);
                       parallaxScrollzero();
                       opacityZeroZone();
                }
        if(winScrollTop >= botPosMiddle && winScrollTop <= botPosEnd){
                if (prev_pos < winScrollTop){
                      $('.sreeny').val('вниззззз '+winScrollTop);
                      parallaxScrolldecrease();
                }else{
                      $('.sreeny').val('up '+winScrollTop);
                      parallaxScrollincrease();
                }

                if (winScrollTop <=botPosOpacity) {
                        if (prev_pos < winScrollTop){

                                  decrease_opacity();
                        }else{

                                  increase_opacity();
                        }
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

function increase_opacity(){

    var scrolled = Math.abs(winScrollTop - prev_pos);
    console.log('opacity!!!!!   cur val '+ $('#about .img .animate').css('opacity')*1 + ' scrolled '+ scrolled +' opacity_step '+opacity_step);
    $.each($('#about .img .animate'), function(){
         $(this).css('opacity', $(this).css('opacity')*1 + scrolled*opacity_step );
    });

}
function decrease_opacity(){

    var scrolled = Math.abs(winScrollTop - prev_pos);
    console.log('opacity!!!!!   cur val '+ $('#about .img .animate').css('opacity')*1 + ' scrolled '+ scrolled +' opacity_step '+opacity_step);
    $.each($('#about .img .animate'), function(){
         $(this).css('opacity', $(this).css('opacity')*1 - scrolled*opacity_step );
    });

}
function opacityZeroZone(){
   $.each($('#about .img .animate'), function(){
         $(this).css('opacity', '1' );
    });

}
 function parallaxScrolldecrease_up(){
    var scrolled = Math.abs(winScrollTop - prev_pos);

        console.log('decrease_up '+' top value =  '+parseFloat($('#about .img .l2').css('top')));
    if(parseFloat($('#about .img .l2').css('top'))-(scrolled*k_l2) > 0){
         $('#about .img .l2').css('top',(parseFloat($('#about .img .l2').css('top'))-(scrolled*k_l2))+'px');
 }else{
         $('#about .img .l2').css('top','0px');
 }
 if(parseFloat($('#about .img .l3').css('top'))-(scrolled*k_l3) > 0){
    $('#about .img .l3').css('top',(parseFloat($('#about .img .l3').css('top'))-(scrolled*k_l3))+'px');
}else{
   $('#about .img .l3').css('top','0px');
}
if(parseFloat($('#about .img .l4').css('top'))-(scrolled*k_l4)>0){
    $('#about .img .l4').css('top',(parseFloat($('#about .img .l4').css('top'))-(scrolled*k_l4))+'px');
}else{
    $('#about .img .l4').css('top','0px');
}
if(parseFloat($('#about .img .l5').css('top'))-(scrolled*k_l5) > 0){
    $('#about .img .l5').css('top',(parseFloat($('#about .img .l5').css('top'))-(scrolled*k_l5))+'px');
}else{

   $('#about .img .l5').css('top','0px'); 
}
console.log('opacity_step '+opacity_step);
 //var opacity_delta = opacity_step * scrolled;
//console.log('opacity_delta '+opacity_delta);
 // $('#about .img .animate').css('opacity',$('#about .img .animate').css('opacity')+opacity_delta);
  
 }
function parallaxScrollincrease(){
    var scrolled = Math.abs(winScrollTop - prev_pos);

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
 //var opacity_delta = opacity_step * scrolled;
//console.log('opacity_delta '+opacity_delta);
 // $('#about .img .animate').css('opacity',$('#about .img .animate').css('opacity')+opacity_delta);
  
 }
function parallaxScrolldecrease(){
    var scrolled = Math.abs(prev_pos - winScrollTop);
    console.log('parallaxScrolldecrease   prev_pos '+prev_pos+"  winScrollTop "+  winScrollTop);

    console.log('decrease '+scrolled+' '+(parseFloat($('#about .img .l2').css('top'))-(scrolled*k_l2)) );

 if((parseFloat($('#about .img .l2').css('top'))-(scrolled*k_l2)) > -500){       
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
    var scrolled = Math.abs(winScrollTop - prev_pos);

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