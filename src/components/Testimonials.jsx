import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Sigma AI Labs completely transformed how we build products. Their agentic workflows cut our development time in half.",
      author: "Jane Doe",
      role: "CEO at TechFlow",
      image: "https://i.pravatar.cc/100?u=jane"
    },
    {
      quote: "The quality of code produced by their AI-human hybrid team is exceptional. Scalability was never an issue.",
      author: "John Smith",
      role: "CTO at CloudScale",
      image: "https://i.pravatar.cc/100?u=john"
    }
  ]

  return (
    <section className="testimonials section-padding bg-secondary">
      <div className="container">
        <SectionHeader 
          centered={false}
          title="Don't take our word for it" 
          subtitle="Hear from the founders and companies we've helped scale with AI."
        />

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="quote-content">
                <p>"{t.quote}"</p>
              </div>
              <div className="author-info flex items-center gap-4">
                <img src={t.image} alt={t.author} className="author-avatar" />
                <div>
                  <h4>{t.author}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
        }

        .testimonial-card {
          background-color: var(--bg-primary);
          padding: 3rem;
          border-radius: 0;
          border: 1px solid var(--border-color);
          box-shadow: 0 10px 40px rgba(0,0,0,0.02);
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          border-color: var(--text-primary);
        }

        .quote-content p {
          font-size: 1.25rem;
          font-style: italic;
          color: var(--text-primary);
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        h4 {
          font-size: 1.125rem;
          margin-bottom: 0.125rem;
        }

        .author-info p {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Testimonials
