// Lightweight wrapper — sections now manage their own layout for dunks1980 fidelity
// Kept for backward compat only
export default function SectionWrapper({ children, id, className = '', ariaLabel }) {
  return (
    <section id={id} aria-label={ariaLabel} className={className}>
      {children}
    </section>
  )
}
