import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeWave = () => {
  const containerRef = useRef();

  useEffect(() => {
    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    // Positioned slightly higher and further back for wider coverage
    camera.position.set(0, 42, 70);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    // Much wider plane to fill the side regions (260 units wide)
    const geometry = new THREE.PlaneGeometry(260, 160, 240, 180);
    geometry.rotateX(-Math.PI / 2);

    // Custom Shader Material for High-Fidelity Dot Waves
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: window.devicePixelRatio },
        uColor: { value: new THREE.Color('#2563eb') }, // Sigma Blue
        uOpacity: { value: 0.9 }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        varying float vHeight;
        varying float vDistance;

        // Gerstner Wave Function: Returns displacement
        // Mimics trochoidal motion (orbits) which causes clumping at crests
        vec3 gerstner(vec3 pos, float amplitude, vec2 dir, float wavelength, float speed, float steepness) {
            float k = 2.0 * 3.14159 / wavelength;
            float c = sqrt(9.8 / k);
            vec2 d = normalize(dir);
            float f = k * (dot(d, pos.xz) - speed * uTime);
            float a = amplitude;

            // Longitudinal displacement (clumping at crests)
            return vec3(
                d.x * (a * steepness * cos(f)),
                a * sin(f),
                d.y * (a * steepness * cos(f))
            );
        }

        void main() {
            vec3 pos = position;
            
            // Sum of 6 Gerstner waves for high realism
            pos += gerstner(position, 1.8, vec2(1.0, 0.2), 35.0, 1.4, 0.5);   // Main Swell
            pos += gerstner(position, 1.2, vec2(-0.7, 0.4), 22.0, 0.9, 0.4);  // Counter Swell
            pos += gerstner(position, 0.8, vec2(0.3, 0.9), 14.0, 1.8, 0.3);   // Chop 1
            pos += gerstner(position, 0.6, vec2(-0.4, -0.3), 10.0, 0.6, 0.3); // Chop 2
            pos += gerstner(position, 0.4, vec2(0.1, -1.0), 7.0, 2.5, 0.2);   // Ripple
            pos += gerstner(position, 0.3, vec2(0.8, 0.5), 5.0, 1.1, 0.2);    // Micro-ripple

            vHeight = pos.y;
            
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            
            // Perspective point size
            vDistance = -mvPosition.z;
            gl_PointSize = (180.0 / vDistance) * uPixelRatio * mix(0.5, 1.0, smoothstep(35.0, 120.0, vDistance));
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vHeight;
        varying float vDistance;

        void main() {
            // Circle shape for dots
            float r = distance(gl_PointCoord, vec2(0.5));
            if (r > 0.5) discard;
            
            // --- Gradual Foreground Density Reduction ---
            float dotRandom = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
            // vDistance is ~43 at bottom, ~156 at back. 
            // We start thinning from distance 100 (middle) down to 40 (bottom)
            float densityFactor = smoothstep(110.0, 35.0, vDistance); 
            // Exponential curve for a more "natural" gradual thinning
            if (dotRandom < (pow(densityFactor, 1.8) * 0.85)) discard; 
            
            // Color strategy: Mix between Sigma Blue (Deep Sea) and White (Crests)
            vec3 deepSeaColor = vec3(0.0, 0.3, 1.0); // More vibrant Sea Blue
            vec3 crestColor = vec3(1.0, 1.0, 1.0);    // Pure white crests
            // Start transitioning to deep blue earlier (at distance 50)
            vec3 baseColor = mix(uColor, deepSeaColor, smoothstep(50.0, 120.0, vDistance));
            
            float h = smoothstep(-1.0, 3.5, vHeight);
            vec3 finalColor = mix(baseColor, crestColor, h * 0.45);
            
            // Depth fading (Atmospheric)
            float depthFade = smoothstep(140.0, 35.0, vDistance);
            
            // Soft edges for dots
            float alpha = smoothstep(0.5, 0.4, r) * uOpacity * depthFade;
            
            gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      depthTest: false, // Allows dots to overlap beautifully
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const animate = () => {
      const time = performance.now() * 0.001;
      material.uniforms.uTime.value = time;
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      material.uniforms.uPixelRatio.value = window.devicePixelRatio;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="three-wave-container"
      style={{ 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        width: '100%', 
        height: '75%', 
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }} 
    />
  );
};

export default ThreeWave;
