import { useEffect, useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { PerspectiveCamera } from 'three';

const Camera = () => {
  const camera = useRef(new PerspectiveCamera());
  const { setDefaultCamera } = useThree();

  useEffect(() => {
    if (camera.current) {
      setDefaultCamera(camera.current);
    }
  }, []);

  useFrame(() => {
    camera?.current?.updateMatrixWorld();
  });

  return (
    <perspectiveCamera
      fov={75}
      far={5}
      near={0.1}
      name="camera"
      onUpdate={(self) => {
        self.lookAt(0, 5, 0);
        self.updateProjectionMatrix();
      }}
      position={[0, 0, -2]}
      ref={camera}
    ></perspectiveCamera>
  );
};

export default Camera;