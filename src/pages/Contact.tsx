import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles['contact']}>
      <h1 className="title">Contact</h1>
      <h2 className={styles['connect']}>Feel free to connect!</h2>
      <div className={styles['cards']}>
        <a href="mailto:alanwu0004@gmail.com" target="_blank">
          <img src="/email.svg" alt="Email" draggable="false" />
        </a>
        <a href="https://www.linkedin.com/in/alan-w-u/" target="_blank">
          <img src="/linkedin.svg" alt="LinkedIn" draggable="false" />
        </a>
        <a href="https://github.com/alan-w-u" target="_blank">
          <img src="/github.svg" alt="GitHub" draggable="false" />
        </a>
      </div>
    </section>
  )
}
