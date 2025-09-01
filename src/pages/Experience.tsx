import { experience } from '../data/experience'
import ExperienceCard from '../components/ExperienceCard'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles['experience']}>
      <h1 className="title">Experience</h1>
      <div className={styles['cards']}>
        {experience.map(experience => (
          <ExperienceCard experience={experience} />
        ))}
      </div>
    </section>
  )
}
