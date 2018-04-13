$(function(){
	$('header .white_line .right_block_container .persona').click(function(){

	            if($(this).hasClass('persona_open')){

	                    $(this).removeClass('persona_open');
	            }else{
	                    $(this).addClass('persona_open');
	            }
	});
	$('header .blue_line .nav_mob').click(function(){
		if($(this).hasClass('nav_mob_opened')){
			$(this).removeClass('nav_mob_opened');
		}else{
            $(this).addClass('nav_mob_opened');
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

/*
                                         <div class="radio_group">
                                             <input type="hidden" />
                                             <span class="toggle_radio checked" data-value="idex">Idex</span>
                                             <span class="toggle_radio" data-value="latoken">Latoken</span>
                                             <span class="toggle_radio" data-value="etherdelta">EtherDelta</span>
                                           </div><!-- radio_group  -->


*/