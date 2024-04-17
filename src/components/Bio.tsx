import SocialLink from 'components/SocialLink'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FaBlog, FaGithub } from 'react-icons/fa'
import React from 'react'

const Bio = () => {
  const t = useTranslations('Bio')
  const infoItems = [
    'info.role',
    'info.contact',
    'info.education'
  ]

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
      <>
        {infoItems.map((item: any) => (<p key={item}>{t(item)}</p>))}
      </>
      <SocialLink
        text={t('socialLink.github.value')}
        desc={t('socialLink.github.description')}
        url={t('socialLink.github.href')}
        icon={FaGithub}
      />
      <SocialLink
        text={t('socialLink.blog.value')}
        desc={{
          mainStr: t('socialLink.blog.description.text'),
          subStrs: [
            t('socialLink.blog.description.emphasized.item1'),
            t('socialLink.blog.description.emphasized.item2')
          ]
        }}
        url={t('socialLink.blog.href')}
        icon={FaBlog}
      />
    </section>
  )
}

export default Bio
