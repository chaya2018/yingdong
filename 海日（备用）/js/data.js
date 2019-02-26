// 点击首页视频-更多展示的数据
var indexData = [{
	"id":1,
	"category":1,
	"sUrl":"http://player.youku.com/embed/XMzY4NzQ1NjY4MA==",
	"title":"《慧眼特攻/OPERATION ES》终极版预告1",
	"img":"./img/films/v1-1.png",
	"p1":"《慧眼特攻/OPERATION ES》",
	"p2":"终极版预告1",
	"name":"视频"
},
{
	"id":2,
	"category":1,
	"sUrl":"http://player.youku.com/embed/XMzY4OTk2NjMzMg==",
	"title":"《慧眼特攻/OPERATION ES》终极版预告2",
	"img":"./img/films/v1-2.png",
	"p1":"《慧眼特攻/OPERATION ES》",
	"p2":"终极版预告2",
	"name":"视频"
},
{
	"id":3,
	"category":1,
	"sUrl":"http://player.youku.com/embed/XMzY5OTU5MTU3Mg==",
	"title":"《慧眼特攻/OPERATION ES》正片（第一集+第二集）",
	"img":"./img/films/v1-3.png",
	"p1":"《慧眼特攻/OPERATION ES》",
	"p2":"正片（第一集+第二集）",
	"name":"视频"
},
{
	"id":4,
	"category":1,
	"sUrl":"http://player.youku.com/embed/XMzcwNTcxNzc0NA==",
	"title":"《慧眼特攻/OPERATION ES》MV（片头+片尾）",
	"img":"./img/films/v1-4.jpg",
	"p1":"《慧眼特攻/OPERATION ES》",
	"p2":"MV（片头+片尾）",
	"name":"视频"
},
{
	"id":5,
	"category":1,
	"sUrl":"http://player.youku.com/embed/XMTg1MjE3Mjk0MA==",
	"title":"恋战Kagonma",
	"img":"./img/films/v3.jpg",
	"p1":"恋战Kagonma",
	"p2":"",
	"name":"视频"
},
{
	"id":6,
	"category":1,
	"sUrl":"http://player.youku.com/embed/XMTcxNDgzMzgzNg==",
	"title":"Luanr代言日清U.F.O.飞碟炒面 广告主题曲《Melody Love》",
	"img":"./img/films/v2.jpg",
	"p1":"Luanr代言日清U.F.O.飞碟炒面",
	"p2":"广告主题曲《Melody Love》",
	"name":"视频"
},
{
	"id":7,
	"category":1,
	"sUrl":"http://player.youku.com/embed/XMTcxNDgzMzEyOA==",
	"title":"Luanr代言日清U.F.O.飞碟炒面 广告主题曲《Shake U.F.O. ever》",
	"img":"./img/films/v4.png",
	"p1":"Luanr代言日清U.F.O.飞碟炒面",
	"p2":"广告主题曲《Shake U.F.O. ever》",
	"name":"视频"
},
{
	"id":8,
	"category":1,
	"sUrl":"http://player.youku.com/embed/XMzY2MjU5NjQzNg==",
	"title":"Idol School新歌《咖喱俏娇娃》MV预告",
	"img":"./img/films/v5.png",
	"p1":"Idol School新歌《咖喱俏娇娃》",
	"p2":"MV预告",
	"name":"视频"
}]



/**
 * 导航电影新片速递数据
 * 
 */
var newData = [
{
	"id":1,
	"category":2,
	"sUrl":"film_play.html",
	"title":"一出好戏 8月10日 全国上映",
	"img":"./img/index/index05.jpg",
	"p1":"一出好戏",
	"p2":"8月10日 全国上映"
},{
	"id":2,
	"category":2,
	"sUrl":"film_play.html",
	"title":"阳台上 六月一日 天真有邪",
	"img":"./img/index/index06.jpg",
	"p1":"阳台上",
	"p2":"六月一日 天真有邪"
},{
	"id":3,
	"category":2,
	"sUrl":"film_play.html",
	"title":"动物世界 8月29日 赌命入局",
	"img":"./img/index/index07.jpg",
	"p1":"动物世界",
	"p2":"8月29日 赌命入局"
},{
	"id":4,
	"category":2,
	"sUrl":"film_play.html",
	"title":"金钱世界 有钱人跟你想的不一样",
	"img":"./img/index/index08.jpg",
	"p1":"金钱世界",
	"p2":"有钱人跟你想的不一样"
},{
	"id":5,
	"category":2,
	"sUrl":"film_play.html",
	"title":"英雄本色2018",
	"img":"./img/index/index09.jpg",
	"p1":"英雄本色2018",
	"p2":"再做一次兄弟同闯一片江湖"
}]

/**
 * 导航电影预告片数据
 * 
 */
var prevueData = [	
{
	"id":1,
	"category":3,
	"sUrl":"film_play.html",
	"title":"《动物世界》终极预告",
	"img":"./img/films/film22.jpg",
	"p1":"《动物世界》终极预告",
	"p2":""
},{
	"id":2,
	"category":3,
	"sUrl":"film_play.html",
	"title":"《超时空同居》群星版预告",
	"img":"./img/films/film23.jpg",
	"p1":"《超时空同居》群星版预告",
	"p2":""
},{
	"id":3,
	"category":3,
	"sUrl":"film_play.html",
	"title":"《一出好戏》欢迎光临版预告",
	"img":"./img/films/film24.jpg",
	"p1":"《一出好戏》欢迎光临版预告",
	"p2":""
},{
	"id":4,
	"category":3,
	"sUrl":"film_play.html",
	"title":"《动物世界》'开挂'版预告",
	"img":"./img/films/film25.jpg",
	"p1":"《动物世界》'开挂'版预告",
	"p2":""
},{
	"id":5,
	"category":3,
	"sUrl":"film_play.html",
	"title":"《一出好戏》定档预告片",
	"img":"./img/films/film26.jpg",
	"p1":"《一出好戏》定档预告片",
	"p2":""
}]

/**
 * 导航电影花絮视频数据
 * 
 */
var huaData = [
{
	"id":1,
	"category":4,
	"sUrl":"film_play.html",
	"title":"《墨多多秘境冒险》主题曲MV《每当想起你》",
	"img":"./img/films/film12.jpg",
	"p1":"《墨多多秘境冒险》主题曲MV《每当想起你》",
	"p2":""
},{
	"id":2,
	"category":4,
	"sUrl":"film_play.html",
	"title":"《动物世界》周冬雨特辑",
	"img":"./img/films/film13.jpg",
	"p1":"《动物世界》周冬雨特辑",
	"p2":""
},{
	"id":3,
	"category":4,
	"sUrl":"film_play.html",
	"title":"动口不如动手——最会要钱的导演又出手了特辑",
	"img":"./img/films/film14.jpg",
	"p1":"动口不如动手——最会要钱的导演又出手了特辑",
	"p2":""
},{
	"id":4,
	"category":4,
	"sUrl":"film_play.html",
	"title":"《动物世界》成长版片尾曲MV《成长之重量》",
	"img":"./img/films/film15.jpg",
	"p1":"《动物世界》成长版片尾曲MV《成长之重量》",
	"p2":""
},{
	"id":5,
	"category":4,
	"sUrl":"film_play.html",
	"title":"《动物世界》成长版片尾曲MV《成长之重量》",
	"img":"./img/films/film16.jpg",
	"p1":"《动物世界》成长版片尾曲MV《成长之重量》",
	"p2":""
},{
	"id":6,
	"category":4,
	"sUrl":"film_play.html",
	"title":"《墨多多秘境冒险》主题曲MV《每当想起你》",
	"img":"./img/films/film12.jpg",
	"p1":"《墨多多秘境冒险》主题曲MV《每当想起你》",
	"p2":""
},{
	"id":7,
	"category":4,
	"sUrl":"film_play.html",
	"title":"《动物世界》周冬雨特辑",
	"img":"./img/films/film13.jpg",
	"p1":"《动物世界》周冬雨特辑",
	"p2":""
},{
	"id":8,
	"category":4,
	"sUrl":"film_play.html",
	"title":"动口不如动手——最会要钱的导演又出手了特辑",
	"img":"./img/films/film14.jpg",
	"p1":"动口不如动手——最会要钱的导演又出手了特辑",
	"p2":""
},{
	"id":9,
	"category":4,
	"sUrl":"film_play.html",
	"title":"《动物世界》成长版片尾曲MV《成长之重量》",
	"img":"./img/films/film15.jpg",
	"p1":"《动物世界》成长版片尾曲MV《成长之重量》",
	"p2":""
},{
	"id":10,
	"category":4,
	"sUrl":"film_play.html",
	"title":"《动物世界》成长版片尾曲MV《成长之重量》",
	"img":"./img/films/film16.jpg",
	"p1":"《动物世界》成长版片尾曲MV《成长之重量》",
	"p2":""
}] 

/**
 * 导航电影赢动影片库
 * 
 */
var ydData = [
{
	"id":1,
	"category":5,
	"sUrl":"film_play.html",
	"title":"动物世界 8月29日 开挂人生",
	"img":"./img/films/film27.jpg",
	"p1":"动物世界",
	"p2":"8月29日 开挂人生"
},{
	"id":2,
	"category":5,
	"sUrl":"film_play.html",
	"title":"阳台上",
	"img":"./img/films/film28.jpg",
	"p1":"阳台上",
	"p2":"六月一日 天真有邪"
},{
	"id":3,
	"category":5,
	"sUrl":"film_play.html",
	"title":"金钱世界",
	"img":"./img/films/film29.jpg",
	"p1":"金钱世界",
	"p2":"有钱人跟你想的不一样"
},{
	"id":4,
	"category":5,
	"sUrl":"film_play.html",
	"title":"心理罪之城市之光",
	"img":"./img/films/film30.jpg",
	"p1":"心理罪之城市之光",
	"p2":"正义绝不缺席"
},{
	"id":5,
	"category":5,
	"sUrl":"film_play.html",
	"title":"圣诞奇妙公司",
	"img":"./img/films/film31.jpg",
	"p1":"圣诞奇妙公司",
	"p2":"这个冬天 欢乐开售"
},{
	"id":6,
	"category":5,
	"sUrl":"film_play.html",
	"title":"缝纫机乐队",
	"img":"./img/films/film32.jpg",
	"p1":"缝纫机乐队",
	"p2":"继续拯救不开心"
},{
	"id":7,
	"category":5,
	"sUrl":"film_play.html",
	"title":"三生三世十里桃花",
	"img":"./img/films/film33.jpg",
	"p1":"三生三世十里桃花",
	"p2":"青丘帝姬和九重天太子的三世情缘"
},{
	"id":8,
	"category":5,
	"sUrl":"film_play.html",
	"title":"秘果",
	"img":"./img/films/film34.jpg",
	"p1":"秘果",
	"p2":"所有的秘密，都是关于你"
},{
	"id":9,
	"category":5,
	"sUrl":"film_play.html",
	"title":"重返 狼群",
	"img":"./img/films/film35.jpg",
	"p1":"重返 狼群",
	"p2":"一匹狼如何从城市回到故乡"
},{
	"id":10,
	"category":5,
	"sUrl":"film_play.html",
	"title":"春娇救志明",
	"img":"./img/films/film36.jpg",
	"p1":"春娇救志明",
	"p2":"忘不了 戒不掉"
}]

/**
 * 首页实时动态数据
 * 
 */
var shiData = [	
{
	"id":1,
	"category":6,
	"sUrl":"film_play.html",
	"title":"一出好戏",
	"img":"./img/index/index05.jpg",
	"p1":"一出好戏",
	"p2":"8月10日 全国上映"
},{
	"id":2,
	"category":6,
	"sUrl":"film_play.html",
	"title":"阳台上",
	"img":"./img/index/index06.jpg",
	"p1":"阳台上",
	"p2":"六月一日 天真有邪"
},{
	"id":3,
	"category":6,
	"sUrl":"film_play.html",
	"title":"动物世界",
	"img":"./img/index/index07.jpg",
	"p1":"动物世界",
	"p2":"8月29日 赌命入局"
},{
	"id":4,
	"category":6,
	"sUrl":"film_play.html",
	"title":"金钱世界",
	"img":"./img/index/index08.jpg",
	"p1":"金钱世界",
	"p2":"有钱人跟你想的不一样"
},{
	"id":5,
	"category":6,
	"sUrl":"film_play.html",
	"title":"英雄本色2018",
	"img":"./img/index/index09.jpg",
	"p1":"英雄本色2018",
	"p2":"再做一次兄弟同闯一片江湖"
}]

