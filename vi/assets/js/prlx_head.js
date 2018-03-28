$(document).ready(function(){

    var target_head = $('#head');
    var moving = false;
    var opacity = 0;
    
	var topPosStart_h  = target_head.offset().top - 2000;          //начало анимации сверху
    var botPosEnd_h    = target_head.offset().top + 2000;                    //начало анимации снизу
                                 
    var topPosMiddle_h = target_head.offset().top+70-winHeight+$('#city').height(); //середина анимации, должно все собраться - верх
    //var topPosMiddle_h = target_head.offset().top - 120; 
    var botPosMiddle_h = target_head.offset().top - 70-50; //середина анимации, должно все собраться - низ



    var topPosOpacity = topPosMiddle_h - 500;
    var botPosOpacity = botPosMiddle_h + 500;
    var opacity_step = 1/500;



    //коэффициенты скорости движения каждого слоя - на сколько быстрее по отношению к базе
    //расстояние
    var k_l2 = ($('#faq .img .l2').attr('data-speed') * 1)/(topPosMiddle_h-topPosStart_h);
    var k_l3 = ($('#faq .img .l3').attr('data-speed') * 1)/(topPosMiddle_h-topPosStart_h);
    var k_l4 = ($('#faq .img .l4').attr('data-speed') * 1)/(topPosMiddle_h-topPosStart_h);
    var k_l5 = ($('#faq .img .l5').attr('data-speed') * 1)/(topPosMiddle_h-topPosStart_h);
    //начальное положение
   if(winScrollTop < topPosStart_h){
                 $.each($('#faq .img .animate'), function(){
                       $(this).css('top', ($(this).attr('data-speed') * 1) + 'px' );
                });
     }  
    if(winScrollTop >= topPosStart_h && winScrollTop <= topPosMiddle_h){
                 var rest_path = topPosMiddle_h - winScrollTop;
                 $('#faq .img .l2').css('top', (rest_path * k_l2) + 'px' );
                 $('#faq .img .l3').css('top', (rest_path * k_l3) + 'px' );
                 $('#faq .img .l4').css('top', (rest_path * k_l4) + 'px' );
                 $('#faq .img .l5').css('top', (rest_path * k_l5) + 'px' );
     }          
      if(winScrollTop >= topPosMiddle_h && winScrollTop <= botPosMiddle_h){

                 $('#faq .img .l2').css('top', '0px' );
                 $('#faq .img .l3').css('top', '0px' );
                 $('#faq .img .l4').css('top', '0px' );
                 $('#faq .img .l5').css('top', '0px' );
      } 
      if(winScrollTop >= botPosMiddle_h && winScrollTop <= botPosEnd_h){

                 var rest_path = winScrollTop - topPosMiddle_h;
                 $('#faq .img .l2').css('top', '-'+(rest_path * k_l2) + 'px' );
                 $('#faq .img .l3').css('top', '-'+(rest_path * k_l3) + 'px' );
                 $('#faq .img .l4').css('top', '-'+(rest_path * k_l4) + 'px' );
                 $('#faq .img .l5').css('top','-'+(rest_path * k_l5) + 'px' );
  
      }
              if(winScrollTop > botPosEnd_h){
                 
                 $.each($('#faq .img .animate'), function(){
                       $(this).css('top', '-' +($(this).attr('data-speed') * 1) + 'px' );
                });
                
     } 
     if (winScrollTop >=topPosOpacity && winScrollTop <= topPosMiddle_h){
        var cur_opacity = (topPosMiddle_h - winScrollTop)*opacity_step;
                 $.each($('#faq .img .animate'), function(){
                       $(this).css('opacity', cur_opacity );
                });        
     }
     if (winScrollTop <=botPosOpacity && winScrollTop >= botPosMiddle_h){
        var cur_opacity = (winScrollTop - botPosMiddle_h )*opacity_step;
                 $.each($('#faq .img .animate'), function(){
                       $(this).css('opacity', cur_opacity );
                });        
     }     
     if (winScrollTop >=topPosMiddle_h && winScrollTop <= botPosMiddle_h){
        
                 $.each($('#faq .img .animate'), function(){
                       $(this).css('opacity', '1' );
                });        
     }
     if (winScrollTop >=botPosOpacity || winScrollTop <= topPosOpacity){
        var cur_opacity = (winScrollTop - botPosMiddle_h )*opacity_step;
                 $.each($('#faq .img .animate'), function(){
                       $(this).css('opacity', cur_opacity );
                });        
     }
    



var update = function(){
   
        if(winScrollTop >= topPosStart_h && winScrollTop <= topPosMiddle_h){
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
        if(winScrollTop >topPosMiddle_h && winScrollTop < botPosMiddle_h){
                       $('.sreeny').val('стоим '+winScrollTop);
                       parallaxScrollzero();
                       opacityZeroZone();
                }
        if(winScrollTop >= botPosMiddle_h && winScrollTop <= botPosEnd_h){
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
    console.log('opacity!!!!!   cur val '+ $('#faq .img .animate').css('opacity')*1 + ' scrolled '+ scrolled +' opacity_step '+opacity_step);
    $.each($('#faq .img .animate'), function(){
         $(this).css('opacity', $(this).css('opacity')*1 + scrolled*opacity_step );
    });

}
function decrease_opacity(){

    var scrolled = Math.abs(winScrollTop - prev_pos);
    console.log('opacity!!!!!   cur val '+ $('#faq .img .animate').css('opacity')*1 + ' scrolled '+ scrolled +' opacity_step '+opacity_step);
    $.each($('#faq .img .animate'), function(){
         if(($(this).css('opacity')*1 - scrolled*opacity_step)>0){
            $(this).css('opacity', $(this).css('opacity')*1 - scrolled*opacity_step );
        }else{
            $(this).css('opacity', '0' );
        }
    });

}
function opacityZeroZone(){
   $.each($('#faq .img .animate'), function(){
         $(this).css('opacity', '1' );
    });

}
 function parallaxScrolldecrease_up(){
    var scrolled = Math.abs(winScrollTop - prev_pos);

        console.log('decrease_up '+' top value =  '+parseFloat($('#faq .img .l2').css('top')));
    if(parseFloat($('#faq .img .l2').css('top'))-(scrolled*k_l2) > 0){
         $('#faq .img .l2').css('top',(parseFloat($('#faq .img .l2').css('top'))-(scrolled*k_l2))+'px');
 }else{
         $('#faq .img .l2').css('top','0px');
 }
 if(parseFloat($('#faq .img .l3').css('top'))-(scrolled*k_l3) > 0){
    $('#faq .img .l3').css('top',(parseFloat($('#faq .img .l3').css('top'))-(scrolled*k_l3))+'px');
}else{
   $('#faq .img .l3').css('top','0px');
}
if(parseFloat($('#faq .img .l4').css('top'))-(scrolled*k_l4)>0){
    $('#faq .img .l4').css('top',(parseFloat($('#faq .img .l4').css('top'))-(scrolled*k_l4))+'px');
}else{
    $('#faq .img .l4').css('top','0px');
}
if(parseFloat($('#faq .img .l5').css('top'))-(scrolled*k_l5) > 0){
    $('#faq .img .l5').css('top',(parseFloat($('#faq .img .l5').css('top'))-(scrolled*k_l5))+'px');
}else{

   $('#faq .img .l5').css('top','0px'); 
}
console.log('opacity_step '+opacity_step);
 //var opacity_delta = opacity_step * scrolled;
//console.log('opacity_delta '+opacity_delta);
 // $('#faq .img .animate').css('opacity',$('#faq .img .animate').css('opacity')+opacity_delta);
  
 }
function parallaxScrollincrease(){
    var scrolled = Math.abs(winScrollTop - prev_pos);

        console.log('increase '+scrolled+' '+parseFloat($('#faq .img .l2').css('top'))+(scrolled*k_l2));
    if(parseFloat($('#faq .img .l2').css('top'))+(scrolled*k_l2) < 0){
         $('#faq .img .l2').css('top',(parseFloat($('#faq .img .l2').css('top'))+(scrolled*k_l2))+'px');
 }else{
         $('#faq .img .l2').css('top','0px');
 }
 if(parseFloat($('#faq .img .l3').css('top'))+(scrolled*k_l3) < 0){
    $('#faq .img .l3').css('top',(parseFloat($('#faq .img .l3').css('top'))+(scrolled*k_l3))+'px');
}else{
   $('#faq .img .l3').css('top','0px');
}
if(parseFloat($('#faq .img .l4').css('top'))+(scrolled*k_l4)<0){
    $('#faq .img .l4').css('top',(parseFloat($('#faq .img .l4').css('top'))+(scrolled*k_l4))+'px');
}else{
    $('#faq .img .l4').css('top','0px');
}
if(parseFloat($('#faq .img .l5').css('top'))+(scrolled*k_l5) < 0){
    $('#faq .img .l5').css('top',(parseFloat($('#faq .img .l5').css('top'))+(scrolled*k_l5))+'px');
}else{

   $('#faq .img .l5').css('top','0px'); 
}
console.log('opacity_step '+opacity_step);
 //var opacity_delta = opacity_step * scrolled;
//console.log('opacity_delta '+opacity_delta);
 // $('#faq .img .animate').css('opacity',$('#faq .img .animate').css('opacity')+opacity_delta);
  
 }
function parallaxScrolldecrease(){
    var scrolled = Math.abs(prev_pos - winScrollTop);
    console.log('parallaxScrolldecrease   prev_pos '+prev_pos+"  winScrollTop "+  winScrollTop);

    console.log('decrease '+scrolled+' '+(parseFloat($('#faq .img .l2').css('top'))-(scrolled*k_l2)) );

 if((parseFloat($('#faq .img .l2').css('top'))-(scrolled*k_l2)) > -500){       
    $('#faq .img .l2').css('top',(parseFloat($('#faq .img .l2').css('top'))-(scrolled*k_l2))+'px');
}else{
    $('#faq .img .l2').css('top','-500px');

}
if(parseFloat($('#faq .img .l3').css('top'))-(scrolled*k_l3) > -1000){
    $('#faq .img .l3').css('top',(parseFloat($('#faq .img .l3').css('top'))-(scrolled*k_l3))+'px');
}else{
    $('#faq .img .l3').css('top','-1000px');
}
if(parseFloat($('#faq .img .l4').css('top'))-(scrolled*k_l4)> -1500){
    $('#faq .img .l4').css('top',(parseFloat($('#faq .img .l4').css('top'))-(scrolled*k_l4))+'px');
}else{
    $('#faq .img .l4').css('top','-1500px');
}
if(parseFloat($('#faq .img .l5').css('top'))-(scrolled*k_l5) > -2000){
    $('#faq .img .l5').css('top',(parseFloat($('#faq .img .l5').css('top'))-(scrolled*k_l5))+'px');
}else{
    $('#faq .img .l5').css('top','-2000px'); 
}    
   // $('#faq .img .animate').css('opacity',($('#faq .img .animate').css('opacity')-10));

   //$('#faq .img .animate').css('opacity',($('#faq .img .animate').css('opacity')+10));
}

function parallaxScrollincrease_down(){
    var scrolled = Math.abs(winScrollTop - prev_pos);

        console.log('increase '+scrolled+' '+parseFloat($('#faq .img .l2').css('top'))+(scrolled*k_l2));
    if(parseFloat($('#faq .img .l2').css('top'))+(scrolled*k_l2) < (target_head.offset().top+500)){
         $('#faq .img .l2').css('top',(parseFloat($('#faq .img .l2').css('top'))+(scrolled*k_l2))+'px');
 }else{
         $('#faq .img .l2').css('top',(target_head.offset().top+500)+'px');
 }
 if(parseFloat($('#faq .img .l3').css('top'))+(scrolled*k_l3) < (target_head.offset().top+1000)){
    $('#faq .img .l3').css('top',(parseFloat($('#faq .img .l3').css('top'))+(scrolled*k_l3))+'px');
}else{
   $('#faq .img .l3').css('top',(target_head.offset().top+1000)+'1000px');
}
if(parseFloat($('#faq .img .l4').css('top'))+(scrolled*k_l4)<(target_head.offset().top+1500)){
    $('#faq .img .l4').css('top',(parseFloat($('#faq .img .l4').css('top'))+(scrolled*k_l4))+'px');
}else{
    $('#faq .img .l4').css('top',(target_head.offset().top+1500)+'px');
}
if(parseFloat($('#faq .img .l5').css('top'))+(scrolled*k_l5) < (target_head.offset().top+2000)){
    $('#faq .img .l5').css('top',(parseFloat($('#faq .img .l5').css('top'))+(scrolled*k_l5))+'px');
}else{

   $('#faq .img .l5').css('top',(target_head.offset().top+2000)+'px'); 
}
 
 }


function parallaxScrollzero(){
  $('#faq .img .l2').css('top','0px');
  $('#faq .img .l3').css('top','0px');
  $('#faq .img .l4').css('top','0px');
  $('#faq .img .l5').css('top','0px');
}

});