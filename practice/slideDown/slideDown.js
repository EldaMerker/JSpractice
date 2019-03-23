$(function(){
$('.menu-q').click(function(){
  var $answer = $(this).find('.menu-a');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();
    }else{
      $answer.addClass('open');
      $answer.slideDown();
    }
});
});
