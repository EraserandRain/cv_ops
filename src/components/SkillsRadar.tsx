'use client'
import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

interface skill {
    name: string
    max: number
}

export const SkillsRadar = ({ data }: { data: skill[] }) => {
    const chartRef = useRef(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const myChart = echarts.init(chartRef.current)

            const option = {
                radar: {
                    indicator: data
                },
                series: [
                    {
                        type: 'radar',
                        data: [
                            {
                                value: [90, 70, 80, 80, 80, 70],
                                name: '技能雷达'
                            }
                        ]
                    }
                ]
            }

            myChart.setOption(option)

            // Clean up function to destroy the chart when component unmounts
            return () => {
                myChart.dispose()
            }
        }
    }, [data])

    return (
        <div className='flex justify-center'>
            <div ref={chartRef} style={{ width: '80%', height: '350px' }} />
        </div>
    )
}
