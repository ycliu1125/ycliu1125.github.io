$(function () {

    var personalTraitsChart =
        echarts.init(document.getElementById('personal-traits-chart'));
    var abilityChart =
        echarts.init(document.getElementById('ability-chart'));

    var personalOption = {
        color: ['#FFE434'],
        // title: {
        //     text: '劉育辰_人格特質'
        // },
        // legend: {
        //     data: ['Data B']
        // },
        radar: [{
            indicator: [
                { text: '經驗開放性', max: 5 },
                { text: '盡責性', max: 5 },
                { text: '外向性', max: 5 },
                { text: '親和性', max: 5 },
                { text: '情緒不穩定性', max: 5 }
            ],
            center: ['50%', '50%'],
            radius: 130,
            startAngle: 126,
            splitNumber: 5,
            shape: 'circle',
            name: {
                formatter: '【{value}】',
                fontSize: 16,
                textStyle: {
                    color: '#428BD4'
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(211, 253, 250, 0.8)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(211, 253, 250, 0.8)'
                }
            }
        }],
        series: [{
            name: '人格特質',
            type: 'radar',
            emphasis: {
                lineStyle: {
                    width: 4
                }
            },
            data: [
                {
                    value: [5, 4, 3, 3.5, 1.5],
                    name: 'Data B',
                    areaStyle: {
                        color: 'rgba(255, 228, 52, 0.6)'
                    }
                }
            ]
        }]
    };
    var abilityOption = {
        yAxis: {
            type: 'category',
            data: ["想法", "主動", "領導力", "表達能力", "學習力", "專注力"],
            axisLabel: {
                fontSize: 16
            }
        },
        xAxis: {
            type: 'value',
            max: 5
        },
        grid: {
            left: '15%'
        },
        series: [{
            data: [{
                "value": 2.5,
                "itemStyle": {
                    "color": "#66ffcc"
                }
            }, {
                "value": 2.5,
                "itemStyle": {
                    "color": "#99ff99"
                }
            }, {
                "value": 3,
                "itemStyle": {
                    "color": "#cc99ff"
                }
            }, {
                "value": 4,
                "itemStyle": {
                    "color": "#ff99cc"
                }
            }, {
                "value": 4,
                "itemStyle": {
                    "color": "#6699ff"
                }
            }, {
                "value": 5,
                "itemStyle": {
                    "color": "#ffbf80"
                }
            }],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
        }]
    };

    personalTraitsChart.setOption(personalOption);
    abilityChart.setOption(abilityOption);

    setTimeout(function () {
        window.onresize = function () {
            personalTraitsChart.resize();
            abilityChart.resize();

        }
    }, 200)

});