"use strict";

$(document).ready(function(){
    set_indexes_for_tree(data, null);

    var str = '';

    $.each( data, function( key, elem ) {
        str += '<li class="choice_elem" data-address="'+ elem.node_address +'">' + elem.name + '</li>';
      });
    $('#first_data_block').html(str);
});


$(document).ready(function(){
    

    $('.calculator_block li[data-step="1"]').addClass('active');
    $('.calculator_block li h5').mouseover(function(){
        $('.calculator_block li.hover').removeClass('hover');
        $(this).addClass('hover');
    });

    $('.calculator_block li h5').mouseout(function(){
        $(this).removeClass('hover');
       
    });    
    $('.next_step_btn').click(function(){
        if( $(this).parents('li').find('.control_element').val() ){
            var parent_node = $(this).parents('li').find('.control_element').val();
            $(this).parents('li').removeClass('active');
            $(this).parents('li').next().addClass('active');
            $(this).parents('li').next().find('.control_element').attr('data-parent', parent_node );
            var node = get_node_by_index(data, parent_node);
            
            var str = "";
            if(node.children){
                $.each( node.children, function( key, elem ) {
                    str += '<li class="choice_elem" data-address="'+ elem.node_address +'">' + elem.name + '</li>';
                });
            }   
            $(this).parents('li.step').addClass('choiced');
            $(this).parents('li').next().find('.data_block .list_options').html(str);
        }else{
            $(this).parents('li').addClass('error');
        }    
    });
    $('.calculator_block li .data_block').on('click','.choice_elem',function(){
        var choiced_node = $(this).data('address');
        var choiced_text = $(this).text();
        $(this).closest('.data_block').find('.choice_elem_selected').removeClass('.choice_elem_selected');
        $(this).closest('.data_block').find('.choice_elem_selected').removeClass('choice_elem_selected');
        $(this).addClass('choice_elem_selected');
        $(this).closest('.data_block').find('.control_element').val(choiced_node);
        $(this).closest('.step').find('.result_block .result').text(choiced_text);

    });
    $('.choice_elem').mouseover(function(){
        $(this).addClass('choice_elem_hover');
    });
    $('.choice_elem').mouseout(function(){
        $(this).removeClass('choice_elem_hover');
    });    

});
/*------------------------------------------------------------------------------------------------*/
function set_indexes_for_tree(tree, parent) {
    $.each(tree, function(i, node) {

        var node_address = parent !== null ? parent + "/" + i : i + "";
        node.node_address = node_address;

        if (node.children) {
            set_indexes_for_tree(node.children, node_address);
        };
    });
}

// ------------------------------------------------
function get_node_by_index(tree, index_str) {
    var indexes = index_str.split(/\//);
    var node = tree[indexes.shift()];

    while (indexes.length) {
        node = node.children[indexes.shift()];
    }

    return node;
}