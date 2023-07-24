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
	return <h1>Contact</h1>
}

const WrappedContact = SectionWrapper(Contact, 'contact')

export { WrappedContact as Contact }
