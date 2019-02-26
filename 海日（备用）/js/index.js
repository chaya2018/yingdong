$(function() {
	init()
})
	
function init(){	

	// 点击首页视频-更多展示的页面
	for (var m=0; m<indexData.length; ++m) {
		if(indexData[m].category == 1){
			$("#film_more_main2 ul").append(
			'<li>'+
				'<a href="film_play.html?id='+(m+1)+'&category=1">' + 
					'<div class="imgs">' +
						'<img src="'+indexData[m].img+'" />' + 
					'</div>' +
					'<p>'+indexData[m].p1+'</p><p>'+indexData[m].p2+'</p>' +					
				'</a>'+
			'</li>'
			)
		}
	}

	// 导航电影栏目新片速递页面
	for (var m=0; m<newData.length; ++m) {
		if(newData[m].category == 2){
			$("#films_container .new").append(
			'<li>'+
				'<a href="film_play.html?id='+(m+1)+'&category=2">' + 
					'<div class="imgs">' +
						'<img src="'+newData[m].img+'" />' + 
					'</div>' +
					'<p>'+newData[m].p1+'</p><p>'+newData[m].p2+'</p>' +					
				'</a>'+
			'</li>'
			)
		}
	}

	// 导航电影栏目预告片页面
	for (var m=0; m<prevueData.length; ++m) {
		if(prevueData[m].category == 3){
			$("#films_container .yugao").append(
			'<li>'+
				'<a href="film_play.html?id='+(m+1)+'&category=3">' + 
					'<div class="imgs">' +
						'<img src="'+prevueData[m].img+'" />' + 
					'</div>' +
					'<p>'+prevueData[m].p1+'</p><p>'+prevueData[m].p2+'</p>' +					
				'</a>'+
			'</li>'
			)
		}
	}

	// 导航电影栏目花絮视频页面
	for (var m=0; m<huaData.length; ++m) {
		if(huaData[m].category == 4){
			$("#films_container .huaxu").append(
				'<li>'+
					'<a href="film_play.html?id='+(m+1)+'&category=4">' + 
						'<div class="imgs">' +
							'<img src="'+huaData[m].img+'" />' + 
						'</div>' +
						'<p>'+huaData[m].p1+'</p>' +					
					'</a>'+
				'</li>'
			)
		}
	}

	// 导航电影栏目赢动影视库页面
	for (var m=0; m<ydData.length; ++m) {
		if(ydData[m].category == 5){
			$("#films_container .ku").append(
				'<li>'+
					'<a href="film_play.html?id='+(m+1)+'&category=5">' + 
						'<div class="imgs">' +
							'<img src="'+ydData[m].img+'" />' + 
						'</div>' +
						'<p>'+ydData[m].p1+'</p><p>'+ydData[m].p2+'</p>' +					
					'</a>'+
				'</li>'
			)
		}
	}

	// 首页实时动态页面
	for (var m=0; m<shiData.length; ++m) {
		if(shiData[m].category == 6){
			$("#index_container .dongtai").append(
				'<li>'+
					'<a href="film_play.html?id='+(m+1)+'&category=6">' + 
						'<div class="imgs">' +
							'<img src="'+shiData[m].img+'" />' + 
						'</div>' +
						'<p>'+shiData[m].p1+'</p><p>'+shiData[m].p2+'</p>' +					
					'</a>'+
				'</li>'
			)
		}
	}
	// 导航艺人栏目艺人视频页面
	// for (var m=0; m<shiData.length; ++m) {
	// 	if(shiData[m].category == 7){
	// 		$("#actors_container .video").append(
	// 			'<li>'+
	// 				'<a href="actors_details.html?id='+(m+1)+'&category=7">' + 
	// 					'<div class="imgs">' +
	// 						'<img src="'+data[m].img+'" />' + 
	// 					'</div>' +
	// 					'<p>'+data[m].p1+'</p>' +					
	// 				'</a>'+
	// 			'</li>'
	// 		)
	// 	}
	// }

		
	//中日文切换
	var cn = ["首页", "实时动态", "电影", "艺人", "关于赢动"];
	// var jp = ["ホームページ", "リリース", "映画", "アーティスト", "会社案内"];
	for (var i = 0; i < $(".nav_a").length; i++) {
		$(".nav_a").eq(i).html(cn[i]);
	}
	$("#china").css({"color":"#000","font-size":"16px"}).siblings("#jp").css({"color":"#cecccc","font-size":"15px"});
	$("#china").text("中文版");
	$("#jp").text("日文版");
	$("#_line").text("/");

	$("#jp").click(function() {
		translateJp();
	})
	$("#china").click(function() {
		translateCh();
	})

	var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "js/translate.js";
    document.getElementsByTagName('head')[0].appendChild(script);

    var value = sessionStorage.getItem("language");
    document.onreadystatechange = function() {
        if (document.readyState == 'complete') {
            if (value === "1") {
                Microsoft.Translator.Widget.Translate('zh-CHS', 'ja', onProgress, onError, onComplete, onRestoreOriginal, 2000);
            }
        }
    }

    function onProgress(value) {}
    function onError(error) {}
    function onComplete() {
        $("#WidgetFloaterPanels").hide();
    }
    function onRestoreOriginal() {}

	// var storage = window.localStorage;
	// var state = storage.state;
	// $("#china").on("click", function() {
	// 	storage.setItem("state", 0);
	// 	for (var i = 0; i < $(".nav_a").length; i++) {
	// 		$(".nav_a").eq(i).html(cn[i]);
	// 	}
	// 	$(this).css({"color":"#000","font-size":"16px"}).siblings("#jp").css({"color":"#cecccc","font-size":"15px"});
	// })
	// $("#jp").on("click", function() {
	// 	storage.setItem("state", 1);
	// 	for (var i = 0; i < $(".nav_a").length; i++) {
	// 		$(".nav_a").eq(i).html(jp[i]);
	// 	}
	// 	$(this).css({"color":"#000","font-size":"16px"}).siblings("#china").css({"color":"#cecccc","font-size":"15px"});
	// })
	// if (state == 1) {
	// 	for (var i = 0; i < $(".nav_a").length; i++) {
	// 		$(".nav_a").eq(i).html(jp[i]);
	// 	}
	// 	$("#jp").css({"color":"#000","font-size":"16px"}).siblings("#china").css({"color":"#cecccc","font-size":"15px"});
	// 	$("#china").text("中文版");
	// 	$("#jp").text("日文版");
	// 	$("#_line").text("/");
	// } else {
	// 	for (var i = 0; i < $(".nav_a").length; i++) {
	// 		$(".nav_a").eq(i).html(cn[i]);
	// 	}
	// 	$("#china").css({"color":"#000","font-size":"16px"}).siblings("#jp").css({"color":"#cecccc","font-size":"15px"});
	// 	$("#china").text("中文版");
	// 	$("#jp").text("日文版");
	// 	$("#_line").text("/");
	// }
		
    // 网页头部导航
	$(window).scroll(function() {
	  	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	  	if(scrollTop>0){
	  		$("#top").css("box-shadow","0 6px 25px 6px rgba(0,0,0,0.2)")
		}else{
			$("#top").css("box-shadow","0 0 0 0 #eae8e8")
		}
	})

	//关于赢动滚动监听
	$("#about_container .nav li").on("click", function() {
		$(this).addClass("active");
		$(this).siblings("li").removeClass("active");
		var li_num = $("#about_container .nav li").index(this);
		$(".main").eq(li_num).attr("id", "active").siblings(".main").attr("id", "");
		window.location.href = "#active";
	})

	window.addEventListener("scroll",function(e){
		var t =document.documentElement.scrollTop||document.body.scrollTop;
		if(t<=300 & t>0){
			$(".nav .first").addClass("active")
			$(".nav li.first").siblings().removeClass("active")		
		}
		if(t<=800 & t>300){
			$(".nav .second").addClass("active")
			$(".nav li.second").siblings().removeClass("active")		
		}
		if(t<=1278 & t>800){
			$(".nav .third").addClass("active")
			$(".nav li.third").siblings().removeClass("active")		
		}
		if( t>1278){
			$(".nav .fourth").addClass("active")
			$(".nav li.fourth").siblings().removeClass("active")		
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


	
	//	艺人详情页选项卡切换
	$("#actors_details_container .tap").on("click",function(){
	    $(this).addClass("active").siblings().removeClass("active"); 
	    var index = $(this).index();
	    console.log(index)
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
function translateJp() {
    var value = sessionStorage.getItem("language");
    sessionStorage.setItem("language", "1");
    window.location.reload(); 
}
function translateCh() {
    var value = sessionStorage.getItem("language");
    sessionStorage.setItem("language", "0");
    window.location.reload(); 
}

