import React from 'react';

const DeskAndComputer = () => {
  return (
    <group>
      {/* Desk */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Computer */}
      <mesh position={[0, 0.75, 0.5]}>
        <boxGeometry args={[0.5, 0.5, 0.1]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0, 0.95, 0.6]}>
        <planeGeometry args={[0.45, 0.3]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
    </group>
  );
};

export default DeskAndComputer;
