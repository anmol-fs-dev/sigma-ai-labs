import React from 'react'

const Work = () => {
  const projects = [
    {
      title: 'Building a Secure Web Gateway Platform for a Cybersecurity Startup',
      brand: 'Dope Security',
      description: 'Dope Security, a series A funded cybersecurity startup, approached us to design a new defensive mechanism that makes the core technology of their web gateway cloud-based, next-gen and reliable.',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: "Powered Saudi Arabia's First Real Estate Trading Platform",
      brand: 'IBDAX',
      description: 'IBDAX is Saudi Arabia’s primary house-of-real-estate digital platform that facilitates property ownership exchange through a first-of-its-kind online listing-trading model developed by our engineering team.',
      category: 'Fintech',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
      reversed: true
    },
    {
      title: 'Developed a Centralized Security Management Platform for Symantec',
      brand: 'Symantec',
      description: 'Symantec came to us with a vision to build a comprehensive security management portal for their MSSP (Managed Security Service Platform) customers.',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: "Scaling Enterprise Software Development for Australia's Leading Telecom Provider",
      brand: 'Telstra (Wipro)',
      description: 'A major Australian telecommunications company hired our remote team solution to facilitate consistent scale and maintenance of their B2B.',
      category: 'Telecom',
      image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=2071&auto=format&fit=crop',
      reversed: true
    },
    {
      title: "Modernizing India's Leading Crypto Exchange: CoinDCX's Flutter Migration Success",
      brand: 'CoinDCX',
      description: 'CoinDCX is India’s major crypto platform that required a total revamp of their existing code architecture to Flutter for better performance.',
      category: 'Crypto, Fintech',
      image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop'
    },
    {
      title: 'How We Helped Brite Revolutionize Hormone Therapy Access',
      brand: 'Brite',
      description: 'By partnering with Brite, we set out to revolutionize hormone therapy access by creating a comprehensive and agile ecosystem that provides effective delivery of essential medical therapies.',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
      reversed: true
    }
  ]

  return (
    <div className="work-page">
      <header className="work-header container">
        <p className="breadcrumb">/ Work /</p>
        <h1 className="page-title">Products we’ve shipped</h1>
        <p className="page-subtitle">Real products. Real results. Here’s what happens when speed meets precision.</p>
      </header>

      <section className="projects-grid container">
        {projects.map((project, i) => (
          <div key={i} className={`project-item ${project.reversed ? 'reversed' : ''}`}>
            <div className="project-image-box">
              <img src={project.image} alt={project.brand} />
              <div className="brand-overlay">
                <span>{project.brand}</span>
              </div>
            </div>
            <div className="project-content">
              <p className="project-cat">{project.category}</p>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-desc">{project.description}</p>
              <button className="view-case">View case study →</button>
            </div>
          </div>
        ))}
      </section>

      <section className="cta-section">
        <div className="container text-center">
          <h2 className="cta-title">Want to be next?</h2>
          <button className="btn-black-pill">Start a project →</button>
        </div>
      </section>

      <style jsx>{`
        .work-page {
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
          max-width: 800px;
        }

        .page-subtitle {
          font-size: 1.25rem;
          color: #6b7280;
          max-width: 600px;
          line-height: 1.6;
          margin-bottom: 5rem;
        }

        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 120px;
          margin-bottom: 120px;
        }

        .project-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .project-item.reversed {
          direction: rtl;
        }

        .project-item.reversed .project-content {
          direction: ltr;
        }

        .project-image-box {
          position: relative;
          aspect-ratio: 16/10;
          border-radius: 4px;
          overflow: hidden;
          background: #f3f4f6;
        }

        .project-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.5s ease;
        }

        .project-item:hover .project-image-box img {
          filter: grayscale(30%);
        }

        .brand-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.2);
        }

        .brand-overlay span {
          color: #fff;
          font-size: 3.5rem;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .project-cat {
          font-size: 0.85rem;
          font-weight: 600;
          color: #f97316;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-title {
          font-size: 2.25rem;
          line-height: 1.3;
          font-weight: 700;
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
        }

        .project-desc {
          font-size: 1.125rem;
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 520px;
        }

        .view-case {
          background: none;
          border: none;
          font-weight: 700;
          font-size: 1.1rem;
          color: #111827;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: gap 0.2s ease;
        }

        .view-case:hover {
          gap: 12px;
        }

        .cta-section {
          padding: 120px 0;
          border-top: 1px solid #e5e7eb;
        }

        .cta-title {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 3rem;
          letter-spacing: -0.04em;
        }

        .btn-black-pill {
          background: #111827;
          color: white;
          padding: 20px 48px;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 1.15rem;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .btn-black-pill:hover {
          background: #000;
          transform: scale(1.02);
        }

        @media (max-width: 1024px) {
          .project-item {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .page-title {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Work
