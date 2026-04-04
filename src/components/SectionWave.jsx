import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SectionWave = ({ 
  height = '100%', 
  opacity = 0.5, 
  color = '#2563eb', 
  position = 'bottom', 
  align = 'center',
  density = 1.0
}) => {
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;
    
    let width = containerRef.current.clientWidth;
    let heightVal = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / heightVal, 0.1, 1000);
    camera.position.set(0, 42, 70);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, heightVal);
    containerRef.current.appendChild(renderer.domElement);

    // Geometry size and resolution based on alignment and density
    const geoWidth = align === 'center' ? 300 : 150;
    const resX = Math.floor(200 * density);
    const resY = Math.floor(160 * density);
    const geometry = new THREE.PlaneGeometry(geoWidth, 180, resX, resY);
    geometry.rotateX(-Math.PI / 2);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: window.devicePixelRatio },
        uColor: { value: new THREE.Color(color) },
        uOpacity: { value: opacity }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        varying float vHeight;
        varying float vDistance;

        vec3 gerstner(vec3 pos, float amplitude, vec2 dir, float wavelength, float speed, float steepness) {
            float k = 2.0 * 3.14159 / wavelength;
            float c = sqrt(9.8 / k);
            vec2 d = normalize(dir);
            float f = k * (dot(d, pos.xz) - speed * uTime);
            float a = amplitude;
            return vec3(
                d.x * (a * steepness * cos(f)),
                a * sin(f),
                d.y * (a * steepness * cos(f))
            );
        }

        void main() {
            vec3 pos = position;
            pos += gerstner(position, 1.8, vec2(1.0, 0.2), 35.0, 1.4, 0.5);
            pos += gerstner(position, 1.2, vec2(-0.7, 0.4), 22.0, 0.9, 0.4);
            pos += gerstner(position, 0.8, vec2(0.3, 0.9), 14.0, 1.8, 0.3);
            vHeight = pos.y;
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            vDistance = -mvPosition.z;
            gl_PointSize = (150.0 / vDistance) * uPixelRatio * mix(0.5, 1.0, smoothstep(35.0, 120.0, vDistance));
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vHeight;
        varying float vDistance;

        void main() {
            float r = distance(gl_PointCoord, vec2(0.5));
            if (r > 0.5) discard;
            
            float dotRandom = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
            float densityFactor = smoothstep(110.0, 35.0, vDistance); 
            if (dotRandom < (pow(densityFactor, 1.8) * 0.85)) discard; 
            
            vec3 deepSeaColor = vec3(0.0, 0.3, 1.0);
            vec3 crestColor = vec3(1.0, 1.0, 1.0);
            vec3 baseColor = mix(uColor, deepSeaColor, smoothstep(50.0, 120.0, vDistance));
            float h = smoothstep(-1.0, 3.5, vHeight);
            vec3 finalColor = mix(baseColor, crestColor, h * 0.45);
            float depthFade = smoothstep(140.0, 35.0, vDistance);
            float alpha = smoothstep(0.5, 0.4, r) * uOpacity * depthFade;
            gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      depthTest: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Initial offset for side alignment
    if (align === 'right') points.position.x = 40;
    if (align === 'left') points.position.x = -40;

    const animate = () => {
      const time = performance.now() * 0.001;
      material.uniforms.uTime.value = time;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      heightVal = containerRef.current.clientHeight;
      camera.aspect = width / heightVal;
      camera.updateProjectionMatrix();
      renderer.setSize(width, heightVal);
      material.uniforms.uPixelRatio.value = window.devicePixelRatio;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, [color, opacity, align]);

  const style = {
    position: 'absolute',
    left: align === 'right' ? 'auto' : 0,
    right: align === 'left' ? 'auto' : 0,
    width: align === 'center' ? '100%' : '60%',
    height: height,
    zIndex: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
    opacity: 0.8,
    // Horizontal masks based on alignment
    maskImage: align === 'right' 
        ? 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)' 
        : align === 'left'
            ? 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)'
            : 'none',
    WebkitMaskImage: align === 'right' 
        ? 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)' 
        : align === 'left'
            ? 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)'
            : 'none',
    maskComposite: 'source-over',
    WebkitMaskComposite: 'source-over'
  };

  if (position === 'bottom') style.bottom = 0;
  else style.top = 0;

  return <div ref={containerRef} className="section-wave-container" style={style} />;
};

export default SectionWave;
