'use client'

import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Stage } from '@react-three/drei'
import { Suspense } from 'react'

function Cat() {
  const { scene } = useGLTF('/cat.glb')
  return <primitive object={scene} />
}

export function CatModel() {
  return (
    <Canvas
      camera={{ fov: 45 }}
      gl={{ alpha: true }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6} adjustCamera={0.5}>
          <Cat />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2.0} />
      </Suspense>
    </Canvas>
  )
}
