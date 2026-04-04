import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const projects = [
  {
    tag: 'AI-Powered SaaS',
    title: 'Project Alpha',
    description: 'A full-stack SaaS platform with AI-driven recommendations and real-time analytics, shipped in 8 weeks.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    tag: 'Agentic Automation',
    title: 'Beta Flow',
    description: 'End-to-end agentic workflow automation that reduced manual ops time by 70% for a logistics startup.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    tag: 'Data Intelligence',
    title: 'Gamma Analytics',
    description: 'A real-time data intelligence dashboard with LLM-powered natural language querying built for enterprise teams.',
    image: 'https://images.unsplash.com/photo-1543286386-216c933c9d6b?auto=format&fit=crop&w=800&q=80',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section-padding">
      <div className="container">
        <SectionHeader
          centered={false}
          title="Products we've actually shipped"
          subtitle="Real results for real companies. No fluff, just high-performance code."
        />

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="portfolio-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.55, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {/* Image — sharp corners */}
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
              </div>

              {/* Text box underneath */}
              <div className="portfolio-caption">
                <span className="portfolio-tag">{project.tag}</span>
                <h4 className="portfolio-title">{project.title}</h4>
                <p className="portfolio-desc">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .portfolio section-padding {
          background-color: var(--bg-primary);
        }

        /* 3-column grid */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        /* Each item: image + caption stacked */
        .portfolio-item {
          display: flex;
          flex-direction: column;
        }

        /* Image box — NO border-radius */
        .portfolio-image {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 0;
          background-color: var(--bg-secondary);
        }

        .portfolio-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          display: block;
        }

        .portfolio-item:hover .portfolio-image img {
          transform: scale(1.05);
        }

        /* Caption box */
        .portfolio-caption {
          padding: 1.25rem 0 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        /* Tag */
        .portfolio-tag {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-tertiary, #aaa);
        }

        /* Project headline */
        .portfolio-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          margin: 0;
          line-height: 1.25;
        }

        /* Project description */
        .portfolio-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 540px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Portfolio
