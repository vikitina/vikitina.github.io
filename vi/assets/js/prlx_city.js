$(document).ready(function(){
    var timeout;

	var winHeight = $(window).height();//высота окна
	var prev_pos = $(window).scrollTop();
	var winScrollTop = $(window).scrollTop();
    var target_city = $('#city');
    var target_head = $('#head');
    var moving = false;
    var opacity = 0;
    
	var topPosStart  = target_city.offset().top-winHeight;         //начало анимации сверху
    var botPosEnd    = target_city.offset().top + $('#city').height();                    //начало анимации снизу
                                 
    var topPosMiddle = target_city.offset().top+70-winHeight+$('#city').height(); //середина анимации, должно все собраться - верх 
    var botPosMiddle = target_city.offset().top - 70-50; //середина анимации, должно все собраться - низ

    var topPosStart_h  = target_head.offset().top-winHeight;         //начало анимации сверху
    var botPosEnd_h    = target_head.offset().top + $('#head').height();                    //начало анимации снизу
                                 
    var topPosMiddle_h = target_head.offset().top- 70-50;//-winHeight+$('#head').height(); //середина анимации, должно все собраться - верх
    var botPosMiddle_h = target_head.offset().top - 70; //середина анимации, должно все собраться - низ

    var topPosOpacity = topPosMiddle - 500;
    var botPosOpacity = botPosMiddle + 500;
    var opacity_step = 1/500;

    var topPosOpacity_h = topPosMiddle_h - 500;
    var botPosOpacity_h = botPosMiddle_h + 500;
    var opacity_step_h = 1/500;




    //начальное положение
   if(winScrollTop < topPosStart){
                var path_length = topPosMiddle - topPosStart;
                 $.each($('#about .img .animate'), function(){
                       var top_pos = path_length*($(this).attr('data-speed') * 1);
                       $(this).css('top', top_pos + 'px' );
                });
     }  
    if(winScrollTop >= topPosStart && winScrollTop <= topPosMiddle){
                 var rest_path = topPosMiddle - winScrollTop;
                 $.each($('#about .img .animate'), function(){
                       var top_pos = rest_path*($(this).attr('data-speed') * 1);
                       $(this).css('top', top_pos + 'px' );
                });

     }          
      if(winScrollTop >= topPosMiddle && winScrollTop <= botPosMiddle){
                 $.each($('#about .img .animate'), function(){
                       $(this).css('top', '0px' );
                });

      } 
      if(winScrollTop >= botPosMiddle && winScrollTop <= botPosEnd){

                 var rest_path = winScrollTop - topPosMiddle;
                 $.each($('#about .img .animate'), function(){
                       var top_pos = -1 * rest_path*($(this).attr('data-speed') * 1);
                       $(this).css('top', top_pos + 'px' );
                });                 
      }
              if(winScrollTop > botPosEnd){
                 
                 $.each($('#about .img .animate'), function(){
                       $(this).css('top', '-' +($(this).attr('data-speed') * 1) + 'px' );
                });
                
     } 
     if (winScrollTop >=topPosOpacity && winScrollTop <= topPosMiddle){
        var cur_opacity = 1 - (topPosMiddle - winScrollTop)*opacity_step;
                 $.each($('#about .img .animate'), function(){
                       $(this).css('opacity', cur_opacity );
                });        
     }
     if (winScrollTop <=botPosOpacity && winScrollTop >= botPosMiddle){
        var cur_opacity = 1 - (winScrollTop - botPosMiddle )*opacity_step;
                 $.each($('#about .img .animate'), function(){
                       $(this).css('opacity', cur_opacity );
                });        
     }     
     if (winScrollTop >=topPosMiddle && winScrollTop <= botPosMiddle){
        
                 $.each($('#about .img .animate'), function(){
                       $(this).css('opacity', '1' );
                });        
     }
     if (winScrollTop >=botPosOpacity || winScrollTop <= topPosOpacity){
                 $.each($('#about .img .animate'), function(){
                       $(this).css('opacity', 0 );
                });        
     }

/*==============================   head start ===================================*/
   if(winScrollTop < topPosStart_h){
                var path_length = topPosMiddle_h - topPosStart_h;
                 $.each($('#faq .img .animate'), function(){
                       var top_pos = path_length*($(this).attr('data-speed') * 1);
                       $(this).css('top', top_pos + 'px' );
                });
     }  
    if(winScrollTop >= topPosStart_h && winScrollTop <= topPosMiddle_h){
                 var rest_path = topPosMiddle_h - winScrollTop;
                 $.each($('#faq .img .animate'), function(){
                       var top_pos = rest_path*($(this).attr('data-speed') * 1);
                       $(this).css('top', top_pos + 'px' );
                });

     }          
      if(winScrollTop >= topPosMiddle_h && winScrollTop <= botPosMiddle_h){
                 $.each($('#faq .img .animate'), function(){
                       $(this).css('top', '0px' );
                });

      } 
      if(winScrollTop >= botPosMiddle_h && winScrollTop <= botPosEnd_h){

                 var rest_path = winScrollTop - topPosMiddle_h;
                 $.each($('#faq .img .animate'), function(){
                       var top_pos = -1 * rest_path*($(this).attr('data-speed') * 1);
                       $(this).css('top', top_pos + 'px' );
                });                 
      }
              if(winScrollTop > botPosEnd_h){
                 
                 $.each($('#faq .img .animate'), function(){
                       $(this).css('top', '-' +($(this).attr('data-speed') * 1) + 'px' );
                });
                
     } 
     if (winScrollTop >=topPosOpacity_h && winScrollTop <= topPosMiddle_h){
        var cur_opacity = 1 - (topPosMiddle_h - winScrollTop)*opacity_step_h;
                 $.each($('#faq .img .animate'), function(){
                       $(this).css('opacity', cur_opacity );
                });        
     }
     if (winScrollTop <=botPosOpacity_h && winScrollTop >= botPosMiddle_h){
        var cur_opacity = 1 - (winScrollTop - botPosMiddle_h )*opacity_step_h;
                 $.each($('#faq .img .animate'), function(){
                       $(this).css('opacity', cur_opacity );
                });        
     }     
     if (winScrollTop >=topPosMiddle_h && winScrollTop <= botPosMiddle_h){
        
                 $.each($('#faq .img .animate'), function(){
                       $(this).css('opacity', '1' );
                });        
     }
     if (winScrollTop >=botPosOpacity_h || winScrollTop <= topPosOpacity_h){
       
                 $.each($('#faq .img .animate'), function(){
                       $(this).css('opacity', 0 );
                });        
     }




// Listen for resize events
window.addEventListener('scroll', function ( event ) {
    winScrollTop = $(window).scrollTop();
    console.log( 'no debounce' );

    // If there's a timer, cancel it
    if (timeout) {
        window.cancelAnimationFrame(timeout);
    }

    // Setup the new requestAnimationFrame()
    timeout = window.requestAnimationFrame(function () {

        // Run our scroll functions
        //console.log( 'debounced ' +prev_pos+' '+winScrollTop+' '+topPosStart);
        if(winScrollTop >= topPosStart && winScrollTop <= topPosMiddle){
                 if (prev_pos < winScrollTop){
                        $('.sreeny').val('вниззззз '+winScrollTop);
                        parallaxScrolldecrease_up('#about');
                 }else{
                        $('.sreeny').val('up '+winScrollTop);
                        parallaxScrollincrease_down('#about');
                } 
                if (winScrollTop >=topPosOpacity) {
                        if (prev_pos < winScrollTop){

                                  increase_opacity('#about');
                        }else{

                                  decrease_opacity('#about');
                        }
                }
        }
        if(winScrollTop >topPosMiddle && winScrollTop < botPosMiddle){
                       $('.sreeny').val('стоим '+winScrollTop);
                       parallaxScrollzero('#about');
                       opacityZeroZone('#about');
                }
        if(winScrollTop >= botPosMiddle && winScrollTop <= botPosEnd){
                if (prev_pos < winScrollTop){
                      $('.sreeny').val('вниззззз '+winScrollTop);
                      parallaxScrolldecrease('#about');
                }else{
                      $('.sreeny').val('up '+winScrollTop);
                      parallaxScrollincrease('#about');
                }

                if (winScrollTop <=botPosOpacity) {
                        if (prev_pos < winScrollTop){

                                  decrease_opacity('#about');
                        }else{

                                  increase_opacity('#about');
                        }
                }
        }

/*===================================head=========================================*/        

        if(winScrollTop >= topPosStart_h && winScrollTop <= topPosMiddle_h){
                 if (prev_pos < winScrollTop){
                        $('.sreeny').val('вниззззз '+winScrollTop);
                        parallaxScrolldecrease_up('#faq');
                 }else{
                        $('.sreeny').val('up '+winScrollTop);
                        parallaxScrollincrease_down('#faq');
                } 
                if (winScrollTop >=topPosOpacity_h) {
                        if (prev_pos < winScrollTop){

                                  increase_opacity('#faq');
                        }else{

                                  decrease_opacity('#faq');
                        }
                }
        }
        if(winScrollTop >topPosMiddle_h && winScrollTop < botPosMiddle_h){
                       $('.sreeny').val('стоим '+winScrollTop);
                       parallaxScrollzero('#faq');
                       opacityZeroZone('#faq');
                }
        if(winScrollTop >= botPosMiddle_h && winScrollTop <= botPosEnd_h){
                if (prev_pos < winScrollTop){
                      $('.sreeny').val('вниззззз '+winScrollTop);
                      parallaxScrolldecrease('#faq');
                }else{
                      $('.sreeny').val('up '+winScrollTop);
                      parallaxScrollincrease('#faq');
                }

                if (winScrollTop <=botPosOpacity_h) {
                        if (prev_pos < winScrollTop){

                                  decrease_opacity('#faq');
                        }else{

                                  increase_opacity('#faq');
                        }
                }
        }
        
        

prev_pos = winScrollTop;

    });
    

}, false);



/*================= functions ================================*/


function increase_opacity(container){

    var scrolled = Math.abs(winScrollTop - prev_pos);
   
    $.each($(container+' .img .animate'), function(){
         $(this).css('opacity', $(this).css('opacity')*1 + scrolled*opacity_step );
    });

}
function decrease_opacity(container){

    var scrolled = Math.abs(winScrollTop - prev_pos);
  
    $.each($(container+' .img .animate'), function(){
         if(($(this).css('opacity')*1 - scrolled*opacity_step)>0){
            $(this).css('opacity', $(this).css('opacity')*1 - scrolled*opacity_step );
        }else{
            $(this).css('opacity', '0' );
        }
    });

}
function opacityZeroZone(container){
   $.each($(container+' .img .animate'), function(){
         $(this).css('opacity', '1' );
    });

}


/*==============================position=================================*/
 function parallaxScrolldecrease_up(container){
    var scrolled = Math.abs(winScrollTop - prev_pos);

                    
    $.each($(container+' .img .animate'), function(){

         var k = $(this).attr('data-speed') * 1;
         var new_pos = parseFloat($(this).css('top'))-(scrolled*k);

         if(new_pos > 0){
                   $(this).css('top',new_pos+'px');
         }else{
                   $(this).css('top','0px');
         }          
    });
 }
function parallaxScrollincrease(container){
    var scrolled = Math.abs(winScrollTop - prev_pos);


    $.each($(container+' .img .animate'), function(){

         var k = $(this).attr('data-speed') * 1;
         var new_pos = parseFloat($(this).css('top'))+(scrolled*k);

         if(new_pos < 0){
                   $(this).css('top',new_pos+'px');
         }else{
                   $(this).css('top','0px');
         }          
    });
 }

function parallaxScrolldecrease(container){
    var scrolled = Math.abs(prev_pos - winScrollTop);
    var path_length = botPosEnd - botPosMiddle;

        $.each($(container+' .img .animate'), function(){

         var k = $(this).attr('data-speed') * 1;
         var new_pos = parseFloat($(this).css('top'))-(scrolled*k);
         var max_pos = -1 * path_length * k;
         if(new_pos > max_pos){
                   $(this).css('top',new_pos+'px');
         }else{
                   $(this).css('top',max_pos+'px');
         }          
    });

}

function parallaxScrollincrease_down(container){
    var scrolled = Math.abs(winScrollTop - prev_pos);
    var path_length = topPosMiddle - topPosStart;

        $.each($(container+' .img .animate'), function(){

         var k = $(this).attr('data-speed') * 1;
         var new_pos = parseFloat($(this).css('top'))+(scrolled*k);
         var max_pos = path_length * k;
         if(new_pos < max_pos){
                   $(this).css('top',new_pos+'px');
         }else{
                   $(this).css('top',max_pos+'px');
         }          
    });


        
 
 }


function parallaxScrollzero(){
     $('#about .img .l1').css('top','0px');
  $('#about .img .l2').css('top','0px');
  $('#about .img .l3').css('top','0px');
  $('#about .img .l4').css('top','0px');
  $('#about .img .l5').css('top','0px');
}

});