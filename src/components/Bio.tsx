import { StrongText } from 'components/TextComponents'
import SocialLink from 'components/SocialLink'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FaBlog, FaGithub } from 'react-icons/fa'

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
      <p>{t('info.person')}</p>
      <p>{t('info.workingInfo')}</p>
      <p>{t('info.tel')}</p>
      <p>{t('info.email')}</p>
      <p>{t('info.education')}</p>
      <p>{t('info.major')}</p>
      <SocialLink
        text={t('socialLink.github.value')}
        desc={t('socialLink.github.description')}
        url={t('socialLink.github.href')}
        icon={FaGithub}
      />
      <SocialLink
        text={t('socialLink.blog.value')}
        desc={t('socialLink.github.description')}
        url={t('socialLink.blog.href')}
        icon={FaBlog}
      />
    </section>
  )
}

export default Bio
