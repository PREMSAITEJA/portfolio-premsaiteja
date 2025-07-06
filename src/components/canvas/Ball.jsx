import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current && delta && isFinite(delta)) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [hasError, setHasError] = useState(false);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setIsWebGLSupported(false);
      setHasError(true);
    }
  }, []);

  const handleError = (error) => {
    console.warn('Ball Canvas Error:', error);
    setHasError(true);
  };

  if (!isWebGLSupported || hasError) {
    // Fallback component for when WebGL fails
    return (
      <div className="w-full h-full flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-blue-600/20 border border-purple-500/30">
        <img
          src={icon}
          alt="Technology"
          className="w-12 h-12 object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="text-white text-xs font-bold hidden">Tech</div>
      </div>
    );
  }

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      }}
      onError={handleError}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
