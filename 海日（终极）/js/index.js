$(function() {
	init()
})
	
function init(){	

	//点击首页视频-更多跳转至电影显示的内容
	for (var m=0; m<data.length; ++m) {
		$("#film_more_main2 ul").append(
		'<li>'+
			'<a href="film_play.html?id='+(m+1)+'">' + 
				'<div class="imgs">' +
					'<img src="'+data[m].img+'" />' + 
				'</div>' +
				'<p>'+data[m].p1+'</p><p>'+data[m].p2+'</p>' +					
			'</a>'+
		'</li>'
		)
	}

	//点击导航中的实时动态
	for (var m=0; m<list.length; ++m) {		
		$("#event_container .content").append(
		'<a href="hotspot_details.html?id='+(m+1)+'">'+			
		 	'<div class="imgs">'+
				'<img src="'+list[m].img+'" />'+
			'</div>'+
			'<div class="dis">'+
				'<p class="time">'+list[m].time+'</p>'+
				'<div class="'+list[m].class+'">'+list[m].type+'</div>'+
				'<p class="new">NEW</p>'+
			'</div>'+
			'<p class="dis-title">'+list[m].dis+'</p>' +
		'</a>'
		)
	}


	//中日文切换
	var cn = ["首页", "实时动态", "电影", "艺人", "关于赢动"];
	var jp = ["ホームページ", "リリース", "映画", "アーティスト", "会社案内"];

	var storage = window.localStorage;
	var state = storage.state;
	$("#china").on("click", function() {
		$(".cn").show();
		$(".ja").hide();
		storage.setItem("state", 0);
		for (var i = 0; i < $(".nav_a").length; i++) {
			$(".nav_a").eq(i).html(cn[i]);
		}
		$(this).css({"color":"#000","font-size":"16px"}).siblings("#jp").css({"color":"#cecccc","font-size":"15px"});
	})
	$("#jp").on("click", function() {
		$(".cn").hide();
		$(".ja").show();
		storage.setItem("state", 1);
		for (var i = 0; i < $(".nav_a").length; i++) {
			$(".nav_a").eq(i).html(jp[i]);
		}
		$(this).css({"color":"#000","font-size":"16px"}).siblings("#china").css({"color":"#cecccc","font-size":"15px"});
	})
	if (state == 1) {
		$(".cn").hide();
		$(".ja").show();
		for (var i = 0; i < $(".nav_a").length; i++) {
			$(".nav_a").eq(i).html(jp[i]);
		}
		$("#jp").css({"color":"#000","font-size":"16px"}).siblings("#china").css({"color":"#cecccc","font-size":"15px"});
		$("#china").text("中文版");
		$("#jp").text("日文版");
		$("#_line").text("/");
	} else {
		$(".cn").show();
		$(".ja").hide();
		for (var i = 0; i < $(".nav_a").length; i++) {
			$(".nav_a").eq(i).html(cn[i]);
		}
		$("#china").css({"color":"#000","font-size":"16px"}).siblings("#jp").css({"color":"#cecccc","font-size":"15px"});
		$("#china").text("中文版");
		$("#jp").text("日文版");
		$("#_line").text("/");
	}


		
    // 网页头部导航
	$(window).scroll(function() {
	  	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	  	if(scrollTop>0){
	  		$("#top").css("box-shadow","0 6px 25px 6px rgba(0,0,0,0.2)")
		}else{
			$("#top").css("box-shadow","0 0 0 0 #eae8e8")
		}
	})

 

	//关于赢动
	$("#about_container .nav li").on("click", function() {
		$(this).addClass("active").siblings("li").removeClass("active");
		var num = $("#about_container .nav li").index(this);
		$("#about_container .main").eq(num).attr("id", "href").siblings(".main").attr("id","");
		window.location.href="#href"
	})
	// 滚动监听
	window.addEventListener("scroll",function(e){
		var t =document.documentElement.scrollTop||document.body.scrollTop;
		console.log(t)
		if(t<=300 & t>0){
			$(".nav .first").addClass("active").siblings().removeClass("active")
		}
		if(t<=800 & t>300){
			$(".nav .second").addClass("active").siblings().removeClass("active")
		}
		if(t<=1000 & t>800){
			$(".nav .third").addClass("active").siblings().removeClass("active")
		}
		if(t>1000){
			$(".nav .fourth").addClass("active").siblings().removeClass("active")
		}
	});



	//	实时动态详情页
	$(".left p").on("click",function(){
	    $(this).css("font-weight","600").siblings().css("font-weight","normal");
        var index=$(this).index();
        console.log(index)
        $('.arrow').eq(index).show().siblings(".arrow").hide();   
        $('.scroll-box .content>div').eq(index).show().siblings("div").hide();      
	})
	
	//	艺人详情页
	$("#actors_details_container .tap").on("click",function(){
	    $(this).addClass("active").siblings().removeClass("active"); 
	    var index = $(this).index();
	    // console.log(index)
	    $(".itemTap>div").eq(index-1).show().siblings("div").hide();
	})

	//	电影更多页
	// $("#film_more_main2 .one>a").on("click",function(){
	//     $(this).addClass("active").siblings().removeClass("active"); 
	// })
	// $("#film_more_main2 .two>a").on("click",function(){
	//     $(this).addClass("active").siblings().removeClass("active"); 
	// })
	// $("#film_more_main2 .page>a").on("click",function(){
	//     $(this).addClass("active").siblings().removeClass("active"); 
	// })

}

