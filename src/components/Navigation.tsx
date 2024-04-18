import { useTranslations } from 'next-intl'
import LocaleSwitcher from './LocaleSwitcher'
import PrintBtn from './PrintBtn'

export default function Navigation() {
  const t = useTranslations('Navigation')

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-white">
        <LocaleSwitcher />
        <div className="print-hidden">
          <PrintBtn value={t('PrintBtn.value')} />
        </div>
      </nav>
    </div>
  )
}
