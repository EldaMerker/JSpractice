$(function(){

var pos = $('.sub-wrapper').offset().top;

$('#scroll-btn').click(function(){
    $('html,body').animate({
      scrollTop : pos
    },{
      queue : false
    });
  });
});








$(function(){
  var pos = $('header').offset().top;
  $('#scroll-top-btn').click(function(){
    $('html,body').animate({
      scrollTop : pos},{
        queue : false
    });
  });
});
