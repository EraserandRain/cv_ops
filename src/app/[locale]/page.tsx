import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import PageLayout from 'components/PageLayout'
import Bio from 'components/Bio'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import Jobs from '..../components/Jobs'


type Props = {
  params: { locale: string }
}

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  const t = useTranslations('IndexPage')

  return (
    <>
      <PageLayout>
        <Bio />
        <Skills />
        <Projects />
        <Jobs />
      </PageLayout>
    </>
  )
}
