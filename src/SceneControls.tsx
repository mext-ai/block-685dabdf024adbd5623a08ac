import React from 'react';

interface SceneControlsProps {
  lighting: 'ambient' | 'directional' | 'point';
  setLighting: (lighting: 'ambient' | 'directional' | 'point') => void;
  wireframe: boolean;
  setWireframe: (wireframe: boolean) => void;
  autoRotate: boolean;
  setAutoRotate: (autoRotate: boolean) => void;
  scale: number;
  setScale: (scale: number) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
}

const SceneControls: React.FC<SceneControlsProps> = ({
  lighting,
  setLighting,
  wireframe,
  setWireframe,
  autoRotate,
  setAutoRotate,
  scale,
  setScale,
  backgroundColor,
  setBackgroundColor
}) => {
  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '20px',
      borderRadius: '10px',
      minWidth: '200px',
      zIndex: 1000
    }}>
      <h3 style={{ margin: '0 0 15px 0', fontSize: '16px' }}>Duck Controls</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>
          Lighting:
        </label>
        <select 
          value={lighting} 
          onChange={(e) => setLighting(e.target.value as any)}
          style={{
            width: '100%',
            padding: '5px',
            borderRadius: '3px',
            border: 'none',
            backgroundColor: '#333',
            color: 'white'
          }}
        >
          <option value="ambient">Ambient</option>
          <option value="directional">Directional</option>
          <option value="point">Point</option>
        </select>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
          <input
            type="checkbox"
            checked={wireframe}
            onChange={(e) => setWireframe(e.target.checked)}
            style={{ marginRight: '8px' }}
          />
          Wireframe Mode
        </label>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
          <input
            type="checkbox"
            checked={autoRotate}
            onChange={(e) => setAutoRotate(e.target.checked)}
            style={{ marginRight: '8px' }}
          />
          Auto Rotate
        </label>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>
          Scale: {scale.toFixed(1)}
        </label>
        <input
          type="range"
          min="0.5"
          max="3"
          step="0.1"
          value={scale}
          onChange={(e) => setScale(parseFloat(e.target.value))}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>
          Background:
        </label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          style={{
            width: '100%',
            height: '30px',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        />
      </div>
    </div>
  );
};

export default SceneControls;