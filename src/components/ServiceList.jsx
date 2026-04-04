import React from 'react'
import { motion } from 'framer-motion'
import SectionWave from './SectionWave'

const services = [
  {
    num: '01',
    title: 'Full Product Engineering',
    description:
      'You have an idea but no technical team. We handle everything, from choosing the right technology to designing, building, and launching your product. You focus on customers. We focus on code.',
    tags: ['Product Strategy', 'Full-Stack Development', 'DevOps', 'Launch Support'],
  },
  {
    num: '02',
    title: 'AI Native Development',
    description:
      'Want AI at the heart of your product, not just as an add-on? We build intelligent products from the ground up, with the right architecture so they actually work at scale.',
    tags: ['AI-First Architecture', 'LLM Integration', 'Intelligent Automation', 'Custom Models'],
  },
  {
    num: '03',
    title: 'AI Integration',
    description:
      'Already have a product? We make it smarter. Automating workflows, surfacing insights, and saving your team hours every week. No rip-and-replace. Just meaningful upgrades.',
    tags: ['LLM APIs', 'Workflow Automation', 'Data Pipelines', 'AI Features'],
  },
  {
    num: '04',
    title: 'Team Augmentation',
    description:
      'Need more engineering capacity without the risk of full-time hires? Our engineers embed directly into your team, learn your codebase, and start delivering from week one.',
    tags: ['Dedicated Engineers', 'Flexible Scaling', 'Full Integration', 'Knowledge Transfer'],
  },
]

const ServiceList = () => {
  return (
    <section id="work" className="service-list-section">
      <SectionWave position="top" align="right" height="100%" opacity={0.3} />
      <div className="container">

        {/* Header */}
        <motion.div
          className="sl-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2>Some ways we can help</h2>
          <p>
            Every founder's situation is different. Pick the path that fits yours, or talk to us
            and we'll figure it out together.
          </p>
        </motion.div>

        {/* Service rows */}
        <div className="sl-rows">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              className="sl-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {/* Number */}
              <span className="sl-num">{svc.num}</span>

              {/* Title */}
              <h3 className="sl-title">{svc.title}</h3>

              {/* Description */}
              <p className="sl-desc">{svc.description}</p>

              {/* Tag list */}
              <ul className="sl-tags">
                {svc.tags.map((tag, j) => (
                  <li key={j}>
                    <span className="arrow">→</span> {tag}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .service-list-section {
          position: relative;
          padding: 100px 0;
          background-color: var(--bg-primary);
          border-top: 1px solid var(--border-color);
          overflow: hidden;
        }

        /* ---------- Header ---------- */
        .sl-header {
          max-width: 560px;
          margin-bottom: 72px;
        }

        .sl-header h2 {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.05;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .sl-header p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 480px;
        }

        /* ---------- Rows ---------- */
        .sl-rows {
          display: flex;
          flex-direction: column;
        }

        .sl-row {
          display: grid;
          grid-template-columns: 60px 1fr 1fr 1fr;
          align-items: start;
          gap: 0 32px;
          padding: 40px 0;
          border-top: 1px solid var(--border-color);
        }

        .sl-row:last-child {
          border-bottom: 1px solid var(--border-color);
        }

        /* Number */
        .sl-num {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-tertiary, #bbb);
          padding-top: 6px;
          letter-spacing: 0.05em;
        }

        /* Title */
        .sl-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          line-height: 1.3;
          margin: 0;
        }

        /* Description */
        .sl-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        /* Tags */
        .sl-tags {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sl-tags li {
          font-size: 0.8rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .arrow {
          color: var(--text-tertiary, #bbb);
          font-size: 0.75rem;
          flex-shrink: 0;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 900px) {
          .sl-row {
            grid-template-columns: 40px 1fr;
            grid-template-rows: auto auto auto;
          }

          .sl-num  { grid-column: 1; grid-row: 1; }
          .sl-title { grid-column: 2; grid-row: 1; }
          .sl-desc  { grid-column: 1 / -1; grid-row: 2; padding-top: 12px; }
          .sl-tags  { grid-column: 1 / -1; grid-row: 3; padding-top: 12px; flex-direction: row; flex-wrap: wrap; gap: 8px; }

          .sl-tags li {
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 999px;
            padding: 3px 10px;
          }
        }

        @media (max-width: 560px) {
          .sl-header h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default ServiceList
