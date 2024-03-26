import React from 'react'
import { UlContent } from '../TextComponents'
import styles from "../style/Jobs.module.css"


const jobData = [{
    title: 'Advantest',
    position: 'DevOps Engineer',
    range: ['2022年7月', '至今'],
    details: [[
        '负责 Build Workflow CICD 运维工作，确保 Daily Build 稳定运行。',
    ], [
        '处理客户或开发人员的 Bug 或 CR ，完善 DevOps 流程。',
    ], [
        '负责开发环境的构建和管理工作。'
    ]]
}, {
    title: '创旗网络',
    position: '运维工程师',
    range: ['2020年12月', '2022年7月'],
    details: [[
        '客户服务器监控,响应并处理监控告警。',
    ], [
        '针对服务器运行情况的日常巡检任务,包括节假日重保巡检等。',
    ], [
        '系统为',
        { value: 'LNMP' },
        '环境,日常会接触安装部署、网络、通用工具集安装配置的工作。',
    ], [
        '各业务系统故障运维,同其他部门(客服、方案、研发等)协同为客户提供技术支持。',
    ], [
        '研发环境服务器的维护,提供产品测试环境。'
    ]]
}, {
    title: '瑞德信息',
    position: '运维工程师',
    range: ['2019年5月', '2020年11月'],
    details: [[
        '负责公司产品及涉及的系统、软件、数据库的安装、部署、优化等工作。',
    ], [
        '及时响应客户软硬件相关故障,远程或现场排查具体疑难问题。',
    ], [
        '负责公司产品的其他运维工作和现场项目的协调跟进。'
    ]]
}]
interface JobItemProps {
    data: {
        title: string
        position: string
        range: string[]
        details: Array<Array<string | { value: string }>>
    };
}

const JobItem = ({ data }: JobItemProps) => {
    const { title, position, range, details } = data;

    return (
        <li>
            <header className='flex flex-row items-center text-gray-600 mb-3'>
                <h3 className='mr-auto'>{title}</h3>
                <div className='flex items-center justify-between w-1/2'>
                    <h4 className='mr-4'>{position}</h4>
                    <span>{range.join(' ~ ')}</span>
                </div>
            </header>
            <br />
            <UlContent details={details} />
        </li>
    )
}

interface JobProps {
    title: string
    data: {
        title: string
        position: string
        range: string[]
        details: Array<Array<string | { value: string }>>
    }[]
}

const Job = ({ title, data }: JobProps) => {
    return (
        // <section className={styles.jobs}>
        <section className='jobs'>
            <h2>{title}</h2>
            <ol>
                {data.map((job, index) => (
                    <JobItem key={index} data={job} />
                ))}
            </ol>
        </section>
    );
}

const Jobs = () => {
    return (
        <>
            <Job title="工作经历" data={jobData} />
        </>
    )
}

export default Jobs
