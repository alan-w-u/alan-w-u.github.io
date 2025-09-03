import type { Project } from '../types/project'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.link}
      target="_blank"
      className={`${styles['project-card']} glass`}
    >
      <img src={`/projects/${project.image}`} alt={project.title} draggable="false" />
      <h1 className={styles['title']}>{project.title}</h1>
      <div className={styles['tech-stack']}>
        {project.techStack.map(tech => (
          <div>{tech}</div>
        ))}
      </div>
      <p>{project.description}</p>
    </a>
  )
}
