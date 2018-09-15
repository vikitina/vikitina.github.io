$(document).ready(function(){
	
	var winheight = $(window).height()-$('header').height();
	$('.height100pc').css('height',winheight+'px');


       $('.mob_btn').click(function(){
           if( $('header').hasClass('opened_menu') ){
                $('header').removeClass('opened_menu')
            }else{
                $('header').addClass('opened_menu')
            }
       });

      
       $('.mob_list').click(function(){
          if($(this).parent().hasClass('tabs_menu_langs_container_opened')){
            $(this).parent().removeClass('tabs_menu_langs_container_opened');
          }else{
            $(this).parent().addClass('tabs_menu_langs_container_opened');
          }
       });

      $(window).scroll(function(){
        var winScrollTop = $(this).scrollTop();
        if(winScrollTop > 0){
           $('header').addClass('scrolled');
         }
           if(winScrollTop == 0){
              $('header').removeClass('scrolled');
         } 
      });




		
			

});