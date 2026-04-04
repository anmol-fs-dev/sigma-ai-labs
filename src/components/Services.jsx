import React from 'react'
import { Check } from 'lucide-react'

const Services = () => {
  const serviceCategories = [
    {
      id: '01',
      title: 'Full Product Engineering',
      desc: 'Whether you have a seed-stage concept or a scaling product, we take your vision and build it into a high-end, responsive platform with high efficiency and premium design at every touchpoint.',
      footnote: 'Ideal for: Startups and enterprises looking to build from scratch or overhaul current platforms.',
      features: [
        'End-to-End Product Roadmap',
        'Full Stack Architecture',
        'Frontend Design & Development',
        'Backend Infrastructure Optimization',
        'Cloud-Native Deployments',
        'CTO-as-a-Service',
        'Launch & Scale Strategy'
      ]
    },
    {
      id: '02',
      title: 'AI Native Development',
      desc: 'Everything built to be powered by intelligence. We develop multi-agent workflows, automated agents, and custom AI systems designed to scale with your business while reducing operational overhead.',
      footnote: 'Ideal for: Operations looking to automate workflows and create custom LLM based applications.',
      features: [
        'LLM Logic Orchestration',
        'Large Language Applications',
        'Custom Assistant & Chatbot Dev',
        'Background Task Automation',
        'Real-Time Intelligence Delivery',
        'Semantic Search Engines',
        'Personalized AI interfaces'
      ]
    },
    {
      id: '03',
      title: 'AI Integration',
      desc: 'Tired of manually managing mundane tasks while your data sits idle? We integrate AI layers directly into your existing infrastructure to optimize every process from within.',
      footnote: 'Ideal for: Existing large-scale web/mobile platforms ready for an intelligence-driven upgrade.',
      features: [
        'Retrieval Augmented Generation(RAG)',
        'Model Fine-Tuning (Open & Proprietary)',
        'AI-Infused Content Recommendation',
        'Automated Quality Assurance Layer',
        'Data Extraction & Analysis',
        'Predictive Dashboards',
        'Performance Optimization'
      ]
    },
    {
      id: '04',
      title: 'Remote Team Augmentation',
      desc: 'Fast-track your roadmap without the friction of conventional hiring. We provide high-end, vetted engineers and developers that integrate seamlessly with your existing structure.',
      footnote: 'Ideal for: Companies looking to scale their engineering teams without long-term overhead.',
      features: [
        'Elite Cloud Experts & Engineers',
        'Full Stack & Specialized Developers',
        'Your dedicated project team',
        'Flexible scaling solution',
        'Seamless operational flow',
        'Direct communication',
        'Long-term Partnership'
      ]
    },
    {
      id: '05',
      title: 'Agent Engineering',
      desc: 'We build and deploy specialized AI agents that function as 24/7 autonomous digital workers. These agents manage complex tasks, from customer service to data-heavy analytical research.',
      footnote: 'Ideal for: Systems looking to gain autonomous capability and high-speed delivery of complex workflows.',
      features: [
        'AI Agent Architecture Strategy',
        'Autonomous Worker Groups',
        'State-driven Intelligence',
        'Multi-Agent System Orchestration',
        'Custom tool integration',
        'Long-term memory architecture',
        'Advanced logic-driven reasoning'
      ]
    }
  ]

  return (
    <div className="services-page">
      <header className="container header">
        <p className="breadcrumb">/ Services / </p>
        <h1 className="page-title">How we can help</h1>
        <p className="page-subtitle">Whether you're after a full product team, AI integrations, or scale your engineering capacity, we take on build on what you need first.</p>
      </header>

      <div className="services-list container">
        {serviceCategories.map((s, i) => (
          <div key={i} className="service-row">
            <div className="service-left">
              <span className="service-id">{s.id}</span>
              <h2 className="service-title">{s.title}</h2>
              <p className="service-desc">{s.desc}</p>
              <p className="service-footnote">{s.footnote}</p>
              <button className="learn-more">Learn more →</button>
            </div>
            <div className="service-right">
              <div className="includes-box">
                <h4 className="includes-title">WHAT'S INCLUDED</h4>
                <ul className="feature-list">
                  {s.features.map((f, idx) => (
                    <li key={idx}>
                      <Check size={14} className="check-icon" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="consultation container">
        <div className="consultation-box">
          <h2 className="consult-title">Not sure which is right for you</h2>
          <p className="consult-desc">Each business setup flows differently. We provide a full audit of what you might be looking into based on stage, scale, and specific industry compliance.</p>
          <button className="btn-book">Book a call →</button>
        </div>
      </section>

      <style jsx>{`
        .services-page {
          padding-top: 180px;
          background-color: #fff;
          color: #000;
          font-family: 'Space Grotesk', sans-serif;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .breadcrumb {
          font-size: 0.85rem;
          color: #6b7280;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .page-title {
          font-size: 4.5rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          margin-bottom: 2.5rem;
        }

        .page-subtitle {
          font-size: 1.25rem;
          color: #6b7280;
          max-width: 700px;
          line-height: 1.6;
          margin-bottom: 80px;
        }

        .services-list {
          display: flex;
          flex-direction: column;
          gap: 60px;
          margin-bottom: 120px;
        }

        .service-row {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 80px;
          padding: 80px 0;
          border-top: 1px solid #efefef;
        }

        .service-id {
          font-size: 0.85rem;
          font-weight: 600;
          color: #6b7280;
          display: block;
          margin-bottom: 1.5rem;
        }

        .service-title {
          font-size: 2.25rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 2rem;
        }

        .service-desc {
          font-size: 1.15rem;
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 540px;
        }

        .service-footnote {
          font-size: 0.95rem;
          color: #9ca3af;
          margin-bottom: 2.5rem;
          line-height: 1.5;
        }

        .learn-more {
          background: none;
          border: none;
          font-weight: 700;
          font-size: 1rem;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .includes-box {
          background: #f9fafb;
          padding: 48px;
          border-radius: 4px;
        }

        .includes-title {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #111827;
          margin-bottom: 2.5rem;
          text-transform: uppercase;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 1rem;
          font-weight: 500;
          color: #374151;
        }

        .check-icon {
          color: #2563eb;
          margin-top: 4px;
        }

        .consultation {
          margin-bottom: 120px;
        }

        .consultation-box {
          background: #f3f4f6;
          padding: 100px;
          border-radius: 12px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .consult-title {
          font-size: 3.5rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 2.5rem;
        }

        .consult-desc {
          font-size: 1.25rem;
          color: #4b5563;
          max-width: 700px;
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .btn-book {
          background: #000;
          color: #fff;
          padding: 18px 42px;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 1.1rem;
        }

        @media (max-width: 1024px) {
          .service-row {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .page-title {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Services
