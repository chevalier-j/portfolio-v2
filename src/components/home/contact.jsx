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
				className="flex-[0.75]"
			>
				Contact
			</motion.div>
		</div>
	)
}

const WrappedContact = SectionWrapper(Contact, 'contact')

export { WrappedContact as Contact }
