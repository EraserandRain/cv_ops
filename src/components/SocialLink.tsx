import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface SocialLinkProps {
    text: string
    desc: string
    url: string
    icon: IconProp
}

const SocialLink = ({text, desc, url, icon}: SocialLinkProps) => {
    return (
        <p>
            <FontAwesomeIcon icon={icon} />【
            <a href={url}>
                {text}
            </a>】 : {desc}
        </p>
    )
}

export default SocialLink
