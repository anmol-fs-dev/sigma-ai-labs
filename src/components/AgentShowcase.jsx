import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { Bot } from 'lucide-react'
import SectionWave from './SectionWave'

const agents = [
  {
    title: 'Context Agent',
    description: 'Reads your codebase, business rules, and architecture. Builds a living map of your project so every other agent knows what they\'re working with.',
    badge: 'ALWAYS ON',
  },
  {
    title: 'Spec Agent',
    description: 'Takes product requirements and breaks them into detailed technical specs, edge cases, and acceptance criteria. PMs review, not write from scratch.',
    badge: 'ACTIVE DURING SCOPING',
  },
  {
    title: 'Code Agent',
    description: 'Generates production-grade code using full project context. Writes implementations, tests, and migrations. Engineers guide direction, the agent does the heavy lifting.',
    badge: 'ACTIVE DURING DEVELOPMENT',
  },
  {
    title: 'Review Agent',
    description: 'Scans every piece of generated code for pattern violations, security issues, and inconsistencies before a human engineer even looks at it.',
    badge: 'RUNS ON EVERY COMMIT',
  },
  {
    title: 'QA Agent',
    description: 'Auto-generates test cases from specs. Catches regressions, edge cases, and integration issues. Your QA team focuses on the stuff machines miss.',
    badge: 'RUNS ON EVERY PR',
  },
  {
    title: 'Deploy Agent',
    description: 'Handles CI/CD pipelines, security scans, and performance checks. If something will break in production, this agent flags it before it ships.',
    badge: 'RUNS ON EVERY DEPLOY',
  },
]

const AgentShowcase = () => {
  return (
    <section id="agents" className="agent-showcase section-padding">
      <SectionWave position="top" align="left" height="100%" opacity={0.3} />
      <div className="container">
        <SectionHeader
          centered={false}
          title="The agents behind AI-first delivery"
          subtitle="Our specialized AI agents work alongside our human engineers to ensure peak performance and 10x faster output."
        />

        <div className="agents-grid">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              className="agent-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="agent-icon">
                <Bot size={24} />
              </div>

              {/* Text */}
              <h4>{agent.title}</h4>
              <p>{agent.description}</p>

              {/* Status badge */}
              <span className="agent-badge">{agent.badge}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .agent-showcase {
          position: relative;
          background-color: var(--bg-primary);
          overflow: hidden;
        }

        .agents-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        /* Card */
        .agent-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: 2rem;
          border-radius: 1.25rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .agent-card:hover {
          border-color: var(--text-primary);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
        }

        /* Bot icon */
        .agent-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          flex-shrink: 0;
        }

        /* Title */
        .agent-card h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.6rem;
          letter-spacing: -0.01em;
        }

        /* Description */
        .agent-card p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin: 0 0 1.25rem;
          flex: 1;
        }

        /* Status badge */
        .agent-badge {
          display: inline-block;
          align-self: flex-start;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          border-radius: 999px;
          padding: 4px 10px;
          margin-top: auto;
          white-space: nowrap;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .agents-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 540px) {
          .agents-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default AgentShowcase
