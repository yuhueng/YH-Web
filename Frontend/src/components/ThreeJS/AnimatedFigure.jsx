import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const AnimatedFigure = () => {
  const figureRef = useRef();
  
  useFrame(() => {
    if (figureRef.current) {
      figureRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={figureRef}>
      {/* Body */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[0.5, 1, 0.3]} />
        <meshStandardMaterial color="#FF6347" />
      </mesh>
      {/* Head */}
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
      {/* Arms */}
      <mesh position={[-0.35, 1.5, 0]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#FF6347" />
      </mesh>
      <mesh position={[0.35, 1.5, 0]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#FF6347" />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.15, 0.5, 0]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#FF6347" />
      </mesh>
      <mesh position={[0.15, 0.5, 0]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#FF6347" />
      </mesh>
    </group>
  );
};

export default AnimatedFigure;
