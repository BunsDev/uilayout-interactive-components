import { Canvas } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'
import Model from './example-model'
import useDimension from './hooks/useDimension'

export default function Scene() {
  const device = useDimension()

  if (!device.width || !device.height) {
    return null
  }

  const frustumSize = device.height
  const aspect = device.width / device.height

  return (
    <div
      className="h-screen w-full relative bg-gray-950 text-white before:absolute before:top-0 before:left-0 before:w-full
      before:h-full before:content-[''] before:opacity-[0.06] before:z-[100] before:pointer-events-none 
      before:bg-[url('/noise.gif')]"
    >
      <Canvas>
        <OrthographicCamera
          makeDefault
          args={[
            (frustumSize * aspect) / -2,
            (frustumSize * aspect) / 2,
            frustumSize / 2,
            frustumSize / -2,
            -1000,
            1000,
          ]}
          position={[0, 0, 2]}
        />
        <Model />
      </Canvas>
    </div>
  )
}
