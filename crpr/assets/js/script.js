$(function(){
       $('.mob_btn').click(function(){
           if( $('header').hasClass('opened_menu') ){
                $('header').removeClass('opened_menu')
            }else{
                $('header').addClass('opened_menu')
            }
       });

       $('.tabs_container  .tabs_menu  li').click(function(){

            var tabcontainer_name = $(this).data('tabcontainer');
            var tabcontainer_text = $(this).text();

            $(this).closest('.tabs_menu').find('.selected').removeClass('selected');
            $(this).addClass('selected');

            var closest_level = $(this).closest('.tabs_container').find('.tabs_content');
            $(closest_level[0]).children('.selected').removeClass('selected');

            $(this).closest('.tabs_container').find('.tabs_content .'+tabcontainer_name).addClass('selected');

            if($(this).closest('.tabs_container').find('span.mob_list')){
                $(this).parent().parent().find('span.mob_list').text(tabcontainer_text);
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

