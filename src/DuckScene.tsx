import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Grid } from '@react-three/drei';
import DuckModel from './DuckModel';
import Lighting from './Lighting';

interface DuckSceneProps {
  lighting: 'ambient' | 'directional' | 'point';
  wireframe: boolean;
  autoRotate: boolean;
  scale: number;
  backgroundColor: string;
}

const DuckScene: React.FC<DuckSceneProps> = ({
  lighting,
  wireframe,
  autoRotate,
  scale,
  backgroundColor
}) => {
  // Send completion event when scene loads
  useEffect(() => {
    const sendCompletion = () => {
      window.postMessage({ type: 'BLOCK_COMPLETION', blockId: 'duck-3d-visualizer', completed: true }, '*');
      window.parent.postMessage({ type: 'BLOCK_COMPLETION', blockId: 'duck-3d-visualizer', completed: true }, '*');
    };
    
    // Send completion after a short delay to ensure scene is loaded
    const timer = setTimeout(sendCompletion, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ 
        width: '100%', 
        height: '100vh', 
        backgroundColor: backgroundColor,
        cursor: 'grab'
      }}
      onMouseDown={(e) => {
        if (e.target instanceof HTMLCanvasElement) {
          e.target.style.cursor = 'grabbing';
        }
      }}
      onMouseUp={(e) => {
        if (e.target instanceof HTMLCanvasElement) {
          e.target.style.cursor = 'grab';
        }
      }}
    >
      <Lighting type={lighting} />
      
      {/* Environment for realistic reflections */}
      <Environment preset="studio" />
      
      {/* Grid for reference */}
      <Grid 
        args={[10, 10]} 
        cellSize={0.5} 
        cellThickness={0.5} 
        cellColor="#6e6e6e" 
        sectionSize={3} 
        sectionThickness={1} 
        sectionColor="#9d4b4b" 
        fadeDistance={25} 
        fadeStrength={1} 
        followCamera={false} 
        infiniteGrid={true} 
      />
      
      {/* Duck Model */}
      <Suspense fallback={null}>
        <DuckModel 
          scale={scale}
          autoRotate={autoRotate}
          position={[0, 0, 0]}
        />
      </Suspense>
      
      {/* Orbit Controls for camera movement */}
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={1}
        maxDistance={20}
        autoRotate={false}
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default DuckScene;