import styles from "../style/Projects.module.css"

const StyledText = ({ value, type }) => {
  return <span className={styles[type]}> {value} </span>
}

const StrongText = ({ value }) => {
  return <StyledText type="strong" value={value} />
}

const ProjectItem = ({ title, details }) => {
  return (
    <li>
      <header>
        <h3>{title}</h3>
      </header>
      <br />
      <ul>
        {details.map((detail, index) => (
          <li key={index}>
            <p>{detail.map(item => (
              typeof item === 'string' ? item : <StrongText value={item.value} />
            ))}</p>
          </li>
        ))}
      </ul>
    </li>
  )
}

const Projects = () => {
  const projectData = [
    {
      title: '联通运营商云信安系统运维',
      details: [
        ['参与中国联通地方运营商业务系统运维工作，项目上有上百台左右服务器需要维护。'],
        ['主要负责日常运维监控，基础服务的安装配置等等。'],
        ['从开始的手工安装系统到后来的工具化部署，个人在运维过程中收获很多。'],
        [
          '项目中使用',
          { value: 'Shell' },
          '编写应用部署脚本、应用配置脚本、',
          { value: 'iptables' },
          '安全脚本等,通过这些个人的',
          { value: 'Shell' },
          '编写能力大大提高,也熟悉了',
          { value: 'grep' },
          ',',
          { value: 'sed' },
          ',',
          { value: 'awk' },
          '等命令的使用。',
        ],
        ['增强了对问题排除、处理、跟踪的能力，由于需要跟运营商的客户打交道，也提高了个人沟通能力。'],
      ],
    },
    {
      title: '长信吉数云信安系统实施部署及运维',
      details: [
        ['参与长信吉数云信安系统实施、部署及运维工作。'],
        ['主要负责从服务器上架部署到基础环境的安装配置再到后期上线运维的整个过程。'],
        [
          '从中了解了一些网络设备的基本使用，包括交换机、汇聚分流器、防火墙和其他',
          { value: 'SNMP' },
          '网络设备等。',
        ],
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

  return (
    <section className={styles.projects}>
      <h2>项目经历</h2>
      <ol>
        {projectData.map((project, index) => (
          <ProjectItem key={index} title={project.title} details={project.details} />
        ))}
      </ol>
    </section>
  )
}

export default Projects
