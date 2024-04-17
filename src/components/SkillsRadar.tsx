'use client'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend } from 'recharts'

interface skill {
    subject: string
    value: number
}

export const SkillsRadar = ({ data }: { data: skill[] }) => {
    return (
        <div className='flex justify-center'>
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
        </div>
    )
}
