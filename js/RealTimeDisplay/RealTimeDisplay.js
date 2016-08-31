var chart1Data = 0;
var chart2Data = 0;
var chart3Data = 0;
var chart4Data = 0;
var chart5Data = 0;
var setValueTagKey = '';
var dataQueue = [];
var chart1;
var chart2;
var chart3;
var chart4;
var chart5;
var tagList = [];
var machineInfo = {};
var switchLock = 1;
$(document).ready(function () {
    initSwitch();
    function initSwitch() {
        firstInit();

    }//initSwitch
    function firstInit() {
        var switchFnArr = [];
        for (var i = 0; i < 8; i++) {
            $("#switchLight-" + (i + 1)).attr("data-bj-switch", "1");
            $("#switch-" + (i + 1)).text("关闭");
            switchFnArr[i] =( function (a) {
                $("#switch-" + (a + 1)).click(function () {
                    var switchStatus=$("#switchLight-" + (a + 1)).attr("data-bj-switch");
                    if (switchStatus == "1") {
                        $("#switchLight-" + (a + 1)).attr("data-bj-switch", "0");
                        $(this).text("打开");
                    }
                    if (switchStatus == "0") {
                        $("#switchLight-" + (a + 1)).attr("data-bj-switch", "1");
                        $(this).text("关闭");
                    }
                });
            })(i)
        }
    }
});//ready



//function refreshDisplay(data) {
//    if (data) {
//       // console.log(data[machineInfo.Tags[23].Key].Name);
//        //console.log('DeQueue|' +(new Date()).toLocaleString());
//        //var data = dataQueue.splice(0, 1)[0];

//        //console.log('splice|' +(new Date()).toLocaleString());
//        //Chart1
//        var series = chart1.series[0];
//        var x = (new Date(data[machineInfo.Tags[14].Key].TimeStamp)).getTime();
//        series.addPoint([x, Number(data[machineInfo.Tags[14].Key].Value)], true, true);
//        //console.log('Chart1|' + (new Date()).toLocaleString());
//        //Chart2
//        var point = chart2.series[0].points[0];
//        var newVal = Number(data[machineInfo.Tags[15].Key].Value);
//        point.update(newVal);
//        //console.log('Chart2|' +(new Date()).toLocaleString());
//        //Chart3
//        point = chart3.series[0].points[0];
//        newVal = Number(data[machineInfo.Tags[16].Key].Value);
//        point.update(newVal);
//        //console.log('Chart3|' +(new Date()).toLocaleString());
//        //Chart4
//        point = chart4.series[0].points[0];
//        newVal = Number(data[machineInfo.Tags[17].Key].Value);
//        point.update(newVal);
//        //console.log('Chart4|' + (new Date()).toLocaleString());

//        //Chart5
//        point = chart5.series[0].points[0];
//        newVal = Number(data[machineInfo.Tags[18].Key].Value);
//        point.update(newVal);
//        //console.log('Chart5|' +(new Date()).toLocaleString());

//        $('#temp').text(data[machineInfo.Tags[0].Key].Value + ' ℃');
//        $('#preUp').text(data[machineInfo.Tags[1].Key].Value + ' kg');
//        $('#preLeft').text(data[machineInfo.Tags[2].Key].Value + ' kg');
//        $('#preRight').text(data[machineInfo.Tags[3].Key].Value + ' kg');
//        $('#preDown').text(data[machineInfo.Tags[4].Key].Value + ' kg');
//        $('#torF').text(data[machineInfo.Tags[5].Key].Value + ' kg');
//        $('#torB').text(data[machineInfo.Tags[6].Key].Value + ' kg');
//        $('#temp1').text(data[machineInfo.Tags[7].Key].Value + ' ℃');
//        $('#preUp1').text(data[machineInfo.Tags[8].Key].Value + ' kg');
//        $('#preLeft1').text(data[machineInfo.Tags[9].Key].Value + ' kg');
//        $('#preRight1').text(data[machineInfo.Tags[10].Key].Value + ' kg');
//        $('#preDown1').text(data[machineInfo.Tags[11].Key].Value + ' kg');
//        $('#torF1').text(data[machineInfo.Tags[12].Key].Value + ' kg');
//        $('#torB1').text(data[machineInfo.Tags[13].Key].Value + ' kg');

//        //console.log('upShow|' + (new Date()).toLocaleString());
//        //chart1Data = Number(data[machineInfo.Tags[14].Key].Value);
//        //chart2Data = Number(data[machineInfo.Tags[15].Key].Value);
//        //chart3Data = Number(data[machineInfo.Tags[16].Key].Value);
//        //chart4Data = Number(data[machineInfo.Tags[17].Key].Value);
//        //chart5Data = Number(data[machineInfo.Tags[18].Key].Value);



//        $('#ValueFor').attr('data-TagKey', machineInfo.Tags[19].Key);
//        $('#ValueFor1').attr('data-TagKey', machineInfo.Tags[20].Key);
//        $('#lblValueFor').text(Number(data[machineInfo.Tags[19].Key].Value));
//        $('#lblValueFor1').text(Number(data[machineInfo.Tags[20].Key].Value));

//        $('#ValueB').attr('data-TagKey', machineInfo.Tags[21].Key);
//        $('#ValueB1').attr('data-TagKey', machineInfo.Tags[22].Key);
//        $('#lblValueB').text(Number(data[machineInfo.Tags[21].Key].Value));
//        $('#lblValueB1').text(Number(data[machineInfo.Tags[22].Key].Value));
//        //console.log('downShow|' +(new Date()).toLocaleString());

//        //console.log('DataTreatEnd|' +(new Date()).toLocaleString());
//        //设备开关 start
//        var machineSwitchValue;
//            for (var i=23;i<200;i++){
//                if (machineInfo.Tags[i]) {
//                    $('#switch-' + (i - 22)).attr('data-TagKey', machineInfo.Tags[i].Key);
//                    if (data[machineInfo.Tags[i].Key]) {
//                        machineSwitchValue=data[machineInfo.Tags[i].Key].Value;
//                    }else{
//                        machineSwitchValue=2;
//                    }
//                    $('#switchLight-' + (i - 22)).attr('data-bj-switch', machineSwitchValue);
//                    $('#switchName-' + (i - 22)).text(machineInfo.Tags[i].Name);
//                }
//            }
//            $(".bj-switchClick").removeClass("bj-switchClick");
//            switchLock = 1;
//    }
//}



//function refreshItemValues() {
//    $.get('../api/RealTimeDisplay?tagList =' + JSON.stringify(tagList), function (data) {
//        //dataQueue.push(data);
//        refreshDisplay(data);
//        setTimeout(refreshItemValues, 1000);
//    });
//}




//function setValue(obj) {
//    if (switchLock == 1) {
//        switchLock = 0;
//        var statusValue = obj.parentElement.children[0].children[0].attributes["data-bj-switch"].value;
//        var currentLightId = obj.parentElement.children[0].children[0]["id"];
//        var currentId = obj["id"];
//        console.log(currentLightId);
//        console.log(obj.parentElement.children[0].children[0].attributes["data-bj-switch"].value);
//        $('#' + currentId).addClass("bj-switchClick");
//        if (statusValue == 2) {
//            return false;//数据data里面不包含这个 点的值
//        }
//        if (statusValue == 1) {
//            $.post('../api/RealTimeDisplay', { '': [$(obj).attr('data-TagKey'), 0] }, function (d) {
//                console.log(d, "==1发送成功返回信息");
//                // obj.parentElement.children[0].children[0].attributes["data-bj-switch"].value = 0;
//                // $('#' + currentLightId).attr('data-bj-switch', 0);//可能需要
//                switchLock = 1;
//            }, function (error) {
//                alert(error);
//            });
//        }
//        if (statusValue == 0) {
//            $.post('../api/RealTimeDisplay', { '': [$(obj).attr('data-TagKey'), 1] }, function (d) {
//                console.log(d,"==0发送成功返回信息");
//                //  obj.parentElement.children[0].children[0].attributes["data-bj-switch"].value = 1;
//                 // $('#' + currentLightId).attr('data-bj-switch', 1);//可能需要
//                switchLock = 1;
//            }, function (error) {
//                alert(error);
//            });
//        }
//        $(".bj-switchClick").removeClass("bj-switchClick");
//    }
   
//}
//$(function () {
//    Highcharts.setOptions({
//        global: {
//            useUTC:false

//        }
//    })
//})
