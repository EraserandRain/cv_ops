import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import PrintBtn from 'components/PrintBtn'

type Props = {
    children?: ReactNode
}

export default function PageLayout({ children }: Props) {
    const t = useTranslations('PageLayout')

    return (
        <>
            <p className="max-w-[590px]">{t('description')}</p>
            <h1 id="person">姜盛乾个人简历</h1>
            <PrintBtn value="导出PDF" />
            <hr />
            {children}
            <hr />
        </>
    )
}
