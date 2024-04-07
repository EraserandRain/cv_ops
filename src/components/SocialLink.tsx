import { IconType } from 'react-icons'

interface SocialLinkProps {
  text: string
  desc: string
  url: string
  icon: IconType
}

const SocialLink = ({ text, desc, url, icon: Icon }: SocialLinkProps) => {
  return (
    <p>
      <Icon />
      <a href={url}>{text}</a> : {desc}
    </p>
  )
}

export default SocialLink
