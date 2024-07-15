import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Cube = () => {
  const cubeRef = useRef();
  const textures = useTexture([
    'images/nyhpic1.jpg',
    'images/nyhpic2.jpg',
    'images/nyhpic3.jpg',
    'images/nyhpic4.jpg',
    'images/nyhpic2.jpg',
    'images/nyhpic1.jpg',
  ]);

//   useFrame(() => {
//     if (cubeRef.current) {
//       cubeRef.current.rotation.x += 0.01; // Rotate the cube around the x-axis
//       cubeRef.current.rotation.y += 0.01; // Rotate the cube around the y-axis
//     }
//   });

  // Return the cube mesh with textures applied to each face
  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[3, 3,3]} /> {/* Larger cube with dimensions 3x3x3 */}
      {textures.map((texture, index) => (
        <meshBasicMaterial attach={`material-${index}`} map={texture} key={index} />
      ))}
    </mesh>
  );
};
export default Cube;
