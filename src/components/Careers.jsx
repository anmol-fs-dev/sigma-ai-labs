import React from 'react'
import { Globe, Users, Zap, Terminal, Heart, Code } from 'lucide-react'

const Careers = () => {
  const values = [
    {
      title: 'Fully remote. Always',
      desc: 'Work from wherever you do your best thinking. Your couch, a cafe in Goa, or a cabin in the mountains. We don’t care where you are, we care about what you build.',
      icon: <Globe size={20} />
    },
    {
      title: 'No micromanagement',
      desc: 'We hire smart people and trust them to figure things out. No one is watching your screen or counting your hours. You own your work, your schedule, and your outcomes.',
      icon: <Users size={20} />
    },
    {
      title: 'AI is not optional',
      desc: 'Every engineer here uses AI daily. Not as a gimmick, but as a real tool that makes us faster and sharper. If you’re not excited about building with AI, this isn’t the right place.',
      icon: <Terminal size={20} />
    },
    {
      title: 'Speed is a feature',
      desc: 'We ship weekly, not quarterly. Our clients are founders building companies, and every day matters. We move fast because we respect their time and ours.',
      icon: <Zap size={20} />
    },
    {
      title: 'Craft matters',
      desc: 'Fast doesn’t mean sloppy. We write clean code, think about edge cases, and build things that last. Quality is a habit, not a phase.',
      icon: <Code size={20} />
    },
    {
      title: 'Small team, real impact',
      desc: 'No layers of management. No pointless meetings. You work directly with clients and teammates who care. Every person here shapes the product and the company.',
      icon: <Heart size={20} />
    }
  ]

  const benefits = [
    'Work from anywhere in the world',
    'Flexible hours, async first',
    'Latest tools and AI subscriptions covered',
    'Direct access to leadership, no red tape',
    'Learning budget for courses, books, conferences',
    'Small team energy with real ownership',
    'Work on diverse, challenging projects',
    'No fake-busy culture'
  ]

  return (
    <div className="careers-page">
      <header className="container header">
        <p className="breadcrumb">/ Careers /</p>
        <h1 className="page-title">
          Build things that matter <span className="text-fade">from wherever you are</span>
        </h1>
        <p className="page-subtitle">
          We’re a small, fully remote team of engineers who build products with AI at the core. No office politics, no micromanagement, no busywork. Just smart people doing great work for founders who care about quality.
        </p>
      </header>

      <section className="honest-version container">
        <h2 className="section-label">The honest version</h2>
        <div className="honest-content">
          <p>Most companies say they’re “remote-friendly” but still expect you online 9 to 5 in someone else’s timezone. We don’t do that. We’re async first. Your calendar is yours.</p>
          <p>Most companies say they “use AI.” We actually do. Every engineer here uses AI tools daily to write better code, move faster, and solve harder problems. We build AI-native products for our clients, and we use AI to build them.</p>
          <p>We don’t have a VP of Engineering watching dashboards. We have engineers who own their work end-to-end, talk directly to clients, and ship code that they’re proud of. If you need someone looking over your shoulder, this won’t work. If you thrive with autonomy, keep reading.</p>
        </div>
      </section>

      <section className="how-we-work container">
        <h2 className="section-title">How we actually work</h2>
        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className="value-item">
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="what-we-look-for container">
        <h2 className="section-title">What we look for</h2>
        <div className="criteria-grid">
           <div className="criteria-card border-r border-b">
              <h3>You ship things</h3>
              <p>You have a track record of building real products that real people use. Side projects, startups, open source, whatever. Show us what you've made.</p>
           </div>
           <div className="criteria-card border-b">
              <h3>You think in systems</h3>
              <p>You don't just write code, you think about architecture, trade-offs, and how things will behave at scale. You see the bigger picture.</p>
           </div>
           <div className="criteria-card border-r">
              <h3>You embrace AI</h3>
              <p>You already use AI in your workflow. You're curious about new models, new tools, and new ways to build. You see AI as a multiplier, not a threat.</p>
           </div>
           <div className="criteria-card">
              <h3>You communicate clearly</h3>
              <p>Remote work runs on good communication. You write well, you speak up when something is off, and you don't wait to be asked for updates.</p>
           </div>
        </div>
      </section>

      <section className="what-you-get container">
        <h2 className="section-title">What you get</h2>
        <div className="benefits-grid">
           {benefits.map((b, i) => (
             <div key={i} className="benefit-pill">
               {b}
             </div>
           ))}
        </div>
      </section>

      <section className="cta-section container">
        <div className="cta-box">
          <h2 className="cta-title">Sound like your kind of place</h2>
          <p className="cta-desc">We’re always looking for exceptional engineers. Send us a note about what you’ve built and why you want to build with us.</p>
          <button className="btn-get-touch">Get in touch →</button>
        </div>
      </section>

      <style jsx>{`
        .careers-page {
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
          font-size: 5rem;
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -0.04em;
          margin-bottom: 2.5rem;
          max-width: 900px;
        }

        .text-fade {
          color: #9ca3af;
        }

        .page-subtitle {
          font-size: 1.25rem;
          color: #4b5563;
          max-width: 780px;
          line-height: 1.6;
          margin-bottom: 120px;
        }

        .section-label {
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 3rem;
          letter-spacing: -0.02em;
        }

        .honest-content p {
          font-size: 1.2rem;
          color: #374151;
          line-height: 1.8;
          margin-bottom: 2.5rem;
          max-width: 800px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 4rem;
          letter-spacing: -0.02em;
          padding-top: 120px;
          border-top: 1px solid #efefef;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px 40px;
          margin-bottom: 120px;
        }

        .value-item .value-icon {
          margin-bottom: 1.5rem;
          color: #111827;
        }

        .value-item h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .value-item p {
          color: #4b5563;
          line-height: 1.6;
          font-size: 1.05rem;
        }

        .criteria-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin-bottom: 120px;
        }

        .criteria-card {
           padding: 60px;
           border-color: #efefef;
        }

        .criteria-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .criteria-card p {
          color: #4b5563;
          line-height: 1.6;
          font-size: 1.1rem;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 150px;
        }

        .benefit-pill {
          background: #f9fafb;
          padding: 32px 24px;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 600;
          color: #111827;
          display: flex;
          align-items: center;
          line-height: 1.4;
        }

        .cta-section {
          padding-bottom: 150px;
        }

        .cta-box {
          text-align: center;
        }

        .cta-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
          letter-spacing: -0.04em;
        }

        .cta-desc {
          font-size: 1.15rem;
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto 3.5rem;
          line-height: 1.6;
        }

        .btn-get-touch {
          background: #000;
          color: #fff;
          padding: 20px 48px;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 1.15rem;
        }

        @media (max-width: 1024px) {
          .values-grid, .benefits-grid {
             grid-template-columns: repeat(2, 1fr);
          }
          .criteria-grid {
             grid-template-columns: 1fr;
          }
          .page-title { font-size: 3.5rem; }
        }

        @media (max-width: 640px) {
          .values-grid, .benefits-grid {
             grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default Careers
