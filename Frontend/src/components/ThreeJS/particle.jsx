import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleAnimation = () => {
  const pointsRef = useRef();
  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 5000; i++) {
      positions.push((Math.random() - 0.5) * 10);
      positions.push((Math.random() - 0.5) * 10);
      positions.push((Math.random() - 0.5) * 10);
    }
    return new Float32Array(positions);
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attachObject={['attributes', 'position']} count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#00ccff" size={0.05} />
    </points>
  );
};

export default ParticleAnimation;
