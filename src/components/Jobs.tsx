import { useTranslations } from 'next-intl'
import { JobItem, JobItemProps } from './TextComponents'

interface JobProps {
    title: string
    data: JobItemProps[]
}

const Job = ({ title, data }: JobProps) => {
    return (
        <section className='mb-8'>
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
                { mainStr: jobT('part1.description.para3.text') },
                { mainStr: jobT('part1.description.para4.text') },
                { mainStr: jobT('part1.description.para5.text') }
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
                        jobT('part2.description.para2.emphasized.item1'),
                        jobT('part2.description.para2.emphasized.item2')
                    ]
                },
                {
                    mainStr: jobT('part2.description.para3.text')
                },
                {
                    mainStr: jobT('part2.description.para4.text')
                }
            ]
        }
    ]
    return (
        <>
            <Job title={t('title')} data={jobData} />
        </>
    )
}

export default Jobs
