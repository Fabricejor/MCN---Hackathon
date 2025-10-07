"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/3D/golden status.glb');
  return <primitive object={scene} />;
}

export default function GoldenStatus() {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 45 }} style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Stage environment="city" intensity={1.2}>
          <Model />
        </Stage>
      </Suspense>
      <OrbitControls autoRotate enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
