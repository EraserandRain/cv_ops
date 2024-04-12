'use client'
import React from 'react'
import { UlContent } from 'components/TextComponents'
import styles from "app/styles/Skills.module.css"
import { Pie } from '@ant-design/plots';
const data = [
  { type: 'Linux', value: 90 },
  { type: 'Kubernetes', value: 70 },
  { type: 'CICD', value: 80 },
  { type: 'Shell', value: 80 },
  { type: 'Frontend', value: 80 },
  { type: 'Docker', value: 70 },
]
const DemoPie = () => {
  const config = {
    data: data,
    angleField: 'value',
    colorField: 'type',
    paddingRight: 80,
    innerRadius: 0.6,
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
    annotations: [
      {
        type: 'text',
        style: {
          text: 'DevOps Skills',
          x: '50%',
          y: '50%',
          textAlign: 'center',
          fontSize: 40,
          fontStyle: 'bold',
        },
      },
    ],
  };
  return <Pie {...config} />;
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
      <DemoPie />
      <UlContent details={skillData[0].details} />
    </section>
  )
}

export default Skills
