var qn = 0;
var url_qid = parseInt(parseQueryString(location.search).qid);

var allQ = [
["滷肉飯","菜市場","懶惰","嘉義","梳子","舅公","大象","苦瓜","車站","懷孕","貓空","冰箱","爸爸","羊"],
["咖啡","郵局","警察","高雄","口罩","姑姑","兔子","香蕉","動物園","恭喜發財","基隆","電梯","叔公","火雞"],
["醬油","飯店","地震","阿里山","公車","表妹","蜘蛛","西瓜","公園","觀世音","北投","掃把","姐夫","豬"],
["地瓜","酒店","土地公","深坑","計程車","弟弟","螞蟻","紅蘿蔔","醫院","房租","九份","枕頭","媽媽","狗"],
["釋迦","機場","股票","平溪","毛筆","姨嬤","貓","湯圓","圖書館","勤勞","鹽水","手套","姑婆","蚊子"],
["臭豆腐","廚房","拜天公","花蓮","碗公","舅舅","蟑螂","燒仙草","游泳地","按摩","宜蘭","冷氣","堂弟","龍"],
["水餃","廟","進香","木柵","內褲","親家母","小卷","醋","銀行","尾牙","淡水","飛機","親家","河豚"],
["挫冰","廁所","收驚","仙跡岩","電視","妹妹","猴子","芭樂","夜市","燒金紙","台中","垃圾桶","姑丈","蛇",],
["蚵仔麵線","百貨公司","談戀愛","新竹","電話","舅媽","鴿子","辣椒","補習班","唱歌","金門","臉盆","孫子","牛"]
];


var nowQ = allQ[url_qid - 1];


//Getting URL Parameters
function parseQueryString(url) {
	var urlParams = {};
	url.replace(
		new RegExp("([^?=&]+)(=([^&]*))?", "g"),
		function($0, $1, $2, $3) {
			urlParams[$1] = $3;
		}
	);
	return urlParams;
}



$(document).ready(function() {
	setQ();
	
	$('.prve').on('click',prveQ);
	$('.next').on('click',nextQ);
});


function nextQ(){
	event.preventDefault();
	qn++;
	setQ();

	if(qn == (nowQ.length-1)){
		$('.next').css({display:'none'});
	}else {
		$('.prve').css({display:'block'});
		$('.next').css({display:'block'});
	}
}


function prveQ(){
	event.preventDefault();
	qn--;
	setQ();

	if(qn == 0){
		$('.prve').css({display:'none'});
	}else {
		$('.prve').css({display:'block'});
		$('.next').css({display:'block'});
	}
}


function setQ(){
	$('.quiz').html(nowQ[qn]);
}
