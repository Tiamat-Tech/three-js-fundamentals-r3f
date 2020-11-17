import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Circle } from '@react-three/drei';
import { Mesh } from 'three';
import { SPEED_ROTATION } from '../constants';

export default function CircleGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const radius = 1;
  const segments = 24;

  // Defaults ↓
  const thetaStart = 0;
  const thetaLength = 2 * Math.PI;

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += SPEED_ROTATION;
      mesh.current.rotation.y += SPEED_ROTATION;
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <Circle args={[radius, segments, thetaStart, thetaLength]}>
        <meshPhongMaterial attach="material" color="gold" />
      </Circle>
    </mesh>
  );
}
