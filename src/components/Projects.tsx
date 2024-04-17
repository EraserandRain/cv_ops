import { ProjectItem, ProjectItemProps } from "components/TextComponents"
import { useTranslations } from "next-intl"

interface ProjectProps {
  data: ProjectItemProps[]
  title: string
}

const Project = ({ data, title }: ProjectProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <ol className="mt-0 list-inside p-0">
        {data.map((project, index) => (
          <ProjectItem key={index} title={project.title} link={project.link} texts={project.texts} />
        ))}
      </ol>
    </section>
  )
}



const Projects = () => {
  const repoT = useTranslations('Projects.Github')
  const workT = useTranslations('Projects.Work')
  const RepoData: ProjectItemProps[] = [
    {
      title: repoT('details.part1.title'),
      link: repoT('details.part1.link'),
      texts: [
        {
          mainStr: repoT('details.part1.description.para1.text'),
          subStrs: [
            repoT('details.part1.description.para1.emphasized.item1'),
          ]
        }
      ]
    }, {
      title: repoT('details.part2.title'),
      link: repoT('details.part2.link'),
      texts: [
        {
          mainStr: repoT('details.part2.description.para1.text')
        }
      ]
    }
  ]
  const WorkData: ProjectItemProps[] = [
    {
      title: workT('details.part1.title'),
      texts: [
        {
          mainStr: workT('details.part1.description.para1.text'),
        },
        {
          mainStr: workT('details.part1.description.para2.text'),
          subStrs: [
            workT('details.part1.description.para2.emphasized.item1'),
            workT('details.part1.description.para2.emphasized.item2'),
            workT('details.part1.description.para2.emphasized.item3')
          ]
        },
        {
          mainStr: workT('details.part1.description.para3.text'),
          subStrs: [
            workT('details.part1.description.para3.emphasized.item1'),
            workT('details.part1.description.para3.emphasized.item2')
          ]
        }
      ]
    }, {
      title: workT('details.part2.title'),
      texts: [
        {
          mainStr: workT('details.part2.description.para1.text')
        }, {
          mainStr: workT('details.part2.description.para2.text')
        }, {
          mainStr: workT('details.part2.description.para3.text'),
          subStrs: [
            workT('details.part2.description.para3.emphasized.item1')
          ]
        }
      ]
    }, {
      title: workT('details.part3.title'),
      texts: [
        {
          mainStr: workT('details.part3.description.para1.text')
        }, {
          mainStr: workT('details.part3.description.para2.text'),
          subStrs: [
            workT('details.part3.description.para2.emphasized.item1'),
            workT('details.part3.description.para2.emphasized.item2'),
            workT('details.part3.description.para2.emphasized.item3'),
            workT('details.part3.description.para2.emphasized.item4'),
            workT('details.part3.description.para2.emphasized.item5')
          ]
        }
      ]
    }
  ]

  return (
    <>
      <div className="subdivision"></div>
      <Project title={repoT('title')} data={RepoData} />
      <Project title={workT('title')} data={WorkData} />
    </>
  )
}

export default Projects
