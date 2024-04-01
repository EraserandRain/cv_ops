import styles from "../style/Projects.module.css"
import { StrongText, UlContent } from "../app/TextComponents"

const WorkData = [
  {
    title: 'Build DevOps for Chip Test System',
    details: [
      ['负责 SSD Chip Test System 的 Code Workflow 的构建任务。'],
      [
        '项目中使用',
        { value: 'Perl' },
        '、',
        { value: 'Visual Studio' },
        '、',
        { value: 'Mysql' },
        '、',
        { value: 'InstallShield' },
        '进行 Windows 构建，使用',
        { value: 'Shell' },
        '+',
        { value: 'Python' },
        '进行 Linux 构建，维护 Daily Build Workflow 并处理相关告警任务。'
      ], [
        '使用',
        { value: 'Jenkins' },
        '+',
        { value: 'Buildbot' },
        '构建 pipeline ，对 C# 、C++ 进行代码检查任务，并将结果通知对应的 commit 开发人员。',
      ],
    ],
  },
  {
    title: '联通运营商云信安系统运维',
    details: [
      ['参与中国联通地方运营商业务系统运维工作，项目上有上百台左右服务器需要维护。'],
      ['主要负责日常运维监控，基础服务的安装配置等等。'],
      [
        '项目中使用',
        { value: 'Shell' },
        '编写应用部署脚本、应用配置脚本、安全脚本等，自动化处理运维任务。'
      ],
      ['增强了对问题排除、处理、跟踪的能力及个人沟通能力。'],
    ],
  },
  {
    title: '上海银联业务系统部署及运维',
    details: [
      ['参与上海银联云信安系统部署及运维工作。'],
      ['熟悉了从安装部署，到配置统一管理所有网络设备，再到后续跟踪监控调优的过程。'],
      [
        '项目使用',
        { value: 'Prometheus' },
        '+',
        { value: 'Grafana' },
        '作为监控工具，使用',
        { value: 'node-exporter' },
        ',',
        { value: 'alertmanager' },
        '等模块搜集服务器运行状态、应用运行状态、',
        { value: 'SNMP' },
        '网络设备运行状态并通过钉钉',
        { value: 'webhook' },
        '告警到钉钉群，个人从项目中了解了关于监控方面的知识。',
      ],
    ],
  },
]

const RepoData = [
  {
    title: 'Envmgr',
    details: [
      [
        { value: '源码链接', link: "https://github.com/EraserandRain/envmgr" },
      ], [
        'Ansible 部署工具，快速配置开发环境。'
      ]
    ]
  }, {
    title: '容器集合',
    details: [
      [
        { value: '源码链接', link: 'https://github.com/EraserandRain/container' },
      ], [
        '常用容器模板，即开即用。'
      ]
    ]
  }
]
interface ProjectItemProps {
  title: string
  details: Array<Array<string | { value: string }>>
}

const ProjectItem = ({ title, details }: ProjectItemProps) => {
  return (
    <li>
      <header>
        <h3>{title}</h3>
      </header>
      <br />
      <UlContent details={details} />
    </li>
  )
}

interface ProjectProps {
  data: ProjectItemProps[]
  title: string
}

const Project = ({ data, title }: ProjectProps) => {
  return (
    <section className={styles.projects}>
      <h2>{title}</h2>
      <ol>
        {data.map((project, index) => (
          <ProjectItem key={index} title={project.title} details={project.details} />
        ))}
      </ol>
    </section>
  )
}

const GithubProject = ({ data, title }: ProjectProps) => {
  return (
    <Project data={data} title={title} />
  )
}

const Projects = () => {
  return (
    <>
      <div className="subdivision"></div>
      <GithubProject data={RepoData} title="开源项目" />
      <Project data={WorkData} title="项目经历" />
    </>
  )
}

export default Projects
