$(window).load(function(){
	$("body").append('');


	$("body").on("click ", ".menuBtn.mo", function(){
		winH = $(window).height();
		var gh = $("#gnb").height();
		$("#menuArea").fadeIn(300);
		$("#wrap").addClass("noScroll");
		$("#menuArea .menuList>.list>li").find(".sMenu").slideDown(300);
		$("#menuArea .menuList>.list>li .sMenu").hide();
		TweenLite.to($("#menuArea .menuList"), 0.2, {right:0, delay:0.2});
		$("body").append("<div id='grayLayer'><a href='#'></a></div>");
		$("#grayLayer").show();

	});

	$("body").on("click ", "#menuArea .btnMenu_mClose", function(){
		
		$("#menuArea").fadeOut(300);
		$("#wrap").removeClass("noScroll");
		TweenLite.to($("#menuArea .menuList"), 0.3, {right:-400});
		$("#grayLayer").remove();

	});

	// 
	$("body").on("click ", ".inner_t", function(){

		$("#menuArea").fadeOut(300);
		$("#wrap").removeClass("noScroll");
		TweenLite.to($("#menuArea .menuList"), 0.3, {right:-400});
		$("#grayLayer").remove();

	});

	$("body").on("click ", "#grayLayer", function(){

		$("#menuArea").fadeOut(300);
		$("#wrap").removeClass("noScroll");

		TweenLite.to($("#menuArea .menuList"), 0.3, {right:-400});
		$("#grayLayer").remove();
	});


	$("body").on("click ", "#menuArea .menuList>.list>li", function(){
		var idx = $("#menuArea .menuList>.list>li").index($(this));
		$("#menuArea .menuList>.list>li").each(function(index){
			if(idx == index){
				if(!$(this).hasClass("active")){
					$(this).addClass("active");
					$(this).find(".sMenu").slideDown(300);
				}else{
					$(this).removeClass("active");
					$(this).find(".sMenu").slideUp(300);
				}
			}else{
				$(this).removeClass("active");
				$(this).find(".sMenu").slideUp(300);
			}
		});
	});


	$(window).on('throttledresize', function(){
		$(".depth3Menu .depth3sub").attr("style", ""); //
	}).resize();

});


