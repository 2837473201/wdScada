$(function () {
    //生成模拟数据 start
    var data = [];
    initAnalogData();
    function initAnalogData() {
        var timeArr = []; var sm = 8; var sd = 1; var ssd; var ssm; var timeDay;
        for (var j = 0; j < 31; j++) {
            if (sd > 31) {
                sd = 1;
                sm = sm + 1;
            }
            ssd = String(sd);
            if (ssd.length < 2) {
                ssd = "0" + ssd;
            }
            ssm = String(sm);
            if (ssm.length < 2) {
                ssm = "0" + ssm
            }
            sd++;
            timeDay = "2016-" + ssm + "-" + ssd;
            timeArr.push(timeDay);
        }
        var flag = 0;
        var cunzhuangArr = ["大张庄", "小李庄", "汪沟村", "蒋头村", "桑园", "新庄", "白寨村", "赵家庄", "史家庄", "后狮村"];
        for (var i = 0; i < 31; i++) {
            var data_obj = {};
            if (flag >= cunzhuangArr.length) {
                flag = 0;
            }
            data_obj["id"] = i + 1;
            data_obj["time"] = timeArr[i];
            data_obj["name"] = cunzhuangArr[flag];
            flag++;

            data_obj["yl"] = (Math.random() * 50).toFixed(1);
            data_obj["kqwd"] = (Math.random() * 50).toFixed(1);
            data_obj["kqsd"] = (Math.random() * 50).toFixed(1);
            data_obj["dqy"] = (Math.random() * 50).toFixed(1);
            data_obj["fs"] = (Math.random() * 50).toFixed(1);
            data_obj["fx"] = "东南";
            //if ((Math.random() * 100) > 50) {
            //    data_obj["trwd"] = (Math.random() * 50).toFixed(1);
            //    data_obj["trsd"] = (Math.random() * 50).toFixed(1);
            //}
            if (i % 2 == 0) {
                data_obj["trwd"] = (Math.random() * 50).toFixed(1);
                data_obj["trsd"] = (Math.random() * 50).toFixed(1);
            }
            data.push(data_obj);
        }
    }
    console.log(data, "1111111111111111111111111111111111");
    console.log(data, "hc22222222222222222222222222222222222");
    var ylArr = [],timeArr=[],kqwdArr=[];
    for (var i = 0; i < 10; i++) {
        ylArr.push(Number(data[i]["yl"]));
        timeArr.push(data[i]["time"]);
        kqwdArr.push(Number(data[i]["kqwd"]));
    }
    console.log(ylArr, timeArr, kqwdArr);
    $('#container').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: '内黄农业气象数据历史数据曲线'
        },
        subtitle: {
            text: null//'Source: WorldClimate.com'
        },
        xAxis: {
            categories: timeArr
        },
        yAxis: {
            title: {
                text: null//'Temperature (°C)'
            }
        },
        colors: ['#ff3333', '#33ff66', '#8bbc21', '#910000', '#1aadce',
   '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
        credits: {
            enabled: false
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: '雨量',
            data: ylArr
        }, {
            name: '空气温度',
            data: kqwdArr
        }]
    });
});
