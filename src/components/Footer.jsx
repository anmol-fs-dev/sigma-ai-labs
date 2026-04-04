import React from 'react'
import SectionWave from './SectionWave'

const Footer = () => {
  const navigateLinks = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" }
  ]

  const legalLinks = [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" }
  ]

  return (
    <footer className="footer bg-white">
      <SectionWave position="bottom" height="120%" opacity={0.4} />
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="logo-section flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4L28 16L16 28L4 16L16 4Z" fill="black" />
                <path d="M16 10L22 16L16 22L10 16L16 10Z" fill="white" />
              </svg>
              <h3 className="brand-name">Sigma AI Labs</h3>
            </a>
            <p className="brand-desc">
              Sigma AI Labs builds AI systems for enterprises — from multi-agent workflows and LLM integrations in full-stack applications to team augmentation. Based out of Bangalore, India. Serving clients across the US, UK, and the Middle East.
            </p>
          </div>

          <div className="footer-links-container">
            <div className="link-group">
              <h4>Navigate</h4>
              <ul>
                {navigateLinks.map((link, i) => (
                  <li key={i}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>

            <div className="link-group">
              <h4>Legal</h4>
              <ul>
                {legalLinks.map((link, i) => (
                  <li key={i}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; 2026 Sigma AI Labs. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          padding: 5rem 0 3rem;
          border-top: 1px solid #eee;
          background-color: #fff;
          color: #333;
          overflow: hidden;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 4rem;
          gap: 4rem;
        }

        .footer-brand {
          max-width: 400px;
        }

        .logo-section {
          margin-bottom: 1.5rem;
        }

        .brand-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #000;
          margin: 0;
        }

        .brand-desc {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #666;
        }

        .footer-links-container {
          display: flex;
          gap: 6rem;
        }

        .link-group h4 {
          font-size: 0.9375rem;
          font-weight: 700;
          color: #000;
          margin-bottom: 1.5rem;
        }

        .link-group ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-group li {
          margin-bottom: 1rem;
        }

        .link-group a {
          font-size: 0.9375rem;
          color: #666;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .link-group a:hover {
          color: #000;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid #eee;
        }

        .copyright {
          font-size: 0.8125rem;
          color: #999;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            gap: 3rem;
          }
          
          .footer-links-container {
            width: 100%;
            justify-content: space-between;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
