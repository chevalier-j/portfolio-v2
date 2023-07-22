import { BrowserRouter } from 'react-router-dom'
import { Hero } from '@home/hero'
import { Navbar } from '@common/navbar'

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<Navbar />
				<header className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Hero />
				</header>
			</div>
		</BrowserRouter>
	)
}

export { App }
