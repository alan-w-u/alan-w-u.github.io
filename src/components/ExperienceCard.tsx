import type { Experience } from '../types/experience'
import styles from './ExperienceCard.module.css'

type ExperienceCardProps = {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const dateTimeFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' })

  return (
    <div className={`${styles['experience-card']} glass`}>
      <img src={`/logos/${experience.logo}`} alt={experience.company} draggable="false" />
      <div>
        <h1 className={styles['title']}>{experience.title}</h1>
        <h2 className={styles['company']}>{experience.company}</h2>
        <p className={styles['duration']}>
          {experience.duration.end
            ? `${dateTimeFormatter.format(experience.duration.start)} - ${dateTimeFormatter.format(experience.duration.end)}`
            : `${dateTimeFormatter.format(experience.duration.start)} - Present`
          }
        </p>
      </div>
      <ul className={styles['description']}>
        {experience.description.map(description => (
          <li>{description}</li>
        ))}
      </ul>
    </div>
  )
}
