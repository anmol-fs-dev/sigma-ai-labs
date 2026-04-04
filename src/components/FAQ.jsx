import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionHeader from './SectionHeader'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question flex items-center justify-between" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .faq-item {
          border-bottom: 1px solid var(--border-color);
        }

        .faq-question {
          width: 100%;
          padding: 2rem 0;
          text-align: left;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .faq-answer {
          overflow: hidden;
        }

        .faq-answer p {
          padding-bottom: 2rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 800px;
        }
      `}</style>
    </div>
  )
}

const FAQ = () => {
  const faqs = [
    { question: "How does Sigma AI Labs work with our existing team?", answer: "We integrate seamlessly with your current workflows. Our human engineers act as lead consultants, while our AI agents handle high-bandwidth tasks as directed by your team." },
    { question: "What is your typical project timeline?", answer: "Project timelines vary, but we typically deliver high-fidelity prototypes in 2-4 weeks and full-scale product launches in 8-12 weeks." },
    { question: "Do you offer post-launch support?", answer: "Yes, we provide continuous monitoring, performance optimization, and regular AI agent updates to ensure your product stays at the cutting edge." },
    { question: "Can you build custom AI models for our business?", answer: "Absolutely. We specialize in custom LLM fine-tuning and agentic framework design tailored to specific corporate datasets and logic." }
  ]

  return (
    <section id="faq" className="faq section-padding">
      <div className="container">
        <SectionHeader 
          title="Quartzfolio is always evolving" 
          subtitle="Everything you need to know about working with us."
        />

        <div className="faq-container">
          {faqs.map((f, i) => (
            <FAQItem key={i} question={f.question} answer={f.answer} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq-container {
          max-width: 900px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  )
}

export default FAQ
