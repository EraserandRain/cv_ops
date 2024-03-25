import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { UlContent } from '../TextComponents';

const RadarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // 只在客户端渲染时初始化 Echarts 实例
    if (typeof window !== 'undefined') {
      const myChart = echarts.init(chartRef.current);

      const option = {
        radar: {
          indicator: [
            { name: 'Linux', max: 100 },
            { name: 'Kubernetes', max: 100 },
            { name: 'Git', max: 100 },
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

const skillData = [
  {
    details: [
      [
        '熟悉 ',
        { value: 'Linux' },
        ' 及 ',
        { value: 'Windows' },
        ' 操作系统,熟练使用 ',
        { value: 'Bash' },
        ' 及 ',
        { value: 'Powershell' },
        ' 相关的日常命令。',
      ],
    ],
  },
  {
    details: [
      [
        '熟悉 ',
        { value: 'Shell' },
        ' 开发,对 ',
        { value: 'Python' },
        '、',
        { value: 'Javascript' },
        ' 也有一定了解,能够使用自动化脚本解决日常工作的一些问题。',
      ],
    ],
  },
  {
    details: [
      [
        '了解数据库有关知识,熟悉 ',
        { value: 'MySQL' },
        ' 安装、配置、授权、增删改查等操作。',
      ],
    ],
  },
  {
    details: [
      [
        '对虚拟化技术有一定了解,',
        { value: 'Vmware' },
        ' 及 ',
        { value: 'Vagrant' },
        ' 等相关工具的基本使用,包括安装、配置以及应用。',
      ],
    ],
  },
  {
    details: [
      [
        '对 ',
        { value: 'Docker' },
        ' 容器有一定了解,能够通过编写 ',
        { value: 'Dockefile' },
        ',使用 ',
        { value: 'docker-compose' },
        ' 编排简单的容器集群。',
      ],
    ],
  },
  {
    details: [
      [
        '熟悉 ',
        { value: 'Prometheus' },
        ' + ',
        { value: 'Grafana' },
        ' 等常用开源监控工具。',
      ],
    ],
  },
  {
    details: [
      [
        '熟悉网络 ',
        { value: 'TCP/IP' },
        ' 协议,具备对网络异常进行分析解决的能力。',
      ],
    ],
  },
  {
    details: [
      [
        '熟悉 WEB 相关技术,了解 ',
        { value: 'Nginx' },
        ' 等应用的安装/配置和维护;对',
        { value: '前端开发' },
        '也有一定了解。',
      ],
    ],
  },
  {
    details: [
      [
        '具备基本的英语听说读写能力,能够借助 ',
        { value: 'Google' },
        ' 等搜索引擎和一些英文技术文章来查询与解决对应的技术问题。',
      ],
    ],
  },
];

const Skills = () => {
    return (
        <section>
            <h2>职业技能</h2>
            <RadarChart />
            <UlContent details={skillData}/>
        </section>
    )
}

export default Skills
