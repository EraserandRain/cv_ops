var myChart = echarts.init(document.getElementById('radarChart'));
var option = {
    radar: {
        // shape: 'circle',
        indicator: [
            { name: 'Linux', max: 100 },
            { name: 'Docker容器化', max: 100 },
            { name: 'Git', max: 100 },
            { name: 'Shell自动化脚本', max: 100 },
            { name: 'Javascript', max: 100 },
            { name: 'TCP/IP', max:100 },
        ]
    },
    series: [
        {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
                {
                    value: [90, 70, 80, 80, 80, 70],
                    name: '技能雷达'
                }
            ]
        }
    ]
};
myChart.setOption(option);

// document.getElementById('btn').onclick = ()=>{
//     // window.print()
// }
// import { jsPDF } from "jspdf";
// const doc = new jsPDF();   
// doc.html(document.body, {
//    callback: function (doc) {
//      doc.save("123.pdf");
//    }
// });