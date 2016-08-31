//在html页面引入下面这个文件
// <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=92qyvplqPQ7EPwz8ALCwVASSGGkDuXRG"></script>
//点聚合要引入下面2个文件
//<script type="text/javascript" src="http://api.map.baidu.com/library/TextIconOverlay/1.2/src/TextIconOverlay_min.js"></script>
//<script type="text/javascript" src="http://api.map.baidu.com/library/MarkerClusterer/1.2/src/MarkerClusterer_min.js"></script>
//检索信息窗口下面2个文件
//<script type="text/javascript" src="http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.js"></script>
//	<link rel="stylesheet" href="http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.css" />
!function () {
    $(document).ready(function () {
        function G(id) {
            return document.getElementById(id);
        }
        var map, bmapData;
        var dataArr = [];
        var timer = "";
        var colorArr = ["blue", "red", "green", "pink", "green"];
        var colorArr2 = ["white", "white", "white", "#00bcd4", "#009688", "#03a9f4", "#ffc107", "#e51c23", "#990066"];
        var myIcon = new BMap.Icon("../js/bj-bmap/track_map_icon.png", new BMap.Size(30, 47));
        var lngFirst, latFirst, zoomFirst, boundaryFirst;
        zoomFirst = 12;
        var bs, bssw, bsne;
        map = new BMap.Map("map", { enableMapClick: false, enableHighResolution: true });
        map.setMapStyle({ style: 'light' });
        $.get('../api/RealTime2', function (result) {
            dataArr = result;
            initData();
            initBMap();
        });
        function initData() {
            function dataValuePlus(arr, obj) {
                //obj和obj[j]是要附加的信息；
                for (var i = 0; i < arr.length; i++) {
                    for (var j in arr[i]) {
                        if (typeof (arr[i][j]) == "string") {
                            if (obj[j]) {
                                arr[i][j] = arr[i][j] + obj[j];
                            }
                        }
                    }
                }
            }//dataValuePlus
            bmapData = [{
                lng: 112.805428,
                lat: 34.402522,
                label: "墒情",
                title: "裴塘",
                imgsrc: "../img/qiqiang0002.jpg",
                "土湿1": dataArr[0],
                "土湿2": dataArr[1],
                "土湿3": dataArr[2],
                "土湿4": dataArr[3],
                "土湿5": dataArr[4],
                "土湿6": dataArr[5],
                "土温1": dataArr[6],
            }, {
                lng: 112.760611,
                lat: 34.453148,
                label: "墒情",
                title: "李家窑",
                imgsrc: "../img/qixiang.jpg",
                "土湿1": dataArr[7],
                "土湿2": dataArr[8],
                "土湿3": dataArr[9],
                "土温1": dataArr[10],
            }, {
                lng: 112.783605,
                lat: 34.441308,
                label: "墒情",
                title: "蒋庄",
                imgsrc: "../img/qiqiang0002.jpg",
                "土湿1": dataArr[11],
                "土湿2": dataArr[12],
                "土湿3": dataArr[13],
                "土温1": dataArr[14],
            }, {
                lng: 112.755328,
                lat: 34.402691,
                label: "墒情",
                title: "袁寨",
                imgsrc: "../img/qixiang.jpg",
                "土湿1": dataArr[15],
                "土湿3": dataArr[16],
            }, {
                lng: 112.789066,
                lat: 34.446008,
                label: "墒情",
                title: "和庄",
                imgsrc: "../img/qiqiang0002.jpg",
                "土湿1": dataArr[17],
                "土湿2": dataArr[18],
            }, {
                lng: 112.773069,
                lat: 34.406811,
                label: "墒情",
                title: "庄王村",
                imgsrc: "../img/qixiang.jpg",
                "土湿1": dataArr[19],
                "土湿2": dataArr[20],
                "土湿3": dataArr[21],
            }, {
                lng: 112.786382,
                lat: 34.417926,
                label: "墒情",
                title: "夏庄村",
                imgsrc: "../img/qixiang.jpg",
                "土湿1": dataArr[22],
                "土湿2": dataArr[23],
                "土湿3": dataArr[24],
            }, {
                lng: 112.762642,
                lat: 34.42903,
                label: "墒情",
                title: "颍北村",
                imgsrc: "../img/qixiang.jpg",
                "(1#棚)土湿1": dataArr[25],
                "(2#棚)土湿2": dataArr[26],
                "(3#棚)土湿3": dataArr[27],
                "(4#棚)土湿4": dataArr[28],
                "(5#棚)土湿5": dataArr[29],
                "(6#棚)土湿1": dataArr[30],
                "(7#棚)土湿2": dataArr[31],
                "(8#棚)土湿3": dataArr[32],
                "(9#棚)土湿4": dataArr[33],
                "(10#棚)土湿5": dataArr[34],
            }, {
                lng: 112.806428,//112.806428
                lat: 34.402522,//34.402522
                label: "水源测控",
                title: "裴塘-水源测控系统",
                imgsrc: "../img/qiqiang0002.jpg",
                "压力": dataArr[35],
                "今天累积流量": dataArr[36],
                "液位": dataArr[37],
                "本月累积流量": dataArr[38],
                "瞬时流量": dataArr[39],
                "瞬时流速": dataArr[40],
                "净累积流量": dataArr[41],
            }, {
                lng: 112.76502,
                lat: 34.419111,
                label: "气象",
                title: "信息化中心-气象站",
                imgsrc: "../img/qiqiang0002.jpg",
                "页湿": dataArr[42],
                "光照度": dataArr[43],
                "风速": dataArr[44],
                "风向": dataArr[45],
                "空温": dataArr[46],
                "空湿": dataArr[47],
                "CO2": dataArr[48],
                "雨量": dataArr[49],
            }];
            var unitObj = {
                "土湿1": "&nbsp;%RH",
                "土湿2": "&nbsp;%RH",
                "土湿3": "&nbsp;%RH",
                "土湿4": "&nbsp;%RH",
                "土湿5": "&nbsp;%RH",
                "土湿6": "&nbsp;%RH",
                "土湿7": "&nbsp;%RH",
                "土温1": "&nbsp;°C",
                "(1#棚)土湿1": "&nbsp;%RH",
                "(2#棚)土湿2": "&nbsp;%RH",
                "(3#棚)土湿3": "&nbsp;%RH",
                "(4#棚)土湿4": "&nbsp;%RH",
                "(5#棚)土湿5": "&nbsp;%RH",
                "(6#棚)土湿1": "&nbsp;%RH",
                "(7#棚)土湿2": "&nbsp;%RH",
                "(8#棚)土湿3": "&nbsp;%RH",
                "(9#棚)土湿4": "&nbsp;%RH",
                "(10#棚)土湿5": "&nbsp;%RH",
                "压力": "&nbsp;MPa",
                "今天累积流量":"&nbsp;",
                "液位": "&nbsp;",
                "本月累积流量": "&nbsp;",
                "瞬时流量": "&nbsp;",
                "瞬时流速": "&nbsp;",
                "净累积流量": "&nbsp;",
                "页湿": "&nbsp;",
                "光照度": "&nbsp;Lux",
                "风速": "&nbsp;m/s",
                "风向": "&nbsp;度",
                "空温": "&nbsp;°C",
                "空湿": "&nbsp;%RH",
                "CO2": "&nbsp;ppm",
                "雨量": "&nbsp;mm",

            };
            dataValuePlus(bmapData, unitObj);
        }
        function initBMap() {
            firstInit();
            setMapEvent();
            addMapControl();

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
            ComplexCustomOverlay.prototype.initialize = function (map) {
                this._map = map;
                colorObj = this._colorObj;
                var div = this._div = document.createElement("div");
                div.style.position = "absolute";
                div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
                div.style.backgroundColor = colorObj.txtcolor; //"white";// "#EE5D5B";
                div.style.border = "none";
                div.style.color = "black";// "white"; //// "white";
                div.style.height = "24px";
                div.style.padding = "auto";
                div.style.lineHeight = "24px";
                div.style.whiteSpace = "nowrap";
                div.style.MozUserSelect = "none";
                div.style.fontSize = "12px";
                div.style.letterSpacing = "2px";
                div.style.paddingLeft = "4px";
                div.style.paddingRight = "4px";
                //div.style.fontWeight = "bold";
                div.style.textAlign = "center";
                div.style.margin = "0 auto";
                div.style.fontFamily = "微软雅黑";
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
                div.onmouseover = function () {
                    overBeforeColor = this.style.backgroundColor;
                    div.style.color = "white";
                    this.style.backgroundColor = "#cc00cc"; // "#6BADCA";
                    this.style.borderColor = "none"; // "#0000ff";
                    this.getElementsByTagName("span")[0].innerHTML = that._overText;
                    arrow.style.backgroundPosition = "0px -20px";
                }

                div.onmouseout = function () {
                    this.style.backgroundColor = overBeforeColor;// colorObj.txtcolor; //"white"; "#EE5D5B";
                    div.style.color = "black";
                    this.style.borderColor = "none"; //  "#BC3B3A";
                    this.getElementsByTagName("span")[0].innerHTML = that._text;
                    arrow.style.backgroundPosition = "0px 0px";
                }
                map.getPanes().labelPane.appendChild(div);

                return div;
            }
            ComplexCustomOverlay.prototype.draw = function () {
                var map = this._map;
                var pixel = map.pointToOverlayPixel(this._point);
                this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + 38 + "px";
                this._div.style.top = pixel.y - 20 + "px";
            }
            ////#region---end


            addCustomMarker(bmapData);
            function addCustomMarker(aArr) {
                var labelbgColor;
                var point, marker, myCompOverlay;
                var pointArr = [],
                    markerArr = [];
                for (var i = 0; i < aArr.length; i++) {
                    point = new BMap.Point(aArr[i].lng, aArr[i].lat);
                    pointArr.push(point);
                    var label = aArr[i].label,
                        mouseoverTxt = aArr[i].label;
                    if (label == "气象") {
                        labelbgColor = colorArr2[1];
                    }
                    else if (label == "墒情") {
                        labelbgColor = colorArr2[2];
                    }
                    else {
                        labelbgColor = colorArr2[0];
                    }
                    myCompOverlay = new ComplexCustomOverlay(point, label, mouseoverTxt, aArr[i],
    {
        txtcolor: labelbgColor
    });
                    //					myCompOverlay = new 
                    ComplexCustomOverlay(point, label, mouseoverTxt, aArr[i], { txtcolor: colorArr2[~~(Math.random() * colorArr2.length)] });
                    map.addOverlay(myCompOverlay);
                }
                //map.setViewport(pointArr);
            }//addCustomMarker
            addMarker(bmapData);
        }//initBMap

        function firstInit() {
            // var lngFirst, latFirst, zoomFirst, boundaryFirst;
            (function ($) {
                $.getUrlParam = function (name) {
                    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                    var r = window.location.search.substr(1).match(reg);
                    if (r != null) return unescape(r[2]); return null;
                }
            })(jQuery);
            var menuId = $.getUrlParam('menuId');
            if (menuId == 95 || menuId == null || menuId == undefined) {
                lngFirst = 113.666024;
                latFirst = 34.753162;
                boundaryFirst = "河南省";
                //113.666024,34.753162
            }
            if (menuId == 99) {
                lngFirst = 114.906536;
                latFirst = 35.977682;
                boundaryFirst = "内黄县";
                //114.906536,35.977682
            }
            if (menuId == 102) {
                lngFirst = 113.058429;
                latFirst = 34.458942;
                boundaryFirst = "登封市";
                //113.058429,34.458942
            }
            if (menuId == 105) {
                lngFirst = 113.385599;
                latFirst = 34.794193;
                boundaryFirst = "荥阳市";
                //113.385599,34.794193
            }

            getBoundary(boundaryFirst);
            var currentZoom = map.getZoom();
            map.centerAndZoom(new BMap.Point(lngFirst, latFirst), currentZoom);
        }
        function getBoundary(aStr) {
            var boundary = new BMap.Boundary();
            var name = aStr;
            var color = "blue";// colorArr[~~(Math.random() * colorArr.length)];
            boundary.get(name, function (rs) {
                var count = rs.boundaries.length;
                for (var i = 0; i < count; i++) {
                    var ply = new BMap.Polygon(rs.boundaries[i], {
                        strokeWeight: 2,
                        setFillColor: null,
                        strokeColor: color,
                        fillOpacity: 0.1
                    });
                    if (i == 0) {
                        var plycenter = ply;
                    }
                    map.addOverlay(plycenter);
                    map.setViewport(plycenter.getPath());
                    var pCenter = map.getBounds().getCenter();

                }
                var currentZoom = map.getZoom();
                map.setMinZoom(currentZoom);//use

                bs = map.getBounds();   //获取可视区域
                bssw = bs.getSouthWest();   //可视区域左下角
                bsne = bs.getNorthEast();   //可视区域右上角
                LimitBound();//use
            });

        } //getBoundary
        function LimitBound() {
            if (bs == 0 || bsne == 0 || bssw == 0) {
                return false;
            }
            //alert("当前地图可视范围是：" + bssw.lng + "," + bssw.lat + "到" + bsne.lng + "," +  bsne.lat);
            // map.enableScrollWheelZoom();
            var b = new BMap.Bounds(new BMap.Point(bssw.lng, bssw.lat), new BMap.Point(bsne.lng,
bsne.lat));
            try {
                BMapLib.AreaRestriction.setBounds(map, b);
            } catch (e) {
                alert(e);
            }

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
            //					var ctrl_nav = new BMap.NavigationControl
            ({ anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE });
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
            var point, marker;
            var pointArr = [], markerArr = [];
            for (var i = 0; i < aArr.length; i++) {
                point = new BMap.Point(aArr[i].lng, aArr[i].lat);
                pointArr.push(point);
                if (i == 3) {
                    marker = new BMap.Marker(point, {
                        icon: myIcon
                    });
                } else if (i == 2) {
                    marker = new BMap.Marker(point, {
                        icon: myIcon
                    });
                } else if (i == 1) {
                    marker = new BMap.Marker(point, {
                        icon: myIcon
                    });
                } else {
                    marker = new BMap.Marker(point, {
                        icon: myIcon
                    });
                }
                //marker = new BMap.Marker(point);
                // marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                // markerMove(marker);
                //if (aArr[i].label == "气象") {
                //    addSearchInfoWindow(marker, aArr[i], i); //稳定版本
                //}
                //if (aArr[i].label == "墒情") {
                    addSearchInfoWindow2(marker, aArr[i], i); //稳定版本
                //}
                //addInfoWindow(marker, aArr[i], i);
                //map.addOverlay(marker);
                markerArr.push(marker);
            }
            var markerClusterer = new BMapLib.MarkerClusterer(map, {
                markers: markerArr
            }); //如果不用聚合
            //map.setViewport(pointArr);
        }

        function clearOverlays() {
            if (map.getOverlays().length > 0) {
                map.clearOverlays();
            }
        }

        function markerMove(m) {
            m.enableDragging();
            m.addEventListener("dragend", function (e) {
                console.log(e.point.lng + "," + e.point.lat);
            });
            //	m.addEventListener("mouseover", function(e) {
            //m.setAnimation(null); 
            //});
            var timer = setTimeout(function () {
                m.setAnimation(null);
            }, 1500);
        } //markerMove
        function getCurrentCity() {
            function myFun(result) {
                var cityName = result.name;
                map.setCenter(cityName);
                console.log("当前定位城市:" + cityName);
                if (cityName != "" && cityName != null && cityName != undefined)
                    map.centerAndZoom(cityName, 12);
            }
            var myCity = new BMap.LocalCity();
            myCity.get(myFun);
        } //getCurrentCity
        function getCurrentPosition() {
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function (r) {
                if (this.getStatus() == BMAP_STATUS_SUCCESS) {
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
        function addSearchInfoWindow(m, aObj, i) {
            var sTitle = ['					<h4 style=\'margin:0 0 0 0;padding:0.2em 0\'>',
                aObj.title,
                ' </h4> '].join("");
            var contentArr = ['<div id="infowindow" data-id="infowindow', i, '">',

                '					<div style="">',
                '						<img style=\'float:right;margin:2px;\' id=\'imgDemo\' src=\''+aObj.imgsrc+'\' width=\'90\' height=\'90\' title=\'天安门\'/>',
                '					</div>',
                '					',
                '					</div>'
            ];

            for (var q in aObj) {
                //  '					<p><span class="t">类别:</span><span>', aObj['label'], '</span></p>',//每一个字段数据
                if (q != "lng" && q != "lat" && q != "label" && q != "title"&&q!="imgsrc") {
                    contentArr.splice(-1, 0, '<p><span class="t">' + q + ":" + '</span><span>' + aObj[q] + '</span></p>');
                }
            }
            var content = contentArr.join("");
            //创建检索信息窗口对象
            var searchInfoWindow = null;
            searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
                title: sTitle, //标题
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
            m.addEventListener("click", function (e) {
                searchInfoWindow.open(m);
                if (timer != "")
                    clearInterval(timer);
                changeInfoW();
            });
            m.addEventListener("mouseover", function (e) {
                searchInfoWindow.open(m);
                if (timer != "")
                    clearInterval(timer);
                //changeInfoW();
            });
        }
        function addSearchInfoWindow2(m, aObj, i) {
            var sTitle = ['					<h4 style=\'margin:0 0 0 0;padding:0.2em 0\'>',
               aObj.title,
               ' </h4> '].join("");
            var contentArr = ['<div id="infowindow' + i + '" data-id="infowindow', i, '">',

                '					<div style="">',
                '						<img style=\'float:right;margin:2px;\' id=\'imgDemo\' src=\''+aObj.imgsrc+'\' width=\'90\' height=\'90\' title=\'天安门\'/>',
                '					</div>',
                '					',
                '					</div>'
            ];

            for (var q in aObj) {
                //  '					<p><span class="t">类别:</span><span>', aObj['label'], '</span></p>',//每一个字段数据
                if (q != "lng" && q != "lat" && q != "label" && q != "title"&&q!="imgsrc") {
                    contentArr.splice(-1, 0, '<p><span class="t">' + q + '</span>' + ":&nbsp;" + '<span>' + aObj[q] + '</span></p>');
                }
            }
            var content = contentArr.join("");

            //创建检索信息窗口对象
            var searchInfoWindow = null;
            searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
                title: sTitle, //标题
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
            m.addEventListener("click", function (e) {
                searchInfoWindow.open(m);
            });
            m.addEventListener("mouseover", function (e) {
                searchInfoWindow.open(m);
                if (timer != "") {
                    clearInterval(timer);
                }
                refreshCurrentInfo(G("infowindow" + i), i);
            });

        }
        function refreshCurrentInfo(a, b) {
            reInfo();
            function reInfo() {
                $.get('../api/RealTime2', function (result) {
                    dataArr = result;
                    initData();
                });

                var spanArr = a.getElementsByClassName('t');
                for (var i = 0; i < spanArr.length; i++) {
                    spanArr[i].nextElementSibling.innerHTML = bmapData[b][spanArr[i].innerHTML];
                }
            }
            timer = setInterval(reInfo, 2000);
        }//refreshCurrentInfo
    });//ready
}();//!
