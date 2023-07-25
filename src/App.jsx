import { BrowserRouter } from 'react-router-dom'
import { Hero } from '@home/hero'
import { About } from '@home/about'
import { Experience } from '@home/experience'
import { Projects } from '@home/projects'
import { Contact } from '@home/contact'
import { StarsCanvas } from '@canvas/stars'
import { Navbar } from '@common/navbar'

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<Navbar />
				<header className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Hero />
					<About />
					<Experience />
					<Projects />
					<Contact />
					<StarsCanvas />
				</header>
			</div>
		</BrowserRouter>
	)
}

export { App }
