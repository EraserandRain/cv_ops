var myChart = echarts.init(document.getElementById('radarChart'));
var option = {
    radar: {
        // shape: 'circle',
        indicator: [
            { name: 'HTML and CSS', max: 100 },
            { name: 'JavaScript', max: 100 },
            { name: 'Vue', max: 100 },
            { name: 'Webpack', max:100 },
            { name: 'Git', max: 100 },
            { name: 'Linux', max: 100 },
        ]
    },
    series: [
        {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
                {
                    value: [90, 80, 80, 70, 80, 80],
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