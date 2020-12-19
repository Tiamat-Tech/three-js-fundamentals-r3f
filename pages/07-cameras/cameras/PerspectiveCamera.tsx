import { useRef } from 'react';
import { useTweaks } from 'use-tweaks';
import { PerspectiveCamera } from '@react-three/drei';
import { PerspectiveCamera as PerspectiveCameraType } from 'three';

export default function Perspective() {
  const camera = useRef<PerspectiveCameraType>();
  const { far, fov, near } = useTweaks('Perspective Camera', {
    fov: { value: 45, min: 1, max: 180 },
    near: { value: 0.1, min: 0.1, max: 50 },
    far: { value: 100, min: 0.1, max: 100 },
  });

  return (
    <PerspectiveCamera
      aspect={2}
      fov={fov}
      makeDefault
      near={near}
      far={far}
      position={[0, 10, 20]}
      ref={camera}
    />
  );
}