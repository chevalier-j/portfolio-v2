import { Html, useProgress } from '@react-three/drei'

export const CanvasLoader = () => {
	const { progress } = useProgress()
	return (
		<Html>
			<span className="canvas-loader" aria-label="Loading"></span>
			<p
				className="canvas-loader-progress"
				// style={{
				// 	fontSize: 14,
				// 	color: '#f1f1f1',
				// 	fontWeight: 800,
				// 	marginTop: 40,
				// }}
			>
				{progress.toFixed(2)}&nbsp;%
			</p>
		</Html>
	)
}
