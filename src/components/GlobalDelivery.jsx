import React from 'react'
import { motion } from 'framer-motion'
import SectionWave from './SectionWave'

const GlobalDelivery = () => {
   return (
      <section className="global-delivery-section">
         <SectionWave position="top" align="left" height="80%" opacity={0.2} />
         <div className="container">
            <div className="delivery-grid">
               {/* Left Content */}
               <motion.div
                  className="delivery-content"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
               >
                  <div className="badge-row flex gap-3 mb-10">
                     <span className="badge-pill slate">• 100+ vetted developers • 20+ global clients</span>
                     <span className="badge-pill outline">Fullstack • Mobile • QA • Data • AI</span>
                  </div>

                  <h2 className="section-title">
                     Global developers for <span className="text-black">AI-native products.</span>
                  </h2>

                  <p className="section-desc">
                     Sigma AI Labs provides vetted developers, QA engineers, AI specialists and technical leaders on a <strong>monthly subscription</strong>. Scale teams up or down anytime, validate real performance inside your product, and <strong>convert engineers to full-time after 6 months</strong> through our transparent hire-to-own model.
                  </p>

                  <div className="actions-row flex items-center gap-6 mb-20">
                     <button className="btn-black-pill">Get 3 profiles in 48 hours</button>
                     <button className="btn-outline-pill">See sample roles</button>
                  </div>
 
                  <div className="stats-row flex gap-16 mb-16">
                     <div className="stat-item flex-1">
                        <span className="stat-value">100+</span>
                        <span className="stat-label">Vetted developers</span>
                     </div>
                     <div className="stat-item flex-1 border-l border-gray-100 pl-12">
                        <span className="stat-value">20+</span>
                        <span className="stat-label">Global clients</span>
                     </div>
                     <div className="stat-item flex-1 border-l border-gray-100 pl-12">
                        <span className="stat-value">48–72h</span>
                        <span className="stat-label">Avg shortlist time</span>
                     </div>
                  </div>

                  <div className="feature-badges flex flex-wrap gap-3">
                     <span className="f-badge">US & Europe time zones</span>
                     <span className="f-badge">Remote-first teams</span>
                     <span className="f-badge">Product & platform experience</span>
                  </div>
               </motion.div>

               {/* Right Card Area */}
               <motion.div
                  className="delivery-visual"
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  viewport={{ once: true }}
               >
                  <div className="glass-card">
                     <div className="card-header flex justify-between items-start mb-10">
                        <div>
                           <p className="card-tag">GLOBAL DELIVERY</p>
                           <h3 className="card-title">Distributed engineering pods</h3>
                        </div>
                        <div className="text-right">
                           <p className="card-loc">From Bengaluru</p>
                           <p className="card-loc text-gray-400">to anywhere</p>
                        </div>
                     </div>

                     <div className="inner-cards grid grid-cols-2 gap-4 mb-4">
                        <div className="inner-card">
                           <p className="inner-tag">AI & DATA</p>
                           <h4 className="inner-title">LLM / GenAI talent</h4>
                           <p className="inner-desc">RAG, vector search, prompt engineering, MLOps and production LLM pipelines.</p>
                        </div>
                        <div className="inner-card">
                           <p className="inner-tag">PRODUCT</p>
                           <h4 className="inner-title">Fullstack squads</h4>
                           <p className="inner-desc">React / Angular / Node / Java / .NET engineers embedding into your sprints.</p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* Bottom Banner */}
            <motion.div
               className="stack-banner"
               initial={{ opacity: 0, y: 24 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               viewport={{ once: true }}
            >
               <div className="stack-left">
                  <div className="settings-icon">⚙️</div>
                  <div>
                     <h3>AI & DATA STACK</h3>
                     <p>Vetted engineers across LLMs and AI infrastructure.</p>
                  </div>
               </div>
               <div className="stack-links">
                  <span>GenAI application development</span>
                  <span>RAG & vector search</span>
                  <span>LLM orchestration</span>
                  <span>Prompt engineering</span>
                  <span>MLOps</span>
                  <span>Data pipelines</span>
               </div>
            </motion.div>
         </div>

         <style jsx>{`
        .global-delivery-section {
          position: relative;
          padding: 140px 0;
          background: #fff;
          font-family: inherit;
          overflow: hidden;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .delivery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: flex-start;
          margin-bottom: 40px;
        }

        .badge-pill {
          padding: 6px 14px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .badge-pill.slate {
          background: #f1f5f9;
          color: #64748b;
        }
        .badge-pill.outline {
          border: 1px solid #e2e8f0;
          color: #94a3b8;
        }

        .section-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(3rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1;
          margin-bottom: 2.5rem;
          letter-spacing: -0.05em;
          color: #000;
        }

        .text-black {
          color: #000;
        }

        .actions-row {
          margin-bottom: 80px;
        }

        .stats-row {
          display: flex;
          gap: 60px;
          margin-bottom: 60px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          display: block;
          font-size: 3.5rem;
          font-weight: 800;
          color: #000;
          margin-bottom: 0.25rem;
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.8rem;
          color: #94a3b8;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          line-height: 1.4;
        }

        .f-badge {
          background: #fff;
          border: 1px solid #f1f5f9;
          padding: 10px 18px;
          border-radius: 6px;
          font-size: 0.85rem;
          color: #64748b;
          font-weight: 600;
        }

        /* Right Card Area */
        .glass-card {
           background: #fff;
           border: 1px solid #efefef;
           padding: 60px;
        }

        .card-tag {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: #cbd5e1;
          margin-bottom: 0.8rem;
        }
        .card-title {
          font-size: 2rem;
          font-weight: 800;
          color: #000;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }
        .card-loc {
          font-size: 0.8rem;
          font-weight: 700;
          color: #94a3b8;
        }

        .inner-card {
           padding-bottom: 24px;
           border-bottom: 1px solid #f3f4f6;
        }
        .inner-tag {
           font-size: 0.625rem;
           font-weight: 800;
           color: #94a3b8;
           margin-bottom: 0.75rem;
           letter-spacing: 0.12em;
        }
        .inner-title {
           font-size: 1.25rem;
           font-weight: 800;
           margin-bottom: 0.8rem;
           color: #000;
        }
        .inner-desc {
           font-size: 0.875rem;
           color: #64748b;
           line-height: 1.7;
        }

        .chart-box {
           margin-top: 40px;
        }
        .chart-label {
           font-size: 0.85rem;
           font-weight: 800;
           color: #000;
        }

        .bar-label {
           font-size: 0.75rem;
           color: #94a3b8;
           margin-bottom: 1rem;
           font-weight: 700;
        }
        .bar-container {
           display: flex;
           align-items: center;
           gap: 16px;
        }
        .bar-bg {
           flex-grow: 1;
           height: 8px;
           background: #f1f5f9;
           border-radius: 4px;
           overflow: hidden;
        }
        .bar {
           height: 100%;
           border-radius: 4px;
        }
        .bar.active-bar { background: #111827; }
        .bar.grey-bar { background: #cbd5e1; }
        .bar-val {
           font-size: 0.75rem;
           font-weight: 800;
           color: #94a3b8;
           min-width: 45px;
        }

        /* Banner */
        .stack-banner {
           background: #fff;
           padding: 32px 0;
           display: flex;
           align-items: center;
           justify-content: space-between;
           border-top: 1px solid #f1f5f9;
        }
        .stack-left h3 {
           font-size: 0.8rem;
           font-weight: 800;
           color: #000;
           margin-bottom: 0.4rem;
           letter-spacing: 0.1em;
        }
        .stack-left p {
           font-size: 0.75rem;
           color: #94a3b8;
        }
        .stack-links {
           display: flex;
           gap: 12px;
           flex-wrap: wrap;
           justify-content: flex-end;
        }
        .stack-links span {
           font-size: 0.75rem;
           font-weight: 700;
           color: #111827;
           padding: 6px 14px;
           border: 1px solid #efefef;
        }

        @media (max-width: 1024px) {
           .delivery-grid { grid-template-columns: 1fr; gap: 80px; }
           .section-title { font-size: 3.5rem; }
           .stack-banner { flex-direction: column; gap: 32px; align-items: flex-start; }
           .stack-links { justify-content: flex-start; }
        }
      `}</style>
      </section>
   )
}

export default GlobalDelivery
