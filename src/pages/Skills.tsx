import { skills } from '../data/skills'
import SkillCard from '../components/SkillCard'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className={styles['skills']}>
      <h1 className="title">Skills</h1>
      <h2 className={styles['type']}>Languages</h2>
      <div className={styles['cards']}>
        {skills.languages.map(skill => (
          <SkillCard skill={skill} />
        ))}
      </div>
      <h2 className={styles['type']}>Technologies</h2>
      <div className={styles['cards']}>
        {skills.technologies.map(skill => (
          <SkillCard skill={skill} />
        ))}
      </div>
      <h2 className={styles['type']}>Developer Tools</h2>
      <div className={styles['cards']}>
        {skills.developerTools.map(skill => (
          <SkillCard skill={skill} />
        ))}
      </div>
    </section>
  )
}
