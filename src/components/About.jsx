import React, { useState } from 'react'
import { ChevronDown, Plus, Minus } from 'lucide-react'

const About = () => {
  const [openFaq, setOpenFaq] = useState(0)

  const faqs = [
    {
      q: "I'm not technical. Will I understand what's happening?",
      a: "Absolutely. We pride ourselves on clear, non-technical communication. You'll receive weekly updates and prototypes that you can actually use and test, not just spreadsheets of tasks."
    },
    {
      q: "How do I know the code will actually be good?",
      a: "We follow industry-standard best practices: clean code, comprehensive testing, and peer reviews. You own all the intellectual property from day one."
    },
    {
      q: "Won't this just become garbage code?",
      a: "No. We build with scalability in mind. Our architecture is modular, meaning it can be easily updated or scaled as your user base grows."
    },
    {
      q: "How are you able to build so quickly?",
      a: "We have a pre-built internal toolkit and a battle-tested workflow that allows us to focus 100% of our time on your unique features rather than reinventing the wheel."
    },
    {
      q: "What is your typical project timeline?",
      a: "Varies by scope, but most MVPs are shipped in 8-12 weeks. We work in 2-week sprints to ensure continuous delivery."
    },
    {
      q: "What if I need to make changes along the way?",
      a: "We are agile. We expect and plan for changes. Our process is designed to pivot quickly based on user feedback or market shifts."
    },
    {
      q: "What happens after launch?",
      a: "We don't just disappear. We offer ongoing maintenance and 'v2' development packages to ensure your product continues to evolve."
    },
    {
      q: "How exactly are you paid?",
      a: "We typically work on a fixed-fee per project or a monthly retainer model, depending on the predictability of the scope."
    }
  ]

  return (
    <div className="about-page">
      <header className="container header">
        <p className="breadcrumb">/ About / </p>
        <h1 className="page-title">Sigma AI Labs — AI engineers who care about your success</h1>
        <p className="page-subtitle">
          Sigma AI Labs is an AI product engineering agency based in Bangalore, India that designs, builds, and deploys enterprise-grade AI systems for US-based companies. We specialize in multi-agent AI architectures, LLM-powered applications, AI governance platforms, and clinical AI solutions. Our 25-person team partners with enterprise and mid-level clients to take AI from proof-of-concept to production — delivering measurable business outcomes through custom-built AI products, not off-the-shelf implementations.
        </p>
      </header>

      <section className="what-we-do container">
        <h2 className="section-label">What We Do</h2>
        <p className="sub-label">Our core service areas</p>
        <div className="services-grid">
           <div className="service-card">
              <h3>Enterprise AI Development</h3>
              <p>We design and build custom AI systems for enterprise clients, including LLM-powered applications, intelligent automation, and data pipelines that integrate with existing infrastructure.</p>
           </div>
           <div className="service-card">
              <h3>Multi-Agent AI Systems</h3>
              <p>We architect and deploy multi-agent AI workflows using LangChain, CrewAI, and Autogen to automate complex tasks, enabling autonomous, coordinated AI operations at enterprise scale.</p>
           </div>
           <div className="service-card">
              <h3>AI Governance and Observability</h3>
              <p>Through our Magna platform, we help companies monitor their AI, and govern their AI systems, providing compliance-ready observability across LLM and agent deployments.</p>
           </div>
           <div className="service-card">
              <h3>AI Product Engineering</h3>
              <p>From initial scope to building the first product, we provide full-stack engineering, from architecture and MVP development through to production maintenance and scale.</p>
           </div>
        </div>
      </section>

      <section className="our-story container">
        <div className="story-content">
          <h2 className="story-title">Our story</h2>
          <p>Sigma AI Labs started from a simple observation. After years of watching founders navigate the challenges of slow agencies, inconsistent freelancers, and the difficult task of hiring experienced engineers, we saw an opportunity to do better.</p>
          <p>So we built something different. A small team of engineers who've worked for Fortune 500s and hyper-scale startups. People who've shipped products used by millions and helped companies grow from early stage to scale.</p>
          <p>We stay small intentionally. It means we can be responsive, flexible, and personally invested in every project. The people you talk to are the people doing the work, and we genuinely care about what we build together.</p>
        </div>
        <div className="story-image-box">
           <div className="placeholder-sl">SL</div>
        </div>
      </section>

      <section className="how-we-work container">
        <h2 className="how-title">How we work</h2>
        <div className="values-grid">
           <div className="value-item">
              <h3>Speed with care</h3>
              <p>We believe in moving quickly, but thoughtfully. Every week matters when you're building a company, and we take that seriously.</p>
           </div>
           <div className="value-item">
              <h3>Experienced team</h3>
              <p>Everyone on our team has a significant amount of experience. You work directly with the people doing the work. No layers in between.</p>
           </div>
           <div className="value-item">
              <h3>True partnership</h3>
              <p>We see ourselves as partners, not vendors. We'll ask questions, offer suggestions, and care about your outcomes as much as you do.</p>
           </div>
           <div className="value-item">
              <h3>Open communication</h3>
              <p>Daily updates. Weekly demos. No surprises. We believe in transparency and keeping you informed every step of the way.</p>
           </div>
        </div>
      </section>

      <section className="faq container">
        <div className="faq-layout">
          <div className="faq-left">
            <h2 className="faq-title">Questions founders always ask</h2>
            <p className="faq-subtitle">We've heard these hundreds of times. Here are the straight answers, no spin, no marketing fluff.</p>
          </div>
          <div className="faq-right">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                 <div className="faq-question">
                    <span>{f.q}</span>
                    {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                 </div>
                 <div className="faq-answer">
                    <p>{f.a}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta container">
         <div className="cta-box">
           <h2 className="cta-title">Interested in working together</h2>
           <button className="btn-convo">Start a conversation →</button>
         </div>
      </section>

      <style jsx>{`
        .about-page {
          padding-top: 180px;
          background: #fff;
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
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -0.04em;
          margin-bottom: 3rem;
          max-width: 1000px;
        }

        .page-subtitle {
          font-size: 1.25rem;
          color: #4b5563;
          max-width: 900px;
          line-height: 1.7;
          margin-bottom: 120px;
        }

        /* What We Do */
        .what-we-do {
          margin-bottom: 150px;
        }
        .section-label {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .sub-label {
          font-size: 1.1rem;
          color: #6b7280;
          margin-bottom: 4rem;
        }
        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px 100px;
        }
        .service-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        .service-card p {
          color: #4b5563;
          line-height: 1.6;
          font-size: 1.05rem;
        }

        /* Our Story */
        .our-story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          padding: 120px 0;
          border-top: 1px solid #efefef;
          align-items: center;
        }
        .story-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
        }
        .story-content p {
          font-size: 1.15rem;
          color: #374151;
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        .story-image-box {
          aspect-ratio: 1;
          background: #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .placeholder-sl {
          font-size: 5rem;
          font-weight: 800;
          color: #111827;
        }

        /* How we work */
        .how-we-work {
          margin-bottom: 150px;
          padding-top: 120px;
          border-top: 1px solid #efefef;
        }
        .how-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 5rem;
        }
        .values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px 100px;
        }
        .value-item h3 {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .value-item p {
          color: #4b5563;
          line-height: 1.6;
        }

        /* FAQ */
        .faq {
          padding: 150px 0;
          border-top: 1px solid #efefef;
        }
        .faq-layout {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 100px;
        }
        .faq-title {
          font-size: 3rem;
          line-height: 1.2;
          font-weight: 700;
          margin-bottom: 2rem;
        }
        .faq-subtitle {
          font-size: 1.1rem;
          color: #6b7280;
          line-height: 1.6;
        }
        .faq-item {
          border-bottom: 1px solid #efefef;
          padding: 30px 0;
          cursor: pointer;
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.25rem;
          font-weight: 700;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          opacity: 0;
        }
        .faq-item.open .faq-answer {
          max-height: 200px;
          opacity: 1;
          padding-top: 20px;
        }
        .faq-answer p {
          color: #4b5563;
          line-height: 1.7;
          font-size: 1.1rem;
        }

        /* Final CTA */
        .final-cta {
          margin-bottom: 150px;
        }
        .cta-box {
          text-align: center;
        }
        .cta-title {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 3.5rem;
          letter-spacing: -0.04em;
        }
        .btn-convo {
          background: #000;
          color: #fff;
          padding: 20px 48px;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 1.15rem;
        }

        @media (max-width: 1024px) {
          .page-title { font-size: 3rem; }
          .services-grid, .our-story, .values-grid, .faq-layout {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }
      `}</style>
    </div>
  )
}

export default About
