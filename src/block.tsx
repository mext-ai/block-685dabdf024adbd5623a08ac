import React, { useState } from 'react';
import DuckScene from './DuckScene';
import SceneControls from './SceneControls';

interface BlockProps {
  title?: string;
  description?: string;
}

const Block: React.FC<BlockProps> = ({ 
  title = "3D Duck Visualizer",
  description = "Interactive 3D model viewer for your duck"
}) => {
  // State for scene controls
  const [lighting, setLighting] = useState<'ambient' | 'directional' | 'point'>('directional');
  const [wireframe, setWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [scale, setScale] = useState(1.5);
  const [backgroundColor, setBackgroundColor] = useState('#1a1a2e');

  return (
    <div style={{ 
      position: 'relative', 
      width: '100vw', 
      height: '100vh',
      overflow: 'hidden',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Loading overlay for better UX */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '15px',
        borderRadius: '10px',
        zIndex: 1000,
        maxWidth: '300px'
      }}>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{title}</h2>
        <p style={{ margin: '0 0 10px 0', fontSize: '12px', opacity: 0.8 }}>
          {description}
        </p>
        <div style={{ fontSize: '11px', opacity: 0.6 }}>
          • Click and drag to rotate<br/>
          • Scroll to zoom<br/>
          • Right-click drag to pan
        </div>
      </div>

      {/* Scene Controls */}
      <SceneControls
        lighting={lighting}
        setLighting={setLighting}
        wireframe={wireframe}
        setWireframe={setWireframe}
        autoRotate={autoRotate}
        setAutoRotate={setAutoRotate}
        scale={scale}
        setScale={setScale}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
      />

      {/* 3D Scene */}
      <DuckScene
        lighting={lighting}
        wireframe={wireframe}
        autoRotate={autoRotate}
        scale={scale}
        backgroundColor={backgroundColor}
      />
    </div>
  );
};

export default Block;