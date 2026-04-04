import React from 'react'
import { motion } from 'framer-motion'
import SectionWave from './SectionWave'

const steps = [
  {
    side: 'left',
    icon: '✏️',
    iconLabel: 'Design',
    title: 'Design',
    description:
      'AI handles the first pass. Rapid prototypes, layout explorations, component generation. We can go from idea to clickable prototype in hours, not days. Then our designers step in to refine the details, nail the interactions, and make sure it actually feels good to use.',
    metric: '3×',
    metricLabel: 'faster design iterations',
  },
  {
    side: 'right',
    icon: '📊',
    iconLabel: 'Strategy',
    title: 'Strategy',
    description:
      'We use AI to break down product ideas into detailed feature sets, map out scope, and surface edge cases early. It helps us generate comprehensive specs and explore multiple directions fast.',
    metric: '60%',
    metricLabel: 'less time on specs',
  },
  {
    side: 'left',
    icon: '</>',
    iconLabel: 'Engineering',
    title: 'Engineering',
    description:
      'We use Claude Code paired with our internal context management framework to generate production-grade code that understands your codebase from day one. Every piece of output goes through a dual review, first by AI for consistency and patterns, then by senior engineers for architecture and edge cases.',
    metric: '4×',
    metricLabel: 'faster shipping velocity',
  },
  {
    side: 'right',
    icon: '🛡',
    iconLabel: 'Quality',
    title: 'Quality',
    description:
      'AI generates test cases from specs so QA can focus on the weird edge cases humans are actually good at catching. Less busywork, fewer bugs in prod.',
    metric: '40%',
    metricLabel: 'fewer production bugs',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' } }),
}

const FeatureGrid = () => {
  return (
    <section 
      id="services" 
      className="ai-workflow-section"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
      }}
    >
      {/* Background Animation (Target of the reveal) */}
      <div className="workflow-animation-wrapper" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <SectionWave position="top" height="100%" opacity={0.35} density={1.5} />
      </div>
      
      {/* Interactive Revealer Overlay (Opaque layer with a hole) */}
      <div 
        className="workflow-revealer-overlay"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          background: `radial-gradient(circle 350px at var(--mouse-x, -500px) var(--mouse-y, -500px), transparent 0%, white 100%)`,
          pointerEvents: 'none', // Critical: Let events pass through to cards
          transition: 'background 0.05s ease-out',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div>
          {/* Header */}
          <motion.div
            className="workflow-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2>We use AI at every step to<br />build your product faster</h2>
            <p className="workflow-subtitle">
              We built our entire workflow around AI. Not because it's trendy, but because it lets a small team do the work of a much larger one. Every output still goes through real humans. We just get to the finish line a lot faster.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="timeline-wrapper">
            {/* Centre spine */}
            <div className="spine" />

            {steps.map((step, i) => {
              const isLeft = step.side === 'left'
              return (
                <div key={i} className={`timeline-row ${isLeft ? 'row-left' : 'row-right'}`}>
                  {/* Card */}
                  <motion.div
                    className="step-card"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                  >
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <div className="step-metric">
                      <span className="metric-number">{step.metric}</span>
                      <span className="metric-label">{step.metricLabel}</span>
                    </div>
                  </motion.div>

                  {/* Icon node on the spine */}
                  <motion.div
                    className="spine-node"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                  >
                    <span>{step.icon}</span>
                  </motion.div>

                  {/* Empty spacer on the other side */}
                  <div className="spacer" />
                </div>
              )
            })}
          </div>

          {/* Tagline */}
          <div className="workflow-tagline-container">
            <motion.p
              className="workflow-tagline"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <strong>AI handles the busywork.</strong> Our team handles the judgment calls. You get both.
            </motion.p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ai-workflow-section {
          position: relative;
          padding: 100px 0 80px;
          background-color: var(--bg-primary);
          overflow: hidden;
        }

        /* ---------- Header ---------- */
        .workflow-header {
          width: 100%;
          margin-bottom: 80px;
        }

        .workflow-header h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .workflow-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 520px;
        }

        /* ---------- Timeline ---------- */
        .timeline-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Vertical spine */
        .spine {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          bottom: 0;
          width: 1px;
          background: var(--border-color);
          z-index: 0;
        }

        .timeline-row {
          display: grid;
          grid-template-columns: 1fr 72px 1fr;
          align-items: start;
          gap: 0;
          padding: 32px 0;
          position: relative;
          z-index: 1;
        }

        /* Force all children into the same grid row */
        .step-card, .spine-node, .spacer { grid-row: 1; }

        /* Left-side card: card | node | spacer */
        .row-left .step-card  { grid-column: 1; padding-right: 48px; text-align: right; }
        .row-left .spine-node { grid-column: 2; }
        .row-left .spacer     { grid-column: 3; }

        /* Right-side card: spacer | node | card */
        .row-right .spacer     { grid-column: 1; }
        .row-right .spine-node { grid-column: 2; }
        .row-right .step-card  { grid-column: 3; padding-left: 48px; text-align: left; }

        /* ---------- Card ---------- */
        .step-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 1.25rem;
          padding: 2rem 2.25rem;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .step-card:hover {
          border-color: var(--text-primary);
          box-shadow: 0 8px 40px rgba(0,0,0,0.06);
        }

        .step-card h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }

        .step-card p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }

        /* Metric callout */
        .step-metric {
          display: flex;
          align-items: baseline;
          gap: 0.4rem;
        }

        .row-left .step-metric  { justify-content: flex-end; }
        .row-right .step-metric { justify-content: flex-start; }

        .metric-number {
          font-size: 1.9rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--text-primary);
        }

        .metric-label {
          font-size: 0.78rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* ---------- Spine node (icon circle) ---------- */
        .spine-node {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          font-size: 1rem;
          color: var(--text-primary);
          position: relative;
          z-index: 2;
          filter: grayscale(100%);
        }

        /* ---------- Tagline ---------- */
        .workflow-tagline-container {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 100px;
          padding-top: 40px;
          border-top: 1px solid var(--border-color);
        }

        .workflow-tagline {
          position: relative;
          z-index: 10;
          text-align: center;
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 600px;
        }

        .workflow-tagline strong {
          color: var(--text-primary);
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 768px) {
          .spine { display: none; }

          .timeline-row {
            grid-template-columns: 1fr;
            padding: 0;
          }

          .row-left .step-card,
          .row-right .step-card {
            grid-column: 1;
            grid-row: 2;
            padding: 1.5rem;
            text-align: left;
            margin-bottom: 1.5rem;
          }

          .row-left .spine-node,
          .row-right .spine-node {
            grid-column: 1;
            grid-row: 1;
            margin: 0 0 1rem;
          }

          .row-left .step-metric,
          .row-right .step-metric {
            justify-content: flex-start;
          }

          .spacer { display: none; }
        }
      `}</style>
    </section>
  )
}

export default FeatureGrid
