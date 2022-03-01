var myChart = echarts.init(document.getElementById('skills'));
var option = {
    radar: {
        // shape: 'circle',
        indicator: [
            { name: 'Sales', max: 100 },
            { name: 'Administration', max: 100 },
            { name: 'Information Technology', max: 100 },
            { name: 'Customer Support', max: 100 },
            { name: 'Development', max:100 },
            { name: 'Marketing', max: 100 },
        ]
    },
    series: [
        {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
                {
                    value: [80, 80, 80, 80, 80, 80],
                    name: '技能雷达'
                }
            ]
        }
    ]
};
myChart.setOption(option);