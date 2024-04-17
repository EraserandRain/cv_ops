import { useTranslations } from 'next-intl'
import { SkillsRadar } from './SkillsRadar'
import { StrongTextList } from './TextComponents'

const Skills = () => {
  const t = useTranslations('Skills')
  const radarT = useTranslations('Skills.radar')
  const detailsT = useTranslations('Skills.details')
  const RadarKeys = Array.from({ length: 6 }, (_, i) => `part${i + 1}` as const)
  const details = [
    {
      mainStr: detailsT('part1.text'),
      subStrs: [
        detailsT('part1.emphasized.item1'),
        detailsT('part1.emphasized.item2'),
      ]
    },
    {
      mainStr: detailsT('part2.text'),
      subStrs: [
        detailsT('part2.emphasized.item1'),
        detailsT('part2.emphasized.item2'),
        detailsT('part2.emphasized.item3'),
        detailsT('part2.emphasized.item4'),
        detailsT('part2.emphasized.item5')
      ]
    },
    {
      mainStr: detailsT('part3.text'),
      subStrs: [
        detailsT('part3.emphasized.item1'),
        detailsT('part3.emphasized.item2'),
        detailsT('part3.emphasized.item3'),
        detailsT('part3.emphasized.item4')
      ]
    },
    {
      mainStr: detailsT('part4.text'),
      subStrs: [
        detailsT('part4.emphasized.item1'),
        detailsT('part4.emphasized.item2'),
        detailsT('part4.emphasized.item3')
      ]
    },
    {
      mainStr: detailsT('part5.text'),
      subStrs: [
        detailsT('part5.emphasized.item1'),
        detailsT('part5.emphasized.item2'),
      ]
    }, {
      mainStr: detailsT('part6.text'),
      subStrs: [
        detailsT('part6.emphasized.item1'),
        detailsT('part6.emphasized.item2'),
      ]
    }, {
      mainStr: detailsT('part7.text'),
      subStrs: [
        detailsT('part7.emphasized.item1'),
      ]
    }, {
      mainStr: detailsT('part8.text'),
      subStrs: [
        detailsT('part8.emphasized.item1'),
        detailsT('part8.emphasized.item2')
      ]
    }
  ]

  return (
    <section>
      <h2>{t('title')}</h2>
      <SkillsRadar
        data={RadarKeys.map((key) => ({
          subject: radarT(`${key}.subject` as any),
          value: parseInt(radarT(`${key}.value` as any)),
        }))}
      />
      <StrongTextList texts={details} />
    </section>
  )
}

export default Skills
