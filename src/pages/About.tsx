import GlassCard from '../components/GlassCard'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles['about']}>
      <div className={styles['info']}>
        <GlassCard className={styles['picture']}>
          <img src="/alanwu.jpg" alt="Alan Wu" draggable="false" />
        </GlassCard>
        <GlassCard className={styles['profile']}>
          <p className={styles['name']}>Alan Wu</p>
          <p className={styles['degree']}>Computer Science @ UBC</p>
        </GlassCard>
        <GlassCard className={styles['intro']}>
          Hi!
          I'm a passionate developer who thrives in collaborative environments and is always eager to explore emerging technologies.
          Thanks for visiting and feel free to connect!
        </GlassCard>
      </div>
    </section>
  )
}
