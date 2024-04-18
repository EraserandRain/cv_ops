import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import PrintBtn from 'components/PrintBtn'
import clsx from 'clsx'

type Props = {
    children?: ReactNode
}

export default function PageLayout({ children }: Props) {
    const t = useTranslations('PageLayout')
    const styledLine = clsx("border border-solid border-main-color mx-auto my-12")

    return (
        <>
            <h1 className="w-auto text-center">{t('title')}</h1>
            
            <hr className={styledLine} />
            {children}
            <hr className={styledLine} />
        </>
    )
}
