import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navigation() {
  const t = useTranslations('Navigation')
  const { locale, locales, route } = useRouter()
  const otherLocale = locales?.find((cur) => cur !== locale)
  console.log(otherLocale)
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', gap: 10 }}>
        <Link href="/">
          <a>{t('index')}</a>
        </Link>
        <Link href="/about">
          <a>{t('about')}</a>
        </Link>
      </div>
      {otherLocale && (
        <Link href={route} locale={otherLocale}>
          <a>{t('switchLocale', { locale: otherLocale })}</a>
        </Link>
      )}
    </div>
  )
}
