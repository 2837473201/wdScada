$(function () {
    //生成模拟数据 start
    var data = [];
    initAnalogData();
    function initAnalogData() {
        var flag = 0;
        var cunzhuangArr = ["大张庄", "小李庄", "汪沟村", "蒋头村", "桑园", "新庄", "白寨村", "赵家庄", "史家庄", "后狮村"];
        for (var i = 0; i < 85; i++) {
            var data_obj = {};
            if (flag >= cunzhuangArr.length) {
                flag = 0;
            }
            data_obj["name"] = cunzhuangArr[flag];
            flag++;

            data_obj["yl"] = (Math.random() * 50).toFixed(1);
            data_obj["kqwd"] = (Math.random() * 50).toFixed(1);
            data_obj["kqsd"] = (Math.random() * 50).toFixed(1);
            data_obj["dqy"] = (Math.random() * 50).toFixed(1);
            data_obj["fs"] = (Math.random() * 50).toFixed(1);
            data_obj["fx"] = "东南";
            if ((Math.random() * 100) > 50) {
                data_obj["trwd"] = (Math.random() * 50).toFixed(1);
                data_obj["trsd"] = (Math.random() * 50).toFixed(1);
            }
            data.push(data_obj);
        }
    }
    console.log(data);
    //生成模拟数据 end
    var dataUnit = {
        yl: "&nbsp;mm",
        kqwd: "&nbsp;℃",
        kqsd: "&nbsp;%",
        dqy: "&nbsp;P",
        fs: "&nbsp;km/h",
        trwd: "&nbsp;%",
        trsd: "&nbsp;%"
    };
    var dataZh = {
        yl: "雨量",
        kqwd: "空气温度",
        kqsd: "空气湿度",
        dqy: "大气压",
        fs: "风速",
        fx: "风向",
        trwd: "土壤温度",
        trsd: "土壤湿度"
    };
    setInterval(function () {
        data = [];
        $("#village").html("");
        initAnalogData();
        dataValuePlus(data, dataUnit);
        arrEnToZh(data, dataZh);
        createPageContent();
    }, 1000);
    dataValuePlus(data, dataUnit);
    //arrEnToZh(data,dataZh);
    //createPageContent();
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
    console.log(data);
    arrEnToZh(data, dataZh);
    function arrEnToZh(data, dataZh) {
        //data是一个数组，里面是对象；
        //dataZh是一个对象
        var newName;
        for (var i = 0; i < data.length; i++) {
            for (var j in data[i]) {
                if (typeof (data[i][j]) == "string") {
                    if (dataZh[j]) {
                        //console.log(j,data[i][j],dataZh[j]);
                        data[i][dataZh[j]] = data[i][j];
                        delete data[i][j];
                    }
                }
            }
        }
        console.log(data);
    }//arrEnToZh
    createPageContent();
    function createPageContent() {
        for (var i = 0; i < data.length; i++) {
            var num = 8, flag = 0;//num是最多有几个条目
            var wrapHtml = ['<div class="col-md-6 col-lg-4 mb5">',
'		<div class="col-md-12 border-p" id="',
'wrap' + i,
'">',
'</div>',
'		</div>'].join("");
            $("#village").append(wrapHtml);

            for (var j in data[i]) {
                if (j == "name") {
                    var title = ['<h4>',
            data[i][j],
            '</h4>'].join("");
                    $("#wrap" + i).prepend(title);
                } else {
                    var content = ['<div class="col-md-4 col-xs-12">',
        '				<p><span>',
        j,
        '：</span><span>',
        data[i][j],
        '</span></p>',
        '			</div>'].join("");
                    $("#wrap" + i).append(content);
                }
                flag++;
            }
            for (; flag <= num; flag++) {
                var nocontent = ['<div class="col-md-4 col-xs-12">',
        '				<p><span>',
        '&nbsp;</span><span>',
        '</span></p>',
        '			</div>'].join("");
                $("#wrap" + i).append(nocontent);
            }
        }
    }

});

