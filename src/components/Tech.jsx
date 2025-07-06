import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechIcon = ({ technology, isMobile, forceSimple }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [canvasError, setCanvasError] = useState(false);

  // Use simple 2D if mobile, forced, or canvas failed
  if (isMobile || forceSimple || canvasError) {
    return (
      <div className="w-28 h-28 flex flex-col items-center justify-center">
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          {imageError ? (
            <div className="text-white text-xs font-bold text-center p-2">
              {technology.name.substring(0, 4)}
            </div>
          ) : (
            <>
              <img
                src={technology.icon}
                alt={technology.name}
                className={`w-12 h-12 object-contain transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                loading="lazy"
              />
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </>
          )}
        </div>
        <p className="text-white text-xs mt-2 text-center font-medium">
          {technology.name}
        </p>
      </div>
    );
  }

  // Use 3D canvas on desktop with error boundary
  return (
    <div className="w-28 h-28 flex flex-col items-center">
      <div className="w-20 h-20">
        <BallCanvas 
          icon={technology.icon} 
          onError={() => setCanvasError(true)}
        />
      </div>
      <p className="text-white text-xs mt-2 text-center font-medium">
        {technology.name}
      </p>
    </div>
  );
};

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [forceSimple, setForceSimple] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
      const isMobileDevice = mobileRegex.test(userAgent.toLowerCase());
      const isSmallScreen = window.innerWidth <= 768;
      
      // Check for WebGL support
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      const hasWebGL = !!gl;
      
      setIsMobile(isMobileDevice || isSmallScreen);
      setForceSimple(!hasWebGL);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    // Listen for WebGL context lost events
    const handleContextLost = () => {
      console.warn('WebGL context lost, switching to 2D mode');
      setForceSimple(true);
    };

    window.addEventListener('webglcontextlost', handleContextLost);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('webglcontextlost', handleContextLost);
    };
  }, []);

  return (
    <div className="relative">
      <h2 className={styles.sectionHeadText}>
        Tech<span className="text-purple-300">Stack.</span>
      </h2>
      <p className={styles.sectionSubText}>I was familiar with :</p>
      <br />
      
      <div className="flex flex-row flex-wrap justify-center gap-6 md:gap-10">
        {technologies.map((technology) => (
          <TechIcon 
            key={technology.name} 
            technology={technology} 
            isMobile={isMobile}
            forceSimple={forceSimple}
          />
        ))}
      </div>

      {(isMobile || forceSimple) && (
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            💡 {isMobile ? 'Optimized for mobile viewing' : 'Using optimized 2D mode'}
          </p>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
