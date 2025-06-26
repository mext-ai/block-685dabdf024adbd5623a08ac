import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';

interface DuckModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  autoRotate?: boolean;
}

const DuckModel: React.FC<DuckModelProps> = ({ 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  scale = 1,
  autoRotate = true 
}) => {
  const meshRef = useRef<Mesh>(null);
  
  // Load the duck model
  const gltf = useLoader(GLTFLoader, '/Duck.glb');
  
  // Auto-rotation animation
  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={gltf.scene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
};

export default DuckModel;