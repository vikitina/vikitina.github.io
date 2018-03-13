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

 var link = $('.video_link');
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
    });

$('#faq dl').click(function(){
    if ($(this).hasClass('opened')) {
    $(this).removeClass('opened');
  }else{

    $(this).addClass('opened');
  }
});

});