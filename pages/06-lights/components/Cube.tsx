import { useRef } from 'react';
import { Box } from '@react-three/drei';
import { Mesh } from 'three';

export default function Cube({ ...props }) {
  const mesh = useRef<Mesh>();
  const CUBE_SIZE = 6;
  const width = CUBE_SIZE;
  const height = CUBE_SIZE;
  const depth = CUBE_SIZE;

  return (
    <mesh {...props} ref={mesh} position={[CUBE_SIZE + 1, CUBE_SIZE / 2, 0]}>
      <Box args={[width, height, depth]}>
        <meshStandardMaterial color="#8AC" />
      </Box>
    </mesh>
  );
}
