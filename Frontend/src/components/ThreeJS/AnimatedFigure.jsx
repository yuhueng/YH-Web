import { useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import "./AnimatedFigure.css";

function Model() {
  const { scene } = useGLTF("Yuhueng.glb");
  return <primitive object={scene} />;
}

function CameraSetup() {
  const { camera } = useThree();

  useEffect(() => {
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
