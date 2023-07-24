import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { CanvasLoader } from '@common/loader'

const Planet = () => {
	return <div></div>
}

const PlanetCanvas = () => {
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
				{/* <Planet /> */}
			</Suspense>
		</Canvas>
	)
}
export { PlanetCanvas }
