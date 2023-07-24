import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { emailjs } from '@emailjs/browser'
import { styles } from '@styles'
import { EarthCanvas } from '@canvas'
import { slideIn } from '@utils/motion'
import { SectionWrapper } from '@utils'

const Contact = () => {
	const [form, setForm] = useState({ name: '', email: '', message: '' })
	return <h1>Contact</h1>
}

const WrappedContact = SectionWrapper(Contact, 'contact')

export { WrappedContact as Contact }
