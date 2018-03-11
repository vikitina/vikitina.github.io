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

});