import styles from './GlassCard.module.css'

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={`${styles['glass-card']} glass ${className}`}>
      {children}
    </div>
  )
}
