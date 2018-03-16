$(document).ready(function(){
	

var winHeight = $(window).height();

var target_level = $('#level');
var targetPos_level = target_level.offset().top;
var scrollToElem_level = targetPos_level - winHeight +300;

var target_top_timer = $('#top_timer');
var targetPos_top_timer = target_top_timer.offset().top;
var scrollToElem_top_timer = targetPos_top_timer - winHeight +310;

var target_bottom_timer = $('#bottom_timer');
var targetPos_bottom_timer = target_bottom_timer.offset().top;
var scrollToElem_bottom_timer = targetPos_bottom_timer - winHeight;

$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > 0){
     $('header').addClass('header_fixed');
  }
  if(winScrollTop == 0){
     $('header').removeClass('header_fixed');
  }
    if(winScrollTop > scrollToElem_level){
     $('#level .level_block .pillar .level').addClass('level--top');
     $('#level .level_block .level_line').addClass('level--top');
     $('#level .level_block .pillar .actuall-level').addClass('level--top');
    
     
  }
  if((winScrollTop > scrollToElem_top_timer) && (winScrollTop < scrollToElem_bottom_timer) ){
       $('.fixed_timer').addClass('fixed_timer_active');
  }else{
       $('.fixed_timer').removeClass('fixed_timer_active');
  }
});


$('header .socials .lang').click(function(){

	if ($(this).hasClass('opened_lang')) {
		$(this).removeClass('opened_lang');
	}else{

		$(this).addClass('opened_lang');
	}
});

$(document).click(function(event){

  if (!$(event.target).closest('.lang').length){
      $('header .socials .lang').removeClass('opened_lang');
  }
});

/* var link = $('.video_link');
    var player = $('.video_player');

    link.on('click', function (e) {
        e.preventDefault();
        link.css({
            'display': 'none'
        });
        player.css({
            'display': 'initial'
        });
        player.attr('src', 'https://www.youtube.com/embed/5D7yijz4x5Q?autoplay=1');
    });*/

$('#faq dl').click(function(){
    if ($(this).hasClass('opened')) {
    $(this).removeClass('opened');
  }else{

    $(this).addClass('opened');
  }
});

$('.expander').click(function(){
    var target = '.'+$(this).attr('data-target');

 /*   var target_for_close = '.'+$('.expander').attr('data-target');
    $(target_for_close).removeClass('expander_opened');
    $('.expander').removeClass('opened');

   */ 
    if($(target).hasClass('opened')){
         $(this).removeClass('expander_opened');
         $(target).removeClass('opened');
       $('body').removeClass('fixed_body');
          
    }else{
         $(target).addClass('opened');
         $(this).addClass('expander_opened');
         
       if($(this).hasClass('mob_toggler_navbar')){
                   $('body').addClass('fixed_body');
                
          }          
    }



      
});


$('#video .video_list_container .list li').click(function(){
 $('#video .main li.active').removeClass('active');
 $( "#video .video_list_container .list li.active" ).removeClass('active');
 var num_elem =  $( "#video .video_list_container .list li" ).index( $(this) );
 var arr_elem = $('#video .main li');
 var elem = arr_elem[num_elem];
 $(elem).addClass('active');
});

});