import { IconType } from 'react-icons'

interface SocialLinkProps {
  text: string
  desc: string
  url: string
  icon: IconType
}

const SocialLink = ({ text, desc, url, icon: Icon }: SocialLinkProps) => {
  return (
    <p className="flex items-center">
      <span>
        <Icon className='mt-2' />
      </span>
      <span>
        【<a href={url}>{text}</a>】 : {desc}
      </span>
    </p>
  )
}

export default SocialLink
