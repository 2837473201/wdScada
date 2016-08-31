//在html页面引入下面这个文件
// <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=92qyvplqPQ7EPwz8ALCwVASSGGkDuXRG"></script>
//点聚合要引入下面2个文件
//<script type="text/javascript" src="http://api.map.baidu.com/library/TextIconOverlay/1.2/src/TextIconOverlay_min.js"></script>
//<script type="text/javascript" src="http://api.map.baidu.com/library/MarkerClusterer/1.2/src/MarkerClusterer_min.js"></script>
//检索信息窗口下面2个文件
//<script type="text/javascript" src="http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.js"></script>
//	<link rel="stylesheet" href="http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.css" />
$(function() {
	! function() {
		var map;
		initMap();
		(function ($) {
		    $.getUrlParam = function (name) {
		        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		        var r = window.location.search.substr(1).match(reg);
		        if (r != null) return unescape(r[2]); return null;
		    }
		})(jQuery);
		var menuId = $.getUrlParam('menuId');
		
		
		console.log(menuId,"3333333333333333333333333333333333333333333");
		var analogCityName1 = 0, analogCityName2 = 0,jibie=13;
		if (menuId == 95||menuId==null||menuId==undefined) {
		    analogCityName1 = 113.666024;
		    analogCityName2 = 34.753162;
		    jibie = 12;
		    console.log("33333333333333333");
		    //113.666024,34.753162
		}
		if(menuId==99){
		    analogCityName1 = 114.906536;
		    analogCityName2 = 35.977682;
		    console.log("33333333333333333");
		    //114.906536,35.977682
		}
		if (menuId == 102) {
		    analogCityName1 = 113.058429;
		    analogCityName2 = 34.458942;
		    console.log("22222222222222");
		    //113.058429,34.458942
		}
		if (menuId == 105) {
		    analogCityName1 = 113.385599;
		    analogCityName2 = 34.794193;
		    //113.385599,34.794193
		}
		function initMap() {
			var bmap_data = [
//			{
//				lng: 113.6071,
//				lat: 34.786321,
//				address: "地址：北京市东城区正义路甲5号",
//				label: "墒情",
//				title: "资讯4"
//			}, {
//				lng: 113.64964385,
//				lat: 34.75661006,
//				address: "地址：北京市东城区正义路甲5号",
//				label: "气象",
//				title: "资讯5"
//			}, {
//				lng: 113.663729,
//				lat: 34.742255,
//				address: "地址：北京市东城区正义路甲5号",
//				label: "墒情",
//				title: "资讯6"
//			}
			]; //113.663729,34.742255
			var bmap_data2 = [{
				lng: 114.916557,
				lat: 35.953363,
				address: "地址：北京市东城区王府井大街88号乐天银泰百货八层",
				label: "气象",
				title: "资讯100"
			}]; //113.6071,34.786321
			//增加测试数据start
			addData();
			function addData(){
				var testData=["114.91401,35.954429","114.916166,35.95444","114.918798,35.953468","114.685292,35.930621","114.897301,35.943355","114.897216,35.942837","114.898155,35.944235","114.897602,35.944531","114.899471,35.942668","114.74445,36.008315","114.790587,35.973856","114.85354,35.96813","114.877687,35.968598","114.875531,35.955393","114.772477,35.95177","114.703056,35.934822","114.849947,35.924418","114.849947,35.924418","114.671148,35.985305","113.389192,34.793956","113.303674,34.812095","113.303386,34.808539","113.320346,34.816007","113.300655,34.802848","113.305398,34.790991","113.317759,34.806049","113.305111,34.777709","113.301949,34.767509","113.30468,34.757782","113.341762,34.821579","113.341474,34.814229","113.299506,34.777116","113.337881,34.758138","113.34478,34.74236","113.367346,34.813518","113.28772,34.767035","113.366339,34.762409","113.395229,34.793422","113.393792,34.775159","113.393361,34.757486","113.413195,34.812866","113.4257,34.75974","113.413626,34.77765","113.424693,34.760096","113.458182,34.769704","113.470112,34.822349","113.474999,34.821401","113.471693,34.785477","113.476436,34.777887","112.719804,34.637455","112.714054,34.586592","113.039169,34.477275","113.04269,34.474775","113.041181,34.467751","113.044631,34.464359","113.041109,34.460906","113.041253,34.458346","113.045062,34.44769","113.05692,34.436079","113.066909,34.45537","113.062884,34.463466","113.089905,34.437985","113.09278,34.454834","113.090696,34.441081","113.100901,34.446797","113.11398,34.446678","113.11398,34.446678","113.126125,34.438818","113.122173,34.477215"];
				testData=$.unique(testData);
				var j=7,onePoint=1,labelArr=1;
				for(var i=0;i<testData.length;i++){
					var testObj={
					lng:"",lat:"",label:"",address:"",yl:"",kqwd:"",kqsd:"",dqy:"",fs:"",fx:"",tsd:"",twd:"",title:""
				};
				onePoint=testData[i].split(",");
					testObj['lng']=Number(onePoint[0]);
					testObj['lat']=Number(onePoint[1]);
				labelArr=["气象","墒情"];
						testObj['label']=labelArr[~~(Math.random()*labelArr.length)];
						
					testObj['title']="项目"+j;
						if(testObj['label']=="气象"){
					testObj['address']="地址：北京市东城区王府井大街88号乐天银泰百货八层"+j;
					testObj['yl']="10 mm";//+j;
					testObj['kqwd']="20 ℃";//+j;
					testObj['kqsd']="2 %";//+j;
					testObj['dqy']="10 P";//+j;
					testObj['fs']="10 km/h";//+j;
					testObj['fx']="东南";//+j;
						}
						if(testObj['label']=="墒情"){
					testObj['address']="地址：北京市东城区王府井大街88号乐天银泰百货八层"+j;
					testObj['tsd']="20 %";//+j;
					testObj['twd']="50 ℃";//+j;
						}
					
					bmap_data.push(testObj);
					//console.log(testObj);
					j++;
					
				}
			}
			//console.log(bmap_data);
			//增加测试数据end
			var timer="";
			var colorArr = ["blue", "red", "green", "pink", "green"];
			var colorArr2 = ["white","white","white","#00bcd4", "#009688", "#03a9f4", "#ffc107", "#e51c23","#990066"];
			var myIcon = new BMap.Icon("../js/bj-bmap/track_map_icon.png", new BMap.Size(30, 47));
			//			 var myIcon2 = new BMap.Icon("img/markers.png", new BMap.Size(25, 25), {
			//      offset: new BMap.Size(0, 0), // 指定定位位置
			//      imageOffset: new BMap.Size(0, -275) // 设置图片偏移
			//  });
			map = new BMap.Map("map",{enableMapClick:false});
			map.centerAndZoom(new BMap.Point(113.666024, 34.753162), 12); //郑州市113.666024,34.753162
			map.setMapStyle({style:'light'});
			////--#region---start
			// 复杂的自定义覆盖物
			function ComplexCustomOverlay(point, text, mouseoverText, obj, colorObj) {
				this._point = point;
				this._text = text;
				this._overText = mouseoverText;
				this._obj = obj;
				this._colorObj = colorObj;
			}
			ComplexCustomOverlay.prototype = new BMap.Overlay();
			ComplexCustomOverlay.prototype.initialize = function(map) {
				this._map = map;
				colorObj = this._colorObj;
				var div = this._div = document.createElement("div");
				div.style.position = "absolute";
				div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
				div.style.backgroundColor = colorObj.txtcolor; //"white";// "#EE5D5B";
				div.style.border = "none";
				div.style.color ="black";// "white"; //// "white";
				div.style.height = "24px";
				div.style.padding = "auto";
				div.style.lineHeight = "24px";
				div.style.whiteSpace = "nowrap";
				div.style.MozUserSelect = "none";
				div.style.fontSize = "12px";
				div.style.letterSpacing="2px";
				div.style.paddingLeft="4px";
				div.style.paddingRight="4px";
				//div.style.fontWeight = "bold";
				div.style.textAlign = "center";
				div.style.margin = "0 auto";
				div.style.fontFamily="微软雅黑";
				var span = this._span = document.createElement("span");
				div.appendChild(span);
				span.appendChild(document.createTextNode(this._text));
				var that = this;

				var arrow = this._arrow = document.createElement("div");
				//arrow.style.background = "url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
				arrow.style.position = "absolute";
				arrow.style.width = "10px";
				arrow.style.height = "10px";
				arrow.style.top = "40px";
				arrow.style.left = "20px";
				arrow.style.overflow = "hidden";
				div.appendChild(arrow);
var overBeforeColor;
				div.onmouseover = function() {
					overBeforeColor=this.style.backgroundColor;
					div.style.color ="white";
					this.style.backgroundColor = "#cc00cc"; // "#6BADCA";
					this.style.borderColor = "none"; // "#0000ff";
					this.getElementsByTagName("span")[0].innerHTML = that._overText;
					arrow.style.backgroundPosition = "0px -20px";
				}

				div.onmouseout = function() {
					this.style.backgroundColor =overBeforeColor;// colorObj.txtcolor; //"white"; "#EE5D5B";
					div.style.color ="black";
					this.style.borderColor = "none"; //  "#BC3B3A";
					this.getElementsByTagName("span")[0].innerHTML = that._text;
					arrow.style.backgroundPosition = "0px 0px";
				}
				map.getPanes().labelPane.appendChild(div);

				return div;
			}
			ComplexCustomOverlay.prototype.draw = function() {
					var map = this._map;
					var pixel = map.pointToOverlayPixel(this._point);
					this._div.style.left = pixel.x - parseInt(this._arrow.style.left) +38 + "px";
					this._div.style.top = pixel.y - 20 + "px";
				}
				////#region---end
				////---#region---start
				//				// 定义一个控件类,即function
				//			function SearchDataSetControl() {
				//				// 默认停靠位置和偏移量
				//				this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
				//				this.defaultOffset = new BMap.Size(10, 10);
				//			}
				//
				//			// 通过JavaScript的prototype属性继承于BMap.Control
				//			SearchDataSetControl.prototype = new BMap.Control();
				//
				//			// 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
				//			// 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
				//			SearchDataSetControl.prototype.initialize = function(map) {
				//					// 创建一个DOM元素
				//					var div2 = document.createElement("div");
				//					// 添加文字说明
				//					var inpu = div2.appendChild(document.createElement("input"));
				//					// 设置样式
				//					inpu.setAttribute("type", "text");
				//					div2.style.cursor = "pointer";
				//					div2.id = "search-ctrl";
				//					div2.style.border = "none";
				//					div2.style.backgroundColor = "white";
				//					// 添加DOM元素到地图中
				//					map.getContainer().appendChild(div2);
				//					// 将DOM元素返回
				//					return div2;
				//				}
				////#region---end
			setMapEvent(); //设置地图事件
			addMapControl(); //添加地图控件
			//getCurrentCity(); //定位当前所在城市
			//getCurrentPosition(); //定位当前所在位置
			addMarker(bmap_data);
			//addMarker(bmap_data2);
			addCustomMarker(bmap_data);
			searchDataSet();
			setTimeout(function () {
			    analogCurCity(analogCityName1, analogCityName2);
			}, 1000);
			
			var curpoint;
			function analogCurCity(a, b) {
			    console.log(a,b,"22222222222222244444444444444444");
			    curpoint = new BMap.Point(a, b);
			    console.log(curpoint,"44444444444444");
			    map.centerAndZoom(curpoint,13); //郑州市113.666024,34.753162
			    //setTimeout(function () {
			    //    map.centerAndZoom(new BMap.Point(a, b), 12); //郑州市113.666024,34.753162
			    //    map.panTo(r.point);
			    //},2000)
			  
			}
			function setMapEvent() {
				map.enableScrollWheelZoom();
				map.enableKeyboard();
				map.enableDragging();
				map.enableDoubleClickZoom();
				map.enableAutoResize();
				//map.enableInertialDragging();
			} //setMapEvent
			function addMapControl() {
//								//向地图中添加缩放控件
//					var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
//					map.addControl(ctrl_nav);
				var scaleControl = new BMap.ScaleControl({
					anchor: BMAP_ANCHOR_BOTTOM_LEFT
				});
				scaleControl.setUnit(BMAP_UNIT_METRIC);
				map.addControl(scaleControl);
				var navControl = new BMap.NavigationControl({
					anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
					type: 3
				});
				map.addControl(navControl);
				map.addControl(new BMap.MapTypeControl({
					anchor: BMAP_ANCHOR_TOP_LEFT
				}));
				//				var size = new BMap.Size(10, 20);
				//				map.addControl(new BMap.CityListControl({
				//					anchor: BMAP_ANCHOR_TOP_LEFT,
				//					offset: size,
				//					// onChangeBefore: function(){
				//					//    alert('before');
				//					// },
				//					// onChangeAfter:function(){
				//					//   alert('after');
				//					// }
				//				}));
				map.addControl(new BMap.GeolocationControl());
			} //addMapControl
			function addMarker(aArr) {
				//console.log(aArr,"addMarker");
				var point, marker;
				var pointArr = [],
					markerArr = [];
				for(var i = 0; i < aArr.length; i++) {
					point = new BMap.Point(aArr[i].lng, aArr[i].lat);
					pointArr.push(point);
					if(i == 3) {
						marker = new BMap.Marker(point, {
							icon: myIcon
						});
					} else if(i == 2) {
						marker = new BMap.Marker(point, {
							icon: myIcon
						});
					} else if(i == 1) {
						marker = new BMap.Marker(point, {
							icon: myIcon
						});
					} else {
						marker = new BMap.Marker(point, {
							icon: myIcon
						});
					}
					//marker = new BMap.Marker(point);
					marker.setAnimation(BMAP_ANIMATION_BOUNCE);
					markerMove(marker);
					if(aArr[i].label=="气象"){
						addSearchInfoWindow(marker, aArr[i], i); //稳定版本
					}
					if(aArr[i].label=="墒情"){
						addSearchInfoWindow2(marker, aArr[i], i); //稳定版本
					}
					//addInfoWindow(marker, aArr[i], i);
					//map.addOverlay(marker);
					markerArr.push(marker);
				}
				var markerClusterer = new BMapLib.MarkerClusterer(map, {
					markers: markerArr
				}); //如果不用聚合，就把定时器关掉
					
				map.setViewport(pointArr);
				
			}

			function addCustomMarker(aArr) {
				var labelArr=["气象","墒情"];var labelbgColor;
				var point, marker, myCompOverlay;
				var pointArr = [],
					markerArr = [];
				for(var i = 0; i < aArr.length; i++) {
					point = new BMap.Point(aArr[i].lng, aArr[i].lat);
					pointArr.push(point);
					var txt = aArr[i].label,
						mouseoverTxt = aArr[i].label;
						if(txt=="气象"){
							labelbgColor=colorArr2[1];
						}
						else if(txt=="墒情"){
							labelbgColor=colorArr2[2];
						}
						else{
							labelbgColor=colorArr2[0];
						}
					myCompOverlay = new ComplexCustomOverlay(point, txt, mouseoverTxt, aArr[i], {
						txtcolor: labelbgColor
					});
					//					myCompOverlay = new ComplexCustomOverlay(point, txt, mouseoverTxt, aArr[i],{txtcolor:colorArr2[~~(Math.random()*colorArr2.length)]});
					map.addOverlay(myCompOverlay);
				}
				map.setViewport(pointArr);
			}

			function addSearchInfoWindow(m, aObj, i) {
				var sTitle=['					<h4 style=\'margin:0 0 0 0;padding:0.2em 0\'>',
					aObj.title,
					' </h4> '].join("");
				var content = ['<div id="infowindow" data-id="infowindow', i, '">',
					
					'					<div style="">',
					'						<img style=\'float:right;margin:2px;\' id=\'imgDemo\' src=\'http://app.baidu.com/map/images/tiananmen.jpg\' width=\'90\' height=\'90\' title=\'天安门\'/>',
					'					</div>',
					'					',
				
					
					'					<p><span class="t">类别:</span><span>',aObj['label'],'</span></p>',
					'					<p><span class="t">雨量:</span><span>',aObj['yl'],'</span></p>',
					'					<p><span class="t">空气温度:</span><span>',aObj['kqwd'],'</span></p>',
					'					<p><span class="t">空气湿度:</span><span>',aObj['kqsd'],'</span></p>',
					'					<p><span class="t">大气压:</span><span>',aObj['dqy'],'</span></p>',
					'					<p><span class="t">风速:</span><span>',aObj['fs'],'</span></p>',
					'					<p><span class="t">风向:</span><span>',aObj['fx'],'</span></p>',
					
					
					'					<p><span class="t">地址:</span><span>',aObj['address'],'</span></p>',
						'					<p style=\'margin:0;line-height:1.5;font-size:13px;\'><span class="t">简介:</span>天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门...</p> ',
					'					</div>'
				].join("");

				//创建检索信息窗口对象
				var searchInfoWindow = null;
				searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
					title:sTitle, //标题
					width: 290, //宽度
					height: "auto", //高度
					panel: "panel", //检索结果面板
					enableAutoPan: true, //自动平移
					enableMessage: false
						//			,
						//			searchTypes   :[
						//				BMAPLIB_TAB_SEARCH,   //周边检索
						//				BMAPLIB_TAB_TO_HERE,  //到这里去
						//				BMAPLIB_TAB_FROM_HERE //从这里出发
						//			]
				});
				m.addEventListener("click", function(e) {
				    searchInfoWindow.open(m);
				    if (timer != "")
				        clearInterval(timer);
				    changeInfoW();
				});
				m.addEventListener("mouseover", function(e) {
					searchInfoWindow.open(m);
					if(timer!="")
					clearInterval(timer);
					changeInfoW();
				});
			}
				function addSearchInfoWindow2(m, aObj, i) {
				var sTitle=['					<h4 style=\'margin:0 0 0 0;padding:0.2em 0\'>',
					aObj.title,
					' </h4> '].join("");
				var content = ['<div id="infowindow" data-id="infowindow', i, '">',
					
					'					<div style="">',
					'						<img style=\'float:right;margin:2px;\' id=\'imgDemo\' src=\'http://app.baidu.com/map/images/tiananmen.jpg\' width=\'90\' height=\'90\' title=\'天安门\'/>',
					'					</div>',
					'					',
					'					<p><span class="t">类别:</span><span>',aObj['label'],'</span></p>',
						'					<p><span class="t">土壤温度:</span><span>',aObj['twd'],'</span></p>',
					'					<p><span class="t">土壤湿度:</span><span>',aObj['tsd'],'</span></p>',
					
					'					<p><span class="t">地址:</span><span>',aObj['address'],'</span></p>',
						'					<p style=\'margin:0;line-height:1.5;font-size:13px;\'><span class="t">简介:</span>天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门...</p> ',
					'					</div>'
				].join("");

				//创建检索信息窗口对象
				var searchInfoWindow = null;
				searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
					title:sTitle, //标题
					width: 290, //宽度
					height: "auto", //高度
					panel: "panel", //检索结果面板
					enableAutoPan: true, //自动平移
					enableMessage: false
						//			,
						//			searchTypes   :[
						//				BMAPLIB_TAB_SEARCH,   //周边检索
						//				BMAPLIB_TAB_TO_HERE,  //到这里去
						//				BMAPLIB_TAB_FROM_HERE //从这里出发
						//			]
				});
				m.addEventListener("click", function(e) {
					searchInfoWindow.open(m);
					
				});
				m.addEventListener("mouseover", function(e) {
					searchInfoWindow.open(m);
					if(timer!="")
					clearInterval(timer);
					changeInfoW();
				});
				
			}
function changeInfoW(){
					timer=setInterval(function(){
						var danwei=["mm","℃","%","P","km/h","东南"];
				var danwei2=["℃","%"];
						var arr= $("#infowindow p");
						//console.log("cccccccccccccccccc");
						if(arr.length==0){
							clearInterval(timer);
							return false;
						}
						if(arr.length==5){
							for(var i=1;i<3;i++){
							console.log(arr[i].childNodes[1].innerHTML);
							arr[i].childNodes[1].innerHTML=(Math.random()*50).toFixed(1)+" "+danwei2[i-1];
							}
						}
						if(arr.length==9){
							for(var j=1;j<7;j++){
							console.log(arr[j].childNodes[1].innerHTML);
							if(j==6){
								arr[j].childNodes[1].innerHTML=danwei[j-1];
							}else{
								arr[j].childNodes[1].innerHTML=(Math.random()*50).toFixed(1)+" "+danwei[j-1];
							}
							
							}
						}
					},700)
				}//用不到了
			function addInfoWindow(m, aObj, i) {
				var sContent = ['<div data-id="infowindow', i, '">',
					'					<h4 style=\'margin:0 0 0 0;padding:0.2em 0\'>',
					aObj.label,
					' </h4> ',
					'					<div style="">',
					'						<img style=\'float:right;margin:2px;\' id=\'imgDemo\' src=\'http://app.baidu.com/map/images/tiananmen.jpg\' width=\'90\' height=\'90\' title=\'天安门\'/>',
					'					</div>',
					'					',
					'					<p style=\'margin:0;line-height:1.5;font-size:13px;text-indent:2em\'>天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门...</p> ',
					'					<p><span class="t">气温:</span><span>234.55</span></p>',
					'					<p><span>气温:</span><span>234.55</span></p>',
				
					'					<p><span>气温:</span><span>234.55</span></p>',
					'					<p><span>气温:</span><span>234.55</span></p>',
					'					<p><span>气温:</span><span>',testObj['label'],'</span></p>',
					'					<p><span>气温:</span><span>',testObj['address'],'</span></p>',
					'					<p><span>雨量:</span><span>',testObj['yl'],'</span></p>',
					'					<p><span>空气温度:</span><span>',testObj['kqwd'],'</span></p>',
					'					<p><span>空气湿度:</span><span>',testObj['kqsd'],'</span></p>',
					'					<p><span>气温:</span><span>',testObj['dqy'],'</span></p>',
					'					<p><span>气温:</span><span>',testObj['fs'],'</span></p>',
					'					<p><span>气温:</span><span>',testObj['fx'],'</span></p>',
						'					<p><span>气温:</span><span>',testObj['tsd'],'</span></p>',
					'					<p><span>气温:</span><span>',testObj['twd'],'</span></p>',
					
					'					</div>'
				].join("");
				var infoWindow = new BMap.InfoWindow(sContent, {
					width: 260,
					enableCloseOnClick: false
				});

				m.addEventListener("mouseover", function() {
					m.openInfoWindow(infoWindow);
					document.getElementById('imgDemo').onload = function() {
						infoWindow.redraw();
					}
				});
				m.addEventListener("click", function() {
					m.openInfoWindow(infoWindow);
					document.getElementById('imgDemo').onload = function() {
						infoWindow.redraw();
					}
				});

			}

			function clearOverlays() {
				if(map.getOverlays().length > 0) {
					map.clearOverlays();
				}
			}

			function markerMove(m) {
				m.enableDragging();
				m.addEventListener("dragend", function(e) {
					console.log(e.point.lng + "," + e.point.lat);
				});
				//	m.addEventListener("mouseover", function(e) {
				//m.setAnimation(null); 
				//});
				var timer = setTimeout(function() {
					m.setAnimation(null);
				}, 1500);
			} //markerMove

			function getCurrentCity() {
				function myFun(result) {
					var cityName = result.name;
					map.setCenter(cityName);
					console.log("当前定位城市:" + cityName);
					if(cityName != "" && cityName != null && cityName != undefined)
						map.centerAndZoom(cityName, 12);
				}
				var myCity = new BMap.LocalCity();
				myCity.get(myFun);
			} //getCurrentCity
			function getCurrentPosition() {
				var geolocation = new BMap.Geolocation();
				geolocation.getCurrentPosition(function(r) {
					if(this.getStatus() == BMAP_STATUS_SUCCESS) {
						var mk = new BMap.Marker(r.point);
						map.addOverlay(mk);
						map.panTo(r.point);
						console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
					} else {
						alert('failed' + this.getStatus());
					}
				}, {
					enableHighAccuracy: true
				})
			} //getCurrentPosition
			function searchDataSet() {
				//				// 创建控件
				//				var mySearchDataSetCtrl = new SearchDataSetControl();
				//				// 添加到地图当中
				//				map.addControl(mySearchDataSetCtrl);
				var searchdataset = document.getElementById("search-ctrl");
				searchdataset.onkeyup = function(e) {
					e = e || window.event;
					console.log(e.keyCode, "22222222222");
					if(e.keyCode == 13) {
						var searchInput = searchdataset.value;
						if(searchInput.trim() == "") {
							return false;
						}
						findKeywords(searchInput.trim(), bmap_data);
					} else if(e.keyCode == 191) {
						var searchInput1 = searchdataset.value;
						if(searchInput1.trim() == "") {
							return false;
						}
						searchInput1 = searchInput1.substring(0, searchInput1.length - 1);
						findKeywords(searchInput1.trim(), bmap_data);
					}
				}

			}

			function findKeywords(str, arr) {
				var resultArr = [],
					pointArr = [],
					point;
				for(var i = 0; i < arr.length; i++) {
					if(arr[i].title.indexOf(str) >= 0) {
						resultArr.push(arr[i]);
						point = new BMap.Point(arr[i].lng, arr[i].lat);
						pointArr.push(point);
					}
				}
				if(pointArr.length > 0) {
					var getCurrentZoom = map.getZoom();
					if(getCurrentZoom <= 12) {
						getCurrentZoom = 14;
					}
					console.log(getCurrentZoom);
					map.centerAndZoom(pointArr[0], getCurrentZoom);
				}

			}
			
		} //initMap
		
		
	}(); //!
}); //$