import SpacerComponent from '../components/Spacer'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import TartarugaIconComponent from '@/components/illustrations/TartarugaIcon'
import { Heading1, Paragraph } from '@/components/texts/texts'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles['wrapper-left']}>
        <Heading1 className="text-7xl">
          Your daily <br />
          note taker
        </Heading1>
        <Link href="/dashboard/home" className={styles.link}>
          Get started
          {/* <FiArrowRight className="w-6 h-6 transition-transform transform group-hover:translate-x-1.5" /> */}
        </Link>
        <SpacerComponent size="medium"></SpacerComponent>
      </div>
      <div className={styles['wrapper-right']}>
        <TartarugaIconComponent />
      </div>
    </div>
  )
}
