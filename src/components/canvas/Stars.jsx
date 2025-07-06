import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    try {
      // Generate positions with validation
      const count = 5000;
      const positions = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;

        // Generate random spherical coordinates
        const radius = Math.cbrt(Math.random()) * 1.2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        // Convert to cartesian coordinates
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        // Validate and assign positions
        positions[i3] = isFinite(x) ? x : 0;
        positions[i3 + 1] = isFinite(y) ? y : 0;
        positions[i3 + 2] = isFinite(z) ? z : 0;
      }

      return positions;
    } catch (error) {
      console.warn("Error generating star positions, using fallback:", error);
      // Fallback: create a simple grid
      const positions = new Float32Array(1000 * 3);
      for (let i = 0; i < 1000; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 2;
        positions[i3 + 1] = (Math.random() - 0.5) * 2;
        positions[i3 + 2] = (Math.random() - 0.5) * 2;
      }
      return positions;
    }
  });

  useFrame((state, delta) => {
    if (ref.current && delta && isFinite(delta) && delta > 0) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  if (!sphere || sphere.length === 0) {
    return null;
  }

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error) => {
    console.warn('Stars Canvas Error:', error);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className="w-full h-auto absolute inset-0 z-[-1] bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
        {/* CSS-based star fallback */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-300 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        onError={handleError}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
