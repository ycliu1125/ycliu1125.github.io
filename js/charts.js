$(function () {

    var personalTraitsChart =
        echarts.init(document.getElementById('personal-traits-chart'));
    var abilityChart =
        echarts.init(document.getElementById('ability-chart'));

    var personalOption = {
        color: ['#FFE434'],
        tooltip: {
            trigger: 'axis'
        },
        radar: [{
            indicator: [
                { text: '經驗開放性', max: 5 },
                { text: '盡責性', max: 5 },
                { text: '情緒不穩定性', max: 5 },
                { text: '外向性', max: 5 },
                { text: '親和性', max: 5 },
            ],
            center: ['50%', '50%'],
            startAngle: 108,
            splitNumber: 5,
            shape: 'circle',
            name: {
                formatter: '{value}',
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
            tooltip: {
                trigger: 'item'
            },
            emphasis: {
                lineStyle: {
                    width: 4
                }
            },
            data: [
                {
                    value: [5, 4, 1.5, 3, 3.5],
                    name: '人格特質',
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
        tooltip: {
            trigger: 'axis'
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

    setChartSize(window.innerWidth);
    personalTraitsChart.setOption(personalOption);
    abilityChart.setOption(abilityOption);

    setTimeout(function () {
        window.onresize = function () {
            var innerWidth = window.innerWidth;
            setChartSize(innerWidth);
            personalTraitsChart.resize();
            abilityChart.resize();

        }
    }, 200)


    function setChartSize(innerWidth) {
        if ( innerWidth <= 480){
            personalTraitsChart.setOption({ radar: [{ radius: 70, name:{fontSize: 13} }] });
            abilityChart.setOption({ grid: { left: '30%' }});
        } else if (1200 < innerWidth && innerWidth <= 1470) {
            personalTraitsChart.setOption({ radar: [{ radius: 70, name:{fontSize: 16} }] });
            abilityChart.setOption({ grid: { left: '30%' } });
        } else if (1470 < innerWidth && innerWidth <= 1600) {
            personalTraitsChart.setOption({ radar: [{ radius: 100, name:{fontSize: 16} }] });
            abilityChart.setOption({ grid: { left: '20%' } });
        } else {
            personalTraitsChart.setOption({ radar: [{ radius: 130, name:{fontSize: 16} }] });
            abilityChart.setOption({ grid: { left: '15%' } });
        }
    }

});