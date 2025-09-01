import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles['projects']}>
      <h1 className="title">Projects</h1>
      <div className={styles['cards']}>
        {projects.map(project => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  )
}
