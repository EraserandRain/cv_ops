import { GoLinkExternal } from "react-icons/go"

interface StrongTextProps {
  mainStr: string
  subStrs?: string[]
}

export const StrongText = ({ mainStr, subStrs }: StrongTextProps) => {
  if (!subStrs || subStrs.length === 0) {
    return <p>{mainStr}</p>
  }

  subStrs.forEach(subStr => {
    const regex = new RegExp(subStr, 'g');
    mainStr = mainStr.replace(regex, `<span class='strong'>$&</span>`)
  })

  return (
    <span dangerouslySetInnerHTML={{ __html: mainStr }} />
  )
}

interface StrongTextListProps {
  texts: StrongTextProps[]
}

export const StrongTextList = ({ texts }: StrongTextListProps) => {
  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>
          <StrongText mainStr={text.mainStr} subStrs={text.subStrs} />
        </li>
      ))}
    </ul>
  )
}

export interface ProjectItemProps extends StrongTextListProps {
  title: string
  link?: string
}

export const ProjectItem = ({ title, link, texts }: ProjectItemProps) => {
  return (
    <li className="mb-6">
      <header className="flex justify-between mb-2">
        <div className="flex items-center">
          <h3 className="inline-block ml-3 mr-2">{title}</h3>
          {link && <a href={link} className="inline-block text-main-color border-b-0"><GoLinkExternal /></a>}
        </div>
      </header>
      <StrongTextList texts={texts} />
    </li>
  )
}

export interface JobItemProps {
  title: string
  position?: string
  range: string[]
  texts: StrongTextProps[]
}

export const JobItem = ({ title, position, range, texts }: JobItemProps) => {
  return (
    <li className='mt-3 mb-5'>
      <header className='flex flex-row items-center text-gray-600 mb-3'>
        <h3 className='mr-auto'>{title}</h3>
        <div className='flex items-center justify-between w-1/2 mr-12'>
          <h4 className='mr-4'>{position}</h4>
          <span>{range.join(' ~ ')}</span>
        </div>
      </header>
      <StrongTextList texts={texts} />
    </li>
  )
}
