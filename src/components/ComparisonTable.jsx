import React from 'react'
import { motion } from 'framer-motion'

const rows = [
  { what: 'Design to prototype', traditional: '2–3 weeks', ai: '2–3 days' },
  { what: 'Feature scoping and specs', traditional: '1–2 weeks', ai: '1–2 days' },
  { what: 'MVP development', traditional: '4–6 months', ai: '6–10 weeks' },
  { what: 'Bug detection and QA', traditional: 'Mostly manual', ai: 'AI-assisted + human review' },
]

const fadeUp = (i) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' } },
})

const ComparisonTable = () => {
  return (
    <section className="comparison-section">
      <div className="container">

        {/* Header */}
        <motion.div
          className="comparison-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2>The new economics of building software</h2>
          <p>
            AI didn't just make us faster. It changed what's possible with a small, focused team.
            Here's what that looks like in practice.
          </p>
        </motion.div>

        {/* Table */}
        <div className="comparison-table" role="table" aria-label="Traditional vs AI-first workflow comparison">

          {/* Column headers */}
          <div className="table-head" role="row">
            <span className="col-what" role="columnheader">What</span>
            <span className="col-trad" role="columnheader">Traditional approach</span>
            <span className="col-ai" role="columnheader">With AI-first workflow</span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={i}
              className="table-row"
              role="row"
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp(i)}
              viewport={{ once: true }}
            >
              <span className="col-what row-label" role="cell">{row.what}</span>
              <span className="col-trad row-trad" role="cell">{row.traditional}</span>
              <span className="col-ai   row-ai" role="cell">{row.ai}</span>
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .comparison-section {
          padding: 100px 0;
          background-color: var(--bg-primary);
          border-top: 1px solid var(--border-color);
        }

        /* ---------- Header ---------- */
        .comparison-header {
          max-width: 560px;
          margin-bottom: 60px;
        }

        .comparison-header h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: var(--text-primary);
          margin-bottom: 1.1rem;
        }

        .comparison-header p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* ---------- Table ---------- */
        .comparison-table {
          width: 100%;
        }

        /* Shared 3-column grid */
        .table-head,
        .table-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: center;
          padding: 18px 0;
          border-bottom: 1px solid var(--border-color);
        }

        /* Column header row */
        .table-head {
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 14px;
          margin-bottom: 4px;
        }

        .table-head span {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .col-what { color: var(--text-tertiary, #aaa); }
        .col-trad { color: #c17a3b; /* warm amber */ }
        .col-ai   { color: var(--text-primary); }

        /* Data rows */
        .table-row:last-child {
          border-bottom: none;
        }

        .row-label {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .row-trad {
          font-size: 0.95rem;
          color: var(--text-tertiary, #aaa);
        }

        .row-ai {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 640px) {
          .table-head,
          .table-row {
            grid-template-columns: 1fr;
            gap: 6px;
            padding: 16px 0;
          }

          .col-trad { font-size: 0.8rem; }
          .col-ai   { font-size: 0.8rem; }
        }
      `}</style>
    </section>
  )
}

export default ComparisonTable
