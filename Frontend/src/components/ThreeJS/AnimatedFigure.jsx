import React, { useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from '@react-three/drei';
import "./AnimatedFigure.css";

function Model() {
  const { scene } = useGLTF('TestYH5.glb');
  return <primitive object={scene} />;
}

function CameraSetup() {
  const { camera } = useThree();

  useEffect(() => {
    // Set the camera position and look at the specific target
    camera.position.set(-10, 17, 3);
    camera.lookAt(-6, 15.5, -3);
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
}

function ThreeModel() {
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  }, []);

  return (
    <div className="fullscreen-container">
      <Canvas className="canvas-fullscreen">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <PerspectiveCamera makeDefault position={[-10, 17, 3]} fov={35} />
        <CameraSetup />
        <Model />
        <OrbitControls ref={controlsRef} target={[-6, 15.5, -3]} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}

export default ThreeModel;
