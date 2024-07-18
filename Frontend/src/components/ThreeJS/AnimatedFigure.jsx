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
        <PerspectiveCamera makeDefault position={[-10, 17, 3]} fov={30} />
        <CameraSetup />
        <Model />
        <OrbitControls
        ref={controlsRef}
        target={[-6, 15.5, -3]}          
        minDistance={0.01} 
        maxDistance={100} 
        />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}

export default ThreeModel;

// import React, { useRef, useEffect, useState } from 'react';
// import { Canvas, useThree, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
// import './PanningScene.css';

// function Model() {
//   const { scene } = useGLTF('path/to/your/model.glb');
//   return <primitive object={scene} />;
// }

// function CameraAnimation({ setAnimationDone }) {
//   const { camera } = useThree();
//   const animationStartTime = useRef(Date.now());

//   useFrame(() => {
//     const elapsedTime = Date.now() - animationStartTime.current;

//     if (elapsedTime < 5000) {
//       // Perform your camera animation logic here
//       // Example: Rotate camera around the Y-axis and move upwards
//       const t = elapsedTime / 5000;
//       camera.position.set(
//         Math.sin(t * Math.PI * 2) * 5,
//         2 + t * 3,
//         Math.cos(t * Math.PI * 2) * 5
//       );
//       camera.lookAt(0, 1, 0);
//       camera.updateProjectionMatrix();
//     } else {
//       setAnimationDone(true);
//     }
//   });

//   return null;
// }

// function PanningScene() {
//   const controlsRef = useRef();
//   const [animationDone, setAnimationDone] = useState(false);

//   useEffect(() => {
//     const controls = controlsRef.current;

//     const handleInteraction = () => {
//       if (!animationDone) {
//         setAnimationDone(true);
//       }
//     };

//     if (controls) {
//       controls.addEventListener('start', handleInteraction);
//     }

//     return () => {
//       if (controls) {
//         controls.removeEventListener('start', handleInteraction);
//       }
//     };
//   }, [animationDone]);

//   return (
//     <div className="fullscreen-container">
//       <Canvas className="canvas-fullscreen">
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} intensity={1} />
//         {!animationDone && <CameraAnimation setAnimationDone={setAnimationDone} />}
//         <Model />
//         <OrbitControls ref={controlsRef} enabled={animationDone} />
//         <Environment preset="sunset" />
//       </Canvas>
//       <div className="controls">
//         <button onClick={() => setAnimationDone(false)}>Restart Animation</button>
//       </div>
//     </div>
//   );
// }

// export default PanningScene;
