import { useLocale, useTranslations } from 'next-intl'
import { JobItem, JobItemProps } from './TextComponents'

interface JobProps {
    title?: string
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
    const locale = useLocale()
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
        },
    ]

    const jobData2: JobItemProps[] = [{
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
    }]

    const jobData3: JobItemProps[] = [{
        title: jobT('part3.title'),
        range: [
            jobT('part3.range.from'),
            jobT('part3.range.to'),
        ],
        texts: [
            { mainStr: jobT('part3.description.para1.text') },
        ]
    }, {
        title: jobT('part4.title'),
        position: jobT('part4.position'),
        range: [
            jobT('part4.range.from'),
            jobT('part4.range.to'),
        ],
        texts: [
            { mainStr: jobT('part4.description.para1.text') },
            { mainStr: jobT('part4.description.para2.text') },
            { mainStr: jobT('part4.description.para3.text') },
        ]
    }, {
        title: jobT('part5.title'),
        position: jobT('part5.position'),
        range: [
            jobT('part5.range.from'),
            jobT('part5.range.to'),
        ],
        texts: [
            { mainStr: jobT('part5.description.para1.text') },
            { mainStr: jobT('part5.description.para2.text') },
        ]
    }]

    return (
        <>
            <Job title={t('title')} data={jobData} />
            {locale === 'en' && <div className="subdivision"></div>}
            <Job data={jobData2} />
            {locale === 'zh' && <div className="subdivision"></div>}
            <Job data={jobData3} />
        </>
    )
}

export default Jobs
