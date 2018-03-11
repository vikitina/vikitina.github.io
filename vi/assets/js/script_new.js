$(document).ready(function(){
	

var winHeight = $(window).height();

var target_level = $('#level');
var targetPos_level = target_level.offset().top;
var scrollToElem_level = targetPos_level - winHeight +300;



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
});


$('header .socials .lang').click(function(){

	if ($(this).hasClass('opened_lang')) {
		$(this).removeClass('opened_lang');
	}else{

		$(this).addClass('opened_lang');
	}
});
});