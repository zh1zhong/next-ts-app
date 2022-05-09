import { useTranslations } from 'next-intl'
// import { useIntl, useTranslations } from 'next-intl'
// import { useRouter } from 'next/router'

import Navigation from '@components/Navigation.js'
import styles from '@styles/About.module.scss'

export default function About() {
  const t = useTranslations('About')
  // const { locale } = useRouter()
  // const intl = useIntl()

  // const test = (test: string) => {
  //   const a = 'a'
  //   const b = 'b'
  //   if (a == test) {
  //   }
  // }

  return (
    <div>
      <Navigation />
      Learnz
      <div className={styles.test}>dasd</div>
      <p>{t('title')}</p>
    </div>
  )
}

export function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: {
        ...require(`../messages/about/${locale}.json`),
        ...require(`../messages/shared/${locale}.json`),
      },
      now: new Date().getTime(),
    },
  }
}
