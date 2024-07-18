import React, { useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from '@react-three/drei';
// import * as THREE from 'three';
import "./AnimatedFigure.css";

function Model() {
    const { scene } = useGLTF('TestYH5.glb');
  
    return <primitive object={scene} />;
  }

  function CameraSetup() {
    const { camera } = useThree();
  
    useFrame(() => {
        // Set the camera position
        // camera.position.set(-11.905, 23.7976, 18.671);
  
        // Make the camera look at the specific target
        const target = [-6, 15.5, -3];
        camera.lookAt(...target);
      
        // If needed, update the camera manually
        camera.updateProjectionMatrix();
    });
  
    return null;
  }

function ThreeModel() {
    return (
        <div className="fullscreen-container">
            <Canvas className="canvas-fullscreen">
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <PerspectiveCamera makeDefault position={[-10, 17, 3]} fov={35} />
                <CameraSetup />
                <Model />
                <OrbitControls />
                <Environment preset="sunset" />
            </Canvas>
        </div>
    );
}

export default ThreeModel;
