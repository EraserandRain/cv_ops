import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { UlContent } from '../TextComponents';
import styles from "../style/Skills.module.css"

const RadarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const myChart = echarts.init(chartRef.current);

      const option = {
        radar: {
          indicator: [
            { name: 'Linux', max: 100 },
            { name: 'Kubernetes', max: 100 },
            { name: 'CICD', max: 100 },
            { name: 'Shell', max: 100 },
            { name: 'Frontend', max: 100 },
            { name: 'Docker', max: 100 },
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

      // Clean up function to destroy the chart when component unmounts
      return () => {
        myChart.dispose();
      };
    }
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
}

const skillData = [{
  details: [
    ['熟悉', { value: 'Linux' }, '及', { value: 'Windows' }, '操作系统，熟练使用', { value: 'Bash' }, '及', { value: 'Powershell' }, '相关的日常命令。'],
    ['熟悉 ', { value: 'Shell' }, '、', { value: 'Python' }, '、', { value: 'Perl' }, '开发，对', { value: 'Golang' }, '、', { value: 'Javascript' }, '也有一定了解,能够使用自动化脚本解决日常工作的一些问题。'],
    ['了解虚拟化技术,', '熟悉', { value: 'Vmware' }, '及', { value: 'Vagrant' }, ' 等相关工具。'],
    ['对', { value: 'Cloud Native' }, '有一定了解，', '熟悉', { value: 'Kubernetes' }, '、', { value: 'Docker' }, '、', { value: 'Helm' }, '等工具。'],
    ['熟悉 ', { value: 'Prometheus' }, '+', { value: 'Grafana' }, '等常用开源监控工具。'],
    ['熟悉网络', { value: 'TCP/IP' }, '协议,具备对网络异常进行分析解决的能力。'],
    ['熟悉', { value: 'React' }, '等相关技术，对', { value: 'Frontend Devlopment' }, '有一定了解。'],
    ['具备基本的英语听说读写能力，', '能够使用英语进行工作交流。']
  ]
}]

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2>职业技能</h2>
      <RadarChart />
      <UlContent details={skillData[0].details} />
    </section>
  )
}

export default Skills
