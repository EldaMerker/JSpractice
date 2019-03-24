$(function() {
	$('#menu,.header_inner li a').click(function() {
		$('#menu,.header_inner li').toggleClass('on');
	});
});

$(function () {
 var headerHight = 60;
 $('a[href^=#]').click(function(){
	 var href= $(this).attr("href");
		 var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
	 $("html, body").animate({scrollTop:position}, 550, "swing");
			return false;
	 });
});
