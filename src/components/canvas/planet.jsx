/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { CanvasLoader } from '@common/loader'

const Planet = ({ model }) => {
	return <primitive object={model.scene} />
}

const PlanetCanvas = () => {
	const model = useGLTF('./src/assets/models/planet/scene.gltf')

	return (
		<Canvas
			shadows
			frameloop="demand"
			gl={{ preserveDrawingBuffer: true }}
			camera={{}}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					minPolarAngle={Math.PI / 2}
					maxPolarAngle={Math.PI / 2}
				/>
				<Planet model={model} />
			</Suspense>
			<Preload all />
		</Canvas>
	)
}
export { PlanetCanvas }
