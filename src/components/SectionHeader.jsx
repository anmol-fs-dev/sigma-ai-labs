import React from 'react'
import { motion } from 'framer-motion'

const SectionHeader = ({ title, subtitle, centered = false }) => {
  return (
    <motion.div 
      className={`section-header ${centered ? 'text-center' : ''}`}
      style={{ margin: centered ? '0 auto 4rem' : '0 0 4rem', textAlign: centered ? 'center' : 'left' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}

      <style jsx>{`
        h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          letter-spacing: -0.04em;
        }
      `}</style>
    </motion.div>
  )
}

export default SectionHeader
