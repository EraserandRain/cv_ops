'use client'

import React from 'react'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend } from 'recharts'
import { useTranslations } from 'next-intl'

interface Skill {
  subject: string
  value: number
}

const SkillsRadar = ({ data }: { data: Skill[] }) => {
  return (
    <RadarChart
      width={600}
      height={400}
      cx="50%"
      cy="50%"
      outerRadius={120}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis
        dataKey="subject"
      />
      <Radar
        dataKey="value"
        stroke="var(--main-color)"
        fill="var(--main-color)"
        fillOpacity={0.3}
        legendType="none"
      />
      <Legend />
    </RadarChart>
  )
}

const Skills = () => {
  const t = useTranslations('Skills')
  const radarT = useTranslations('Skills.radar')
  const detailsT = useTranslations('Skills.details')
  const [detailsNum, partNum] = [8, 6]
  const RadarKeys = Array.from({ length: partNum }, (_, i) => `part${i + 1}` as const)
  const DetailsKeys = Array.from({ length: detailsNum }, (_, i) => `part${i + 1}` as const)
  const details = [
    {
      main
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
    </section>
  );
};

export default Skills
