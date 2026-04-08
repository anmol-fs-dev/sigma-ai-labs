import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { caseStudies } from '../data/caseStudies'

const CaseStudy = () => {
  const { id } = useParams()
  
  const study = caseStudies.find(c => c.id === id)
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!study) {
    return (
      <div className="not-found container">
        <h2>Case study not found</h2>
        <Link to="/work" className="btn-black-pill mt-4 block w-max">Back to Work</Link>
      </div>
    )
  }

  return (
    <div className="case-study-page">
      <header className="cs-hero container">
        <p className="breadcrumb">
          <Link to="/work">/ Work</Link> / {study.brand} /
        </p>
        <div className="cs-hero-content">
          <motion.p 
            className="cs-cat"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {study.category}
          </motion.p>
          <motion.h1 
            className="cs-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {study.title}
          </motion.h1>
        </div>
      </header>

      <motion.div 
        className="cs-hero-image container"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
      >
        <img src={study.image} alt={study.brand} />
      </motion.div>

      <section className="cs-body container">
        <div className="cs-grid">
          
          <div className="cs-sidebar">
             <div className="sticky-sidebar">
               <h3>Client</h3>
               <p>{study.brand}</p>
               <h3>Industry</h3>
               <p>{study.category}</p>
               <h3>Services</h3>
               <ul>
                 <li>Engineering</li>
                 <li>Architecture</li>
                 <li>UX/UI Design</li>
               </ul>
             </div>
          </div>

          <div className="cs-content">
            <motion.div 
              className="content-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2>Project Overview</h2>
              <p>{study.overview}</p>
            </motion.div>

            <motion.div 
              className="content-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2>The Challenge</h2>
              <p>{study.challenge}</p>
            </motion.div>

            <motion.div 
              className="content-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2>Strategic Approach</h2>
              <p>{study.approach}</p>
            </motion.div>

            <motion.div 
              className="content-block bg-slate box-pad"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2>MVP Development</h2>
              <p>{study.mvp}</p>
            </motion.div>

            <motion.div 
              className="content-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2>Technical Implementation</h2>
              <p>{study.technical}</p>
            </motion.div>

            <motion.div 
              className="content-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2>Development Methodology</h2>
              <p>{study.methodology}</p>
            </motion.div>

            <motion.div 
              className="content-block callout"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2>Result and Impact</h2>
              <p>{study.results}</p>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center">
          <h2 className="cta-title">Ready to build your own?</h2>
          <Link to="/services" className="btn-black-pill inline-block">See our services →</Link>
        </div>
      </section>

      <style jsx>{`
        .case-study-page {
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

        .not-found {
          padding: 200px 0;
          text-align: center;
        }

        .breadcrumb {
          font-size: 0.85rem;
          color: #6b7280;
          margin-bottom: 2rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .breadcrumb a {
          color: #000;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .breadcrumb a:hover {
          color: #6b7280;
        }

        .cs-hero {
          margin-bottom: 4rem;
        }

        .cs-cat {
          font-size: 0.9rem;
          font-weight: 700;
          color: #f97316;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 1.5rem;
        }

        .cs-title {
          font-size: clamp(3.5rem, 5vw, 5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.04em;
          max-width: 1000px;
          color: #111827;
        }

        .cs-hero-image {
          margin-bottom: 100px;
        }

        .cs-hero-image img {
          width: 100%;
          height: auto;
          max-height: 700px;
          object-fit: cover;
          border-radius: 4px;
          background: #f1f5f9;
        }

        .cs-body {
          margin-bottom: 150px;
        }

        .cs-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 100px;
          align-items: start;
        }

        .sticky-sidebar {
          position: sticky;
          top: 120px;
        }

        .sticky-sidebar h3 {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #94a3b8;
          margin-bottom: 0.5rem;
        }

        .sticky-sidebar p {
          font-size: 1.1rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 2rem;
        }

        .sticky-sidebar ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sticky-sidebar li {
          font-size: 1.05rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.75rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #f1f5f9;
        }

        .content-block {
          margin-bottom: 80px;
        }

        .content-block h2 {
          font-size: 2.2rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 2rem;
          letter-spacing: -0.03em;
        }

        .content-block p {
          font-size: 1.25rem;
          line-height: 1.8;
          color: #4b5563;
        }

        .bg-slate {
          background: #f8fafc;
          border-radius: 8px;
        }

        .box-pad {
          padding: 60px;
        }

        .callout {
          padding-left: 40px;
          border-left: 4px solid #111827;
        }

        .cta-section {
          padding: 120px 0;
          background: #fafafa;
          border-top: 1px solid #e5e7eb;
        }

        .cta-title {
          font-size: 3.5rem;
          font-weight: 800;
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
          text-decoration: none;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .btn-black-pill:hover {
          background: #000;
          transform: scale(1.02);
        }

        @media (max-width: 1024px) {
          .cs-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          
          .sticky-sidebar {
            position: relative;
            top: 0;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            padding-bottom: 40px;
            border-bottom: 1px solid #e5e7eb;
          }
          
          .sticky-sidebar p {
            margin-bottom: 0;
          }
          .box-pad {
             padding: 40px;
          }
        }

        @media (max-width: 768px) {
          .sticky-sidebar {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default CaseStudy
