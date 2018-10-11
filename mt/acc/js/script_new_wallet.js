$(function(){
	$('header .white_line .right_block_container .persona').click(function(){

	            if($(this).hasClass('persona_open')){

	                    $(this).removeClass('persona_open');
	            }else{
	                    $(this).addClass('persona_open');
	            }
	});
	
		$('header .persona_mob').click(function(){

	            if($(this).hasClass('persona_mob_open')){

	                    $(this).removeClass('persona_mob_open');
	            }else{
	                    $(this).addClass('persona_mob_open');
	            }
	});
	$('header .blue_line .nav_mob').click(function(){
		if($(this).hasClass('nav_mob_opened')){
			$(this).removeClass('nav_mob_opened');
			$('body').removeClass('fixed');
		}else{
            $(this).addClass('nav_mob_opened');
            $('body').addClass('fixed');
		}
	});
});

$(function () {
    $('[data-toggle="datepicker"]').datepicker({
        autoHide: true,
        autoPick: true,
        format: 'dd.mm.yyyy',
        zIndex: 999,
    });
});

$(function () {
    $('.radio_group .toggle_radio').click(function(){

    	if ($(this).hasClass('checked')){

              $(this).removeClass('checked');

    	}else{
             $(this).parent().find('.toggle_radio').removeClass('checked');
             $(this).parent().find('input').val($(this).data('value'));
             $(this).addClass('checked');
    	}
    });

	});

$(function () {
    $('.inner_menu_trigger i').click(function(){

    	if ($(this).parent().hasClass('opened')){

              $(this).parent().removeClass('opened');

    	}else{
             $(this).parent().addClass('opened');
    	}
    });

	});
$(function(){

	$('.checkbox_label').mouseup(function(){
    
		if($(this).find('.checkbox').hasClass('checkbox_checked')){
             $(this).find('.checkbox').removeClass('checkbox_checked');
             $(this).find('.checkbox input').val('');
		}else{
             $(this).find('.checkbox').addClass('checkbox_checked');
             $(this).find('.checkbox input').val('1');
             $(this).parent().removeClass('agree_error');
             $('#unchecked_tick').removeClass('active');
		}
	});
});

$(function(){


	$('.input-group-btn li a').click(function(){

           $(this).parents('.input-group-btn').find('button').text($(this).text());
           
           if ($(this).parents('.input-group-btn').hasClass('only_button_input-group-btn')){
               
                   var link = $(this).data('link');
                   var url = $(this).data('url');
                   $(link).attr('href',url);

                   

           }
	});

    $('.input-group-btn li span').click(function(){

           $(this).parents('.input-group-btn').find('button').text($(this).text());
           
           if ($(this).parents('.input-group-btn').hasClass('only_button_input-group-btn')){
               
                   var link = $(this).data('link');
                   var url = $(this).data('url');
                   $(link).attr('href',url);

                   

           }
    });
                                                  
});


$(function(){

        $('.form form .expert_feature span').click(function(){

        	if($(this).parent().hasClass('expert_feature_opened')){
        		$(this).parent().removeClass('expert_feature_opened')
        	}else{
        		$(this).parent().addClass('expert_feature_opened')
        	}
        });
});
$(function(){

    $('.wallet_block .w_block .list_of_currencies li').click(function(){

        if($(this).hasClass('active')){
            $(this).removeClass('active');

        }else{
            $('.wallet_block .w_block .list_of_currencies li').removeClass('active');
            $(this).addClass('active');
        }
    });
});

$(function(){


    $(document).mouseup(function (e){ 
    var target_1 = $(".inner_menu_trigger");
    var target_2 = $(".persona");
    var target_3 = $(".wallet_block .w_block .list_of_currencies li");

    if (!target_1.is(e.target)) { 
       $(target_1).removeClass('opened');
    } 
    if (!target_2.is(e.target)) { 
       $(target_2).removeClass('persona_open');
    }     
    if (!target_3.is(e.target)) { 
       $(target_3).removeClass('active');
    }      
   
 
  });
});
$(function(){

    var h = $(window).height()-150;
    $('#main_screen').css('min-height',h+'px');

});

$(function(){

$('.lang').click(function(){

  if ($(this).hasClass('opened_lang')) {
    $(this).removeClass('opened_lang');
  }else{

    $(this).addClass('opened_lang');
  }
});

});

$(function(){

  $('.hidden-l').click(function(){window.open($(this).data('l'));return false;});
});


/*
                                         <div class="radio_group">
                                             <input type="hidden" />
                                             <span class="toggle_radio checked" data-value="idex">Idex</span>
                                             <span class="toggle_radio" data-value="latoken">Latoken</span>
                                             <span class="toggle_radio" data-value="etherdelta">EtherDelta</span>
                                           </div><!-- radio_group  -->


*/