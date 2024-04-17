import { useTranslations } from 'next-intl'
import { JobItem, JobItemProps } from './TextComponents'

interface JobProps {
    title: string
    data: JobItemProps[]
}

const Job = ({ title, data }: JobProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <ol>
                {data.map((job, index) => (
                    <JobItem key={index} title={job.title} position={job.position} range={job.range} texts={job.texts} />
                ))}
            </ol>
        </section>
    )
}

const Jobs = () => {
    const t = useTranslations('Jobs')
    const jobT = useTranslations('Jobs.details')
    const jobData: JobItemProps[] = [
        {
            title: jobT('part1.title'),
            position: jobT('part1.position'),
            range: [
                jobT('part1.range.from'),
                jobT('part1.range.to'),
            ],
            texts: [
                { mainStr: jobT('part1.description.para1.text') },
                { mainStr: jobT('part1.description.para2.text') },
                { mainStr: jobT('part1.description.para3.text') }
            ]
        }, {
            title: jobT('part2.title'),
            position: jobT('part2.position'),
            range: [
                jobT('part2.range.from'),
                jobT('part2.range.to'),
            ],
            texts: [
                { 
                    mainStr: jobT('part2.description.para1.text') 
                },
                {
                    mainStr: jobT('part2.description.para2.text'),
                    subStrs: [
                        jobT('part2.description.para2.emphasized.item1')
                    ]
                },
                {
                    mainStr: jobT('part2.description.para3.text')
                }
            ]
        }
    ]
    return (
        <>
            <div className="subdivision"></div>
            <Job title={t('title')} data={jobData} />
        </>
    )
}

export default Jobs
