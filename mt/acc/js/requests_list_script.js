$(function(){
    $('.verification_request_list .header_list .date').click(function(){
        if($(this).hasClass('down')){
            $(this).removeClass('down');
        }else{
            $(this).addClass('down');
        }
    });
    $('.verification_request_list .body_list ul li dl dd .menu_btn').click(function(){
        if($(this).parents('dd').hasClass('opened')){
            $(this).parents('dd').removeClass('opened');
        }else{
            $(this).parents('dd').addClass('opened');
        }
    });   
    $('.multiple_elems_block').on('click','.choose_file input[type="text"]',function() {
        $(this).parent().find('input[type="file"]').click();
       
    });
   
    $('.multiple_elems_block').on('change','.choose_file input[type=file]', function() {
        var str = "";
        str = $(this).val();
        var parts_str = str.split(/[\/\\]/);
       
        $(this).parents('.choose_file').find('span').text( parts_str[parts_str.length - 1]);
    }).change();
    
    $('.form_kys_block .form_kys form ul li .radio_switcher div').click(function(){
        if(!$(this).hasClass('checked')){
            $(this).parent().find('div.checked').removeClass('checked');
            $(this).addClass('checked');
            $(this).parent().find('input[type=hidden]').val($(this).data('type'));
            $(this).parent().find('input[type=hidden]').change();
        }
    });

    $('.multiple_btn_block .btn_add').click(function(){
        var elem = '<div class="form_input choose_file multiple_elems"><input name="passport_scan" type="file"><div class="choose_btn">Choose...</div><input type="text" readonly /><span></span></div>';
        var limit = $(this).parents('.multiple_elems_sys').data("max") * 1;
        if( $(this).parents('.multiple_elems_sys').find('.multiple_elems_block .multiple_elems').length < limit ){
            $(this).parents('.multiple_elems_sys').find('.multiple_elems_block').append(elem);
        }
    });

    $('.required_elem').keyup(function(){
        if($(this).val() != ''){
            $(this).addClass('required_ok');
        }else{
            $(this).removeClass('required_ok');
        }
        if( $('.required_ok').length == $('.required_elem').length ){
            $(this).parents('form').find('button[type=submit]').prop('disabled', false);
        }else{
            $(this).parents('form').find('button[type=submit]').prop('disabled', true);
        }
        console.log('ok');
    });
    $('.required_elem').change(function(){
        $(this).keyup();
    });

});