import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '@styles'
// import { EarthCanvas } from '@canvas/'
import { slideIn } from '@utils/motion'
import { SectionWrapper } from '@utils'

const Contact = () => {
	const [form, setForm] = useState({ name: '', email: '', message: '' })
	const formRef = useRef()
	const [loading, setLoading] = useState(false)

	const handleChange = e => {}
	const handleSubmit = e => {}
	return (
		<div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h2 className={styles.sectionHeadText}>Contact.</h2>
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label htmlFor="name" className="flex flex-col">
						<span className="text-white font-medium mb-4">Your name</span>
						<input
							id="name"
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary test-white rounded-lg outlined-none border-none font-medium"
						/>
					</label>
				</form>
			</motion.div>
		</div>
	)
}

const WrappedContact = SectionWrapper(Contact, 'contact')

export { WrappedContact as Contact }
