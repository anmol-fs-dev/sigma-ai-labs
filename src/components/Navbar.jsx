import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-nav flex items-center justify-between">
        <a href="/" className="logo-section flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4L28 16L16 28L4 16L16 4Z" fill="black" />
            <path d="M16 10L22 16L16 22L10 16L16 10Z" fill="white" />
          </svg>
          <span className="logo-text">Sigma AI Labs</span>
        </a>

        <ul className="nav-links flex gap-8">
          <li><a href="/work">Work</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul>

        <div className="nav-actions-right flex items-center gap-6">
          <button className="btn-black-pill">Start a project</button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 90px;
          display: flex;
          align-items: center;
          z-index: 1000;
          background-color: transparent;
          transition: var(--transition-smooth);
        }

        .navbar.scrolled {
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          height: 75px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .container-nav {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .logo-text {
          font-weight: 700;
          font-size: 1.5rem;
          letter-spacing: -0.04em;
          color: #111827;
        }

        .nav-links a {
          font-weight: 500;
          font-size: 0.9375rem;
          color: #6b7280;
        }

        .nav-links a:hover {
          color: #111827;
        }

        .badge-new {
          background: #111827;
          color: white;
          font-size: 0.625rem;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }

        .nav-actions-right {
          display: flex;
          align-items: center;
        }

        .search-box {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          padding: 8px 12px;
          border-radius: 12px;
          cursor: pointer;
          min-width: 160px;
        }

        .search-placeholder {
          font-size: 0.875rem;
          color: #9ca3af;
          flex-grow: 1;
        }

        .shortcut {
          display: flex;
          align-items: center;
          gap: 2px;
          background: white;
          border: 1px solid #e5e7eb;
          padding: 2px 6px;
          border-radius: 6px;
          font-size: 0.75rem;
          color: #9ca3af;
          font-weight: 600;
        }

        .btn-black-pill {
          background: #000;
          color: #fff;
          padding: 12px 24px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.9375rem;
          transition: transform 0.2s ease;
        }

        .btn-black-pill:hover {
          transform: scale(1.02);
        }

        @media (max-width: 1024px) {
          .nav-links, .search-box {
            display: none;
          }
        }
      `}</style>
    </motion.nav>
  )
}

export default Navbar
