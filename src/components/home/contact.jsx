import { motion } from 'framer-motion'
import { emailjs } from '@emailjs/browser'
import { styles } from '@styles'
import { EarthCanvas } from '@canvas'
import { slideIn } from '@utils/motion'
import { SectionWrapper } from '@utils'

const Contact = () => {
	return <>Contact</>
}

const WrappedContact = SectionWrapper(Contact, 'contact')

export { WrappedContact as Contact }
