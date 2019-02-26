$(function() {
	
	
//中日文切换
	var cn = ["首页", "实时动态", "电影", "艺人", "关于赢动"];
	var jp = ["ホームページ", "リリース", "映画", "アーティスト", "会社案内"];

	var storage = window.localStorage;
	var state = storage.state;
	$("#china").on("click", function() {
		storage.setItem("state", 0);
		for (var i = 0; i < $(".nav_a").length; i++) {
			$(".nav_a").eq(i).html(cn[i]);
		}
		$(this).css({"color":"#000","font-size":"16px"}).siblings("#jp").css({"color":"#cecccc","font-size":"15px"});
	})
	$("#jp").on("click", function() {
		storage.setItem("state", 1);
		for (var i = 0; i < $(".nav_a").length; i++) {
			$(".nav_a").eq(i).html(jp[i]);
		}
		$(this).css({"color":"#000","font-size":"16px"}).siblings("#china").css({"color":"#cecccc","font-size":"15px"});
	})
	if (state == 1) {
		for (var i = 0; i < $(".nav_a").length; i++) {
			$(".nav_a").eq(i).html(jp[i]);
		}
		$("#jp").css({"color":"#000","font-size":"16px"}).siblings("#china").css({"color":"#cecccc","font-size":"15px"});
		$("#china").text("中文版");
		$("#jp").text("日文版");
		$("#_line").text("/");
	} else {
		for (var i = 0; i < $(".nav_a").length; i++) {
			$(".nav_a").eq(i).html(cn[i]);
		}
		$("#china").css({"color":"#000","font-size":"16px"}).siblings("#jp").css({"color":"#cecccc","font-size":"15px"});
		$("#china").text("中文版");
		$("#jp").text("日文版");
		$("#_line").text("/");
	}


//关于赢动导航栏
	$("#about_container .nav li").on("click", function(e) {
		e.preventDefault();
		$("#about_container .nav li a").removeClass("active");
		$(this).children("a").addClass("active");
		var li_num = $("#about_container .nav li").index(this);
		$(".view").eq(li_num).attr("id", "active").siblings(".view").attr("id", "");
		window.location.href = "#active";
	})


//	实时动态详情页
	$(".left span").on("click",function(){
	    $(this).css("font-weight","bold").siblings().css("font-weight","normal");
        var a=$(this).index();
        $('.oline').eq(a).show().siblings("img").hide();      
	})
	
//	艺人详情页
	$("#actors_details_container .content>a").on("click",function(){
	    $(this).addClass("active").siblings().removeClass("active"); 
	})

//	电影更多页
	$("#film_more_main2 .one>a").on("click",function(){
	    $(this).addClass("active").siblings().removeClass("active"); 
	})
	$("#film_more_main2 .two>a").on("click",function(){
	    $(this).addClass("active").siblings().removeClass("active"); 
	})
	$("#film_more_main2 .page>a").on("click",function(){
	    $(this).addClass("active").siblings().removeClass("active"); 
	})

})