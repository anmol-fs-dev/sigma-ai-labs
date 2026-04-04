import React from 'react'
import { motion } from 'framer-motion'
import ThreeWave from './ThreeWave'

const Hero = () => {
  return (
    <section className="hero">
      <ThreeWave />
      <div className="container">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            The humans<br />
            <span className="text-muted">(and AI agents)</span><br />
            behind your next product
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            You've got the idea, the customers, and the ambition. What you don't have is someone you trust to build the technology behind it. That's where we come in, as your technical partner from day one.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button className="btn-black-pill">
              Let's talk about your product &nbsp; →
            </button>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          padding-top: 220px;
          padding-bottom: 180px;
          background-color: var(--bg-primary);
          overflow: hidden;
          min-height: 90vh;
          display: flex;
          align-items: center;
        }

        .container {
          position: relative;
          z-index: 10;
        }

        .hero-content {
          width: 100%;
          margin-left: 0;
          text-align: left;
        }

        h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(3.5rem, 8vw, 6rem);
          line-height: 0.95;
          margin-bottom: 2.5rem;
          color: var(--text-primary);
          font-weight: 700;
          letter-spacing: -0.06em;
        }

        .text-muted {
          color: #999;
        }

        p {
          font-size: 1.15rem;
          color: #666;
          margin-bottom: 3.5rem;
          max-width: 540px;
          line-height: 1.6;
        }

        .hero-actions {
          justify-content: flex-start;
        }

        @media (max-width: 640px) {
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          
          .btn {
            width: 100%;
          }
          
          .hero {
            padding-top: 160px;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
