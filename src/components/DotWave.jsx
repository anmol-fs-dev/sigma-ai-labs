import React, { useRef, useEffect } from 'react'

const DotWave = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationFrameId
        let time = 0

        // Increased density: More particles for the 75% height coverage
        const SEPARATION = 48, AMOUNTX = 95, AMOUNTY = 42
        let particles = []

        // Gerstner Wave Parameters (Directional Vectors, Amplitude, Wavelength, Speed)
        const WAVES = [
            { dir: [1, 0.2], amp: 14, len: 450, speed: 1.2 },    // Primary swell
            { dir: [-0.6, 0.4], amp: 8, len: 180, speed: 0.8 },  // Vertical chop
            { dir: [0.3, 0.9], amp: 6, len: 120, speed: 1.5 },   // Fast ripples
            { dir: [-1, -0.3], amp: 4, len: 250, speed: 0.5 }    // Gentle backwash
        ].map(w => {
            const mag = Math.sqrt(w.dir[0]**2 + w.dir[1]**2)
            return {
                ...w,
                dir: [w.dir[0] / mag, w.dir[1] / mag],
                k: (Math.PI * 2) / w.len,
                wSpeed: w.speed * 0.04
            }
        })

        const init = () => {
            const dpr = window.devicePixelRatio || 1
            const width = canvas.offsetWidth
            const height = canvas.offsetHeight
            
            // HiDPI Scaling for sub-pixel anti-aliasing (fixes Moiré/rays)
            canvas.width = width * dpr
            canvas.height = height * dpr
            ctx.scale(dpr, dpr)
            
            particles = []
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    const ox = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 )
                    const oz = (iy * SEPARATION * 0.5) - ( ( AMOUNTY * SEPARATION * 0.5 ) / 2 )
                    
                    particles.push({
                        ox, oz, ix, iy,
                        // Static Jitter: Breaks up the perfect grid to prevent radiating perspective lines
                        jx: (Math.random() - 0.5) * 8,
                        jz: (Math.random() - 0.5) * 8
                    })
                }
            }
        }

        const render = () => {
            const dpr = window.devicePixelRatio || 1
            ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)
            
            const width = canvas.width / dpr
            const height = canvas.height / dpr
            const centerX = width / 2
            const centerY = height * 0.7 // Adjusted horizontal center for 75% height coverage

            particles.forEach((p) => {
                // Wave Intensity Gradient (Fade towards the top/horizon)
                const intensity = Math.pow(p.iy / AMOUNTY, 1.6) 

                // --- Multi-Directional Gerstner Wave Calculations ---
                // P' = P + sum( dir * amp * cos(k * (dir · P) + speed * time) )
                // Y' = sum( amp * sin(k * (dir · P) + speed * time) )
                
                let dx = 0, dy = 0, dz = 0
                const q = 1.0 // Steepness factor

                WAVES.forEach(w => {
                    const phase = w.k * (w.dir[0] * (p.ox + p.jx) + w.dir[1] * (p.oz + p.jz)) - (time * w.wSpeed)
                    const c = Math.cos(phase)
                    const s = Math.sin(phase)
                    
                    // Circular orbit displacement (Gerstner)
                    dx += w.dir[0] * (w.amp * q * c)
                    dz += w.dir[1] * (w.amp * q * c)
                    dy += (w.amp * s)
                })

                dy *= intensity
                dx *= intensity
                dz *= intensity

                // Final Position with 3D orbit and jitter
                const posX = p.ox + p.jx + dx
                const posZ = p.oz + p.jz + dz
                const posY = dy // Vertical wave height

                // Perspective projection with multi-axis orbit
                const fov = 1200
                const perspective = fov / (fov + posZ)
                
                // Screen projection
                const screenX = centerX + (posX * perspective)
                const screenY = centerY + (posY * perspective) + (posZ * 0.35 * perspective)

                if (screenX > -100 && screenX < width + 100 && screenY > -height && screenY < height + 100) {
                    const size = Math.max(0.8, 2.1 * perspective)
                    
                    // Fade out in distance (LOD)
                    const depthFade = Math.max(0, 1 - (posZ / (fov * 0.8)))
                    let opacity = (intensity * 0.35) * perspective * depthFade

                    // Peak Highlights: Crashing crests feel sharper and more brilliant
                    const isAtPeak = dy > 8 && intensity > 0.6
                    const currentSize = isAtPeak ? size * 1.35 : size
                    const currentOpacity = isAtPeak ? opacity * 1.5 : opacity
                    
                    if (currentOpacity > 0.02) {
                        ctx.beginPath()
                        ctx.arc(screenX, screenY, currentSize, 0, Math.PI * 2)
                        ctx.fillStyle = `rgba(37, 99, 235, ${currentOpacity})`
                        ctx.fill()
                    }
                }
            })

            time += 0.45 // Even slower, more hypnotic motion multiplier
            animationFrameId = requestAnimationFrame(render)
        }

        const handleResize = () => {
            init()
        }

        window.addEventListener('resize', handleResize)
        init()
        render()

        return () => {
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas 
            ref={canvasRef} 
            style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                width: '100%', 
                height: '75%', 
                zIndex: 0,
                pointerEvents: 'none'
            }} 
        />
    )
}

export default DotWave
