$(document).ready(function(){
	
	var winheight = $(window).height()-$('header').height();
	$('.height100pc').css('height',winheight+'px');

	//$('.contact_sales').css('min-height',winheight+'px');

	$('.team_item').mouseover(function(){
		$(this).addClass('team_item_hover');
	});
	$('.team_item').mouseout(function(){
		$(this).removeClass('team_item_hover');	 
	});	
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

      $('.wwd .wwd_container .wwd_r_col .circle_di ul li img').mouseover(function(){
      	$(this).addClass('hover');
      });
       $('.wwd .wwd_container .wwd_r_col .circle_di ul li img').mouseout(function(){
      	$(this).removeClass('hover');
      });

      $('.wwd .wwd_container .wwd_r_col .circle_di ul li dl').mouseover(function(){
      	$(this).parent().find('img').addClass('hover');
      });
       $('.wwd .wwd_container .wwd_r_col .circle_di ul li dl').mouseout(function(){
      	$(this).parent().find('img').removeClass('hover');
      });


       $window = $(window);
		    $('div[data-type="background"]').each(function(){
     		var $bgobj = $(this);
			  $(window).scroll(function() {
       			var yPos = -($window.scrollTop() / $bgobj.data('speed')) + 100; 
        		var coords = 'center '+ yPos + 'px';
       			$bgobj.css({ backgroundPosition: coords });
    		}); 
        }); 
		  

		$('.with_submenu').click(function(){
			if($(this).hasClass('submenu_opened')){
				$(this).removeClass('submenu_opened');
			}else{
				$(this).addClass('submenu_opened');
			}
		});


		$('input, select, textarea').blur(function() {
        	$('input').parents('li').removeClass("focus");
      	})
      	.focus(function() {
      		$('.focus').removeClass('focus');
      	  	$(this).parents('li').addClass("focus");
      	  	
      	});

      	$(document).click(function(event){

  			if (!$(event.target).closest('.form_window input, .form_window select, .form_window textarea').length){
      			$('.focus').removeClass('focus');
  			}

  			 if (!$(event.target).closest('.products').length){
      			$('.products').removeClass('submenu_opened');
  			}
   
		});

		
			

});