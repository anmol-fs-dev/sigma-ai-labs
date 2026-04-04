import React from 'react'
import { Cpu, Globe, Zap, Box, Layers, ShieldCheck, Circle, Activity } from 'lucide-react'

const LogoCloud = () => {
  const logos = [
    { 
      name: 'neuraFlow', 
      icon: (
        <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M1.04165 8.6424C0.0059185 11.2006 -0.265077 14.0155 0.262973 16.7313C0.790959 19.447 2.09428 21.9416 4.00802 23.8995C5.92176 25.8574 8.36009 27.1908 11.0145 27.731C13.6691 28.2712 16.4205 27.9939 18.921 26.9343C21.4214 25.8747 23.5586 24.0802 25.0622 21.778C25.1023 21.7166 25.1419 21.6549 25.181 21.5929C25.2086 21.5492 25.236 21.5052 25.2632 21.4611V28H26.3158C29.0223 28 31.668 27.1789 33.9183 25.6405C36.1687 24.1023 37.9226 21.9157 38.9583 19.3575C39.9941 16.7994 40.2651 13.9845 39.737 11.2687C39.209 8.55301 37.9058 6.05842 35.992 4.10052C34.0782 2.14255 31.6399 0.809212 28.9855 0.269041C26.3309 -0.271195 23.5795 0.00605512 21.079 1.06569C18.5786 2.12533 16.4414 3.91976 14.9378 6.22202C14.8694 6.3268 14.8024 6.43249 14.7368 6.53891V7.99449e-06H13.6842C10.9777 7.99449e-06 8.33201 0.821109 6.08168 2.35946C3.83134 3.89774 2.07739 6.08425 1.04165 8.6424ZM12.6316 14V2.20289C10.713 2.38207 8.86244 3.04897 7.2513 4.15027C5.34714 5.45193 3.86308 7.3021 2.98668 9.46666C2.11028 11.6313 1.88098 14.0131 2.32776 16.3111C2.77454 18.609 3.87735 20.7198 5.49664 22.3765C7.116 24.0332 9.17918 25.1614 11.4253 25.6185C13.6714 26.0756 15.9995 25.841 18.1153 24.9444C20.1461 24.0838 21.8937 22.6504 23.1559 20.814C22.1993 21.2786 21.1293 21.5385 20 21.5385C15.9306 21.5385 12.6316 18.1633 12.6316 14ZM27.3684 25.7971V14C27.3684 9.83665 24.0694 6.46154 20 6.46154C18.8707 6.46154 17.8007 6.72144 16.8441 7.18602C18.1063 5.34959 19.8539 3.91614 21.8847 3.0556C24.0005 2.15898 26.3286 1.92439 28.5747 2.38148C30.8208 2.83856 32.884 3.96682 34.5034 5.62348C36.1227 7.28021 37.2255 9.391 37.6722 11.6889C38.119 13.9869 37.8897 16.3687 37.0133 18.5333C36.137 20.6979 34.6529 22.5481 32.7487 23.8497C31.1376 24.951 29.287 25.6179 27.3684 25.7971ZM19.8947 19.3836C17.0715 19.3269 14.7933 16.996 14.7379 14.1077H16.7291C18.2999 14.474 19.5365 15.739 19.8947 17.3461V19.3836ZM20.1052 19.3836C22.9284 19.3269 25.2067 16.996 25.2621 14.1077H23.2709C21.6999 14.474 20.4633 15.7392 20.1052 17.3465V19.3836ZM25.2621 13.8923C25.2067 11.004 22.9284 8.6731 20.1052 8.61644V10.6535C20.4633 12.2607 21.6998 13.5259 23.2706 13.8923H25.2621ZM19.8947 8.61644C17.0716 8.6731 14.7933 11.004 14.7379 13.8923H16.7294C18.3001 13.5259 19.5366 12.2609 19.8947 10.6539V8.61644Z" fill="#8046FD"/>
        </svg>
      ),
      type: 'brand',
      color: '#8046FD'
    },
    { 
      name: 'QUANTIX', 
      icon: null,
      type: 'wordmark',
      color: '#2563eb' // Solid Deep Blue
    },
    { 
      name: 'stratos', 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" opacity="0.2" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
          <circle cx="12" cy="12" r="3" fill="black" />
        </svg>
      ),
      type: 'brand',
      color: 'black'
    },
    { 
      name: 'LUMINA', 
      icon: (
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0C9.50659 0 1 8.50659 1 19V20.1719L4 23.1719V19C4 10.1634 11.1634 3 20 3C28.8366 3 36 10.1634 36 19V23.1719L39 20.1719V19C39 8.50659 30.4934 0 20 0ZM20 10C15.0294 10 11 14.0294 11 19V31.0498C11 31.5743 10.5743 32 10.0498 32C9.7981 31.9999 9.55691 31.8997 9.37891 31.7217L0 22.3428V26.585L7.25781 33.8428C7.99842 34.5834 9.00245 34.9999 10.0498 35C12.2312 35 14 33.2312 14 31.0498V19C14 15.6863 16.6863 13 20 13C23.3137 13 26 15.6863 26 19V31.0498C26 33.2312 27.7688 35 29.9502 35C30.9976 34.9999 32.0016 34.5834 32.7422 33.8428L34.7066 31.8785L37.7066 28.8785L40 26.585V22.3428L37.8789 24.4639L35.5854 26.7574L32.5854 29.7574L30.6211 31.7217C30.4431 31.8997 30.2019 31.9999 29.9502 32C29.4257 32 29 31.5743 29 31.0498V19C29 14.0294 24.9706 10 20 10ZM20 15C17.7909 15 16 16.7909 16 19V31.0498C16 34.3358 13.3358 37 10.0498 37C8.47201 36.9999 6.95846 36.3735 5.84277 35.2578L0 29.4141V33.6562L3.72168 37.3789C5.39997 39.0572 7.67636 39.9999 10.0498 40C14.9926 40 19 35.9926 19 31.0498V19C19 18.4477 19.4477 18 20 18C20.5523 18 21 18.4477 21 19V31.0498C21 35.9926 25.0074 40 29.9502 40C32.3236 39.9999 34.6 39.0572 36.2783 37.3789L40 33.6562V29.4141L34.1572 35.2578C33.0415 36.3735 31.528 36.9999 29.9502 37C26.6642 37 24 34.3358 24 31.0498V19C24 16.7909 22.2091 15 20 15ZM20 5C12.268 5 6 11.268 6 19V25.1719L9 28.1719V19C9 12.9249 13.9249 8 20 8C26.0751 8 31 12.9249 31 19V28.1719L34 25.1719V19C34 11.268 27.732 5 20 5Z" fill="#ff4d00"></path>
        </svg>
      ),
      type: 'brand',
      gradient: 'linear-gradient(135deg, #ff4c00 0%, #ff8300 100%)' // Bright high-vis orange
    },
    { 
      name: 'VERTEX', 
      icon: null,
      type: 'vertex', // Custom type for special brackets
      color: '#2563eb', // Royal Blue Text
      bracketColor: 'black' // Black Brackets
    },
    { 
      name: 'apex.ai', 
      icon: <Layers size={22} />,
      type: 'brand',
      color: '#777'
    },
    {
      name: 'DATEWELL',
      icon: (
        <svg width="42" height="32" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer Ring */}
          <circle cx="35" cy="40" r="32" stroke="#fdbb4b" strokeWidth="6" />
          {/* Left Figure (Coral) */}
          <circle cx="28" cy="22" r="6" fill="#f05423" />
          <path d="M12 45C12 35 28 35 28 45V72" stroke="#f05423" strokeWidth="5" strokeLinecap="round" />
          {/* Right Figure (Cyan) */}
          <circle cx="45" cy="20" r="6" fill="#58b0bc" />
          <path d="M60 45C60 35 44 35 44 45V71" stroke="#58b0bc" strokeWidth="5" strokeLinecap="round" />
        </svg>
      ),
      type: 'datewell',
      color1: '#58b0bc', // DATE (Cyan)
      color2: '#f05423'  // WELL (Coral/Orange)
    },
    {
      name: 'upcred.ai',
      icon: (
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
          <rect width="42" height="42" rx="10" fill="#22439c"/>
          {/* High-Fidelity U Shape */}
          <path d="M12 16V22C12 26.4183 15.5817 30 20 30C24.4183 30 28 26.4183 28 22V15" stroke="white" strokeWidth="5.5" strokeLinecap="round"/>
          {/* Radar Node at the top left of U */}
          <circle cx="12.5" cy="15.5" r="3.5" fill="white" stroke="#22439c" strokeWidth="1" />
          {/* 3 Signal Arcs radiating from node */}
          <path d="M16 13C17 11.5 18.5 11.5 19.5 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
          <path d="M15 10C17.5 7 21 7 23.5 10" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
          <path d="M14 7C18 3 24 3 28 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.2" />
        </svg>
      ),
      type: 'brand',
      color: '#34495e'
    }
  ]

  // Duplicate the list twice so the carousel loops seamlessly
  const track = [...logos, ...logos, ...logos]

  return (
    <section className="logo-cloud">
      <div className="centered-header">
        <p className="trusted-label">TRUSTED BY INNOVATIVE COMPANIES</p>
      </div>

      {/* Outer mask container */}
      <div className="carousel-mask">
        <div className="carousel-track">
          {track.map((logo, i) => (
            <div 
              key={i} 
              className="logo-item flex items-center gap-3" 
              style={{ 
                color: logo.color || 'inherit',
                opacity: 1 // High visibility
              }}
            >
              {logo.icon && <span className="logo-icon">{logo.icon}</span>}
              
              {logo.type === 'vertex' ? (
                <span className="logo-name flex items-center">
                  <span style={{ color: logo.bracketColor, marginRight: '4px' }}>[</span>
                  <span style={{ color: logo.color }}>VERTEX</span>
                  <span style={{ color: logo.bracketColor, marginLeft: '4px' }}>]</span>
                </span>
              ) : logo.type === 'datewell' ? (
                <span className="logo-name flex items-baseline gap-1.5 wordmark-font" style={{ fontWeight: 900 }}>
                   <span style={{ color: logo.color1 }}>DATE</span>
                   <span style={{ color: logo.color2 }}>WELL</span>
                </span>
              ) : (
                <span 
                  className={`logo-name ${logo.type === 'wordmark' ? 'wordmark-font' : ''}`}
                  style={logo.gradient ? { 
                    background: logo.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 800
                  } : {}}
                >
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .logo-cloud {
          padding-top: 40px;
          padding-bottom: 60px;
          border-bottom: 1px solid var(--border-color);
          overflow: hidden;
        }

        .centered-header {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .trusted-label {
          text-align: center;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: var(--text-tertiary);
          margin: 0;
          font-weight: 600;
        }

        /* Side fade masks */
        .carousel-mask {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .carousel-mask::before,
        .carousel-mask::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }

        .carousel-mask::before {
          left: 0;
          background: linear-gradient(to right, var(--bg-primary), transparent);
        }

        .carousel-mask::after {
          right: 0;
          background: linear-gradient(to left, var(--bg-primary), transparent);
        }

        /* Scrolling track */
        .carousel-track {
          display: flex;
          align-items: center;
          gap: 125px;
          width: max-content;
          animation: scroll-logos 44s linear infinite;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        .logo-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 16px;
          font-weight: 800;
          font-size: 1.55rem;
          letter-spacing: -0.02em;
          white-space: nowrap;
          transition: transform 0.3s ease;
        }

        .logo-icon {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .logo-name {
          letter-spacing: -0.04em;
          font-family: 'Space Grotesk', sans-serif;
        }

        .wordmark-font {
          letter-spacing: 0.05em;
          font-weight: 800;
        }

        @keyframes scroll-logos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        @media (max-width: 768px) {
          .carousel-mask::before,
          .carousel-mask::after {
            width: 60px;
          }

          .carousel-track {
            gap: 48px;
          }
        }
      `}</style>
    </section>
  )
}

export default LogoCloud
