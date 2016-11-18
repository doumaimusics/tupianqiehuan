$(function(){
	$('.ig').click(function(){
		$(this).stop(true,true)
		$(".ig[title]").stop(true,true);
		var left1 = $(this).offset().left;
		var top1 = $(this).offset().top;
		var zindex1 = $(this).css("z-index");		
		var left2 = $(".ig[title]").offset().left;
		var top2 = $(".ig[title]").offset().top;
		var zindex2 = $(".ig[title]").css("z-index");
		$(".ig[title]").animate({"left":left1,"top":top1},500).css("z-index",zindex1).removeAttr("title");
		$(this).animate({"left":left2,"top":top2},500).css("z-index",zindex2).attr("title","");
	})
})
