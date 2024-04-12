import { IconType } from 'react-icons'
import { StrongText } from './TextComponents'

interface SocialLinkProps {
  text: string
  desc: string | JSX.Element | {
    mainStr: string
    subStrs: string[]
  }
  url: string
  icon: IconType
}

const SocialLink = ({ text, desc, url, icon: Icon }: SocialLinkProps) => {
  const { mainStr, subStrs } = desc as { mainStr: string; subStrs: string[] } || {}
  return (
    <p className="flex items-center">
      <span>
        <Icon className='mt-2' />
      </span>
      <span>
        【<a href={url}>{text}</a>】 : {(typeof desc === 'string') ? desc : <StrongText
          mainStr={mainStr}
          subStrs={subStrs}
        />}
      </span>
    </p>
  )
}

export default SocialLink
