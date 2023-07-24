import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '@styles'
import { SectionWrapper } from '@utils'
import { fadeIn } from '@utils/motion'

const Projects = () => {
	return (
		<>
			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
				voluptates odio minus dignissimos. Distinctio saepe tenetur
				praesentium voluptatum vel dignissimos necessitatibus in totam
				adipisci a possimus, eaque dolores dolorum fugiat.
			</motion.p>
		</>
	)
}

const WrappedProjects = SectionWrapper(Projects, '')
export { WrappedProjects as Projects }
