import { StrongText } from 'components/TextComponents'
import SocialLink from 'components/SocialLink'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { faGithub, faMicroblog } from '@fortawesome/free-brands-svg-icons'

const Bio = () => {
  const t = useTranslations('Bio')

  return (
    <section className="relative">
      <h2>{t('title')}</h2>
      <Image
        className="absolute top-0 right-0"
        src={t('bioImg.src')}
        alt=""
        width={parseInt(t('bioImg.width'), 10)}
        height={parseInt(t('bioImg.height'), 10)}
      />
      <p>{t('person')}</p>
      <p>{t('workingInfo')}</p>
      <p>{t('tel')}</p>
      <p>{t('email')}</p>
      <p>{t('education')}</p>
      <p>{t('major')}</p>
      <SocialLink
        text={t('socialLink.github.value')}
        desc={t('socialLink.github.description')}
        url={t('socialLink.github.href')}
        icon={faGithub}
      />
      <SocialLink
        text={t('socialLink.blog.value')}
        desc={t('socialLink.blog.description')}
        url={t('socialLink.blog.href')}
        icon={faMicroblog}
      />
    </section>
  )
}

export default Bio
