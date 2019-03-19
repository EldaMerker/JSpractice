$(function(){

var offsetY = 0;
// 移動先値修正
var time = 500;
// 変化時間設定
$('a[href^="#"]').click(function(){
  var target = $(this.hash);
  // 移動先の要素を取得
  if (!target.length) return;
  // 異動先の値取得
  var targetY = target.offset().top + offsetY;
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    window.history.pushState(null, null, this.hash);
    return false;
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
