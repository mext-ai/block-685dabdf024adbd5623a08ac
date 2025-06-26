import React from 'react';

interface LightingProps {
  type: 'ambient' | 'directional' | 'point';
}

const Lighting: React.FC<LightingProps> = ({ type }) => {
  return (
    <>
      {/* Always have some ambient light */}
      <ambientLight intensity={0.3} />
      
      {type === 'ambient' && (
        <ambientLight intensity={0.8} />
      )}
      
      {type === 'directional' && (
        <>
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <directionalLight
            position={[-10, -10, -5]}
            intensity={0.3}
          />
        </>
      )}
      
      {type === 'point' && (
        <>
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <pointLight position={[0, 10, 0]} intensity={0.3} />
        </>
      )}
    </>
  );
};

export default Lighting;