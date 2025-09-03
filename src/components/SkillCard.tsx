import type { Skill } from '../types/skill'
import styles from './SkillCard.module.css'

type SkillCardProps = {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className={`${styles['skill-card']} glass`}>
      <img src={`/skills/${skill.image}`} alt={skill.title} draggable="false" />
      <h1 className={styles['title']}>{skill.title}</h1>
    </div>
  )
}
