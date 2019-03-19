$(function(){
  $('#drop').hover(function() {
   $('.drop-menu').slideDown();
 },);
  $('.drop-menu li').mouseout(function(){
   $('.drop-menu').slideUp();
});

});
