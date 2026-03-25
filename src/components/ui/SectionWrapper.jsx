import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function SectionWrapper({ id, children, className = '', ariaLabel }) {
  const { ref, isInView } = useScrollReveal(0.1)

  return (
    <motion.section
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`px-5 py-16 md:py-20 ${className}`}
    >
      <div className="max-w-[960px] mx-auto">
        {children}
      </div>
    </motion.section>
  )
}
