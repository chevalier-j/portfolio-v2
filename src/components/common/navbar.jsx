import { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '@styles'
import { navLinks } from '@constants'
import { logo, menu, close } from '@assets'

const Navbar = () => {
	const [active, setActive] = useState('')
	const [toggleNavbar, setToggleNavbar] = useState(false)

	const toggleMobileMenu = () => {
		setToggleNavbar(prevToggle => !prevToggle)
	}

	return (
		<>
			<nav
				className={`${styles.paddingX} 
        w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
			>
				<div className="w-full flex justify-between items-center items-center max-w-7xl mx-auto">
					<Link
						to="/"
						className="flex items-center gap-2"
						onClick={() => {
							setActive('')
							window.scrollTo(0, 0)
						}}
					>
						<img
							src={logo}
							alt="Chevalier's logo"
							className="w-9 h-9 object-contain"
						/>
						<p className="flex text-white text-[18px] font-bold cursor-pointer bg-red-700">
							Chevalier&nbsp;
							<span className="sm:block hidden bg-gray-700">
								|&nbsp;Software&nbsp;Engineer
							</span>
						</p>
					</Link>
					{/*  this will be used again on mobile menu, so best to refactor this to keep code DRY */}
					<ul className="list-none hidden sm:flex flex-row gap-10">
						{navLinks.map(Link => (
							<Link
								key={Link.id}
								className={`${
									active === Link.title
										? 'text-white'
										: 'text-secondary'
								} hover:text-white text-[18px] font-medium cursor-pointer`}
								onClick={() => setActive(Link.title)}
							>
								{/* remove the <a> and put {`#${Link.id}`} inside the Link element, like this: to={`#${link.id}`} */}
								<a href={`#${Link.id}`}>{Link.title}</a>
							</Link>
						))}
					</ul>
					<div className="sm:hidden flex flex-1 justify-end items-center">
						<button
							className="w-[28px] h-[28px] object-contain cursor-pointer"
							onClick={toggleMobileMenu}
							aria-label={toggleNavbar ? 'Close Menu' : 'Open Menu'}
						/>
						<img
							className={`${
								!toggleNavbar ? 'hidden' : 'flex'
							} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
							alt="menu icon"
						>
							{/* reminder to refactor this to keep the code DRY. See comment above. However there are a few differences between the desktop menu and mobile menu, namely: mobile it's flex by default instead of hidden, sm:flex is gone, and instead of flex-row  and gap-10, it has justify-end items-start flex-col gap-4 
							There are also changes in the li, where mobile has font-poppins font-medium cursor-pointer text-[16px]
							We also add to onClick: setToggle(!toggle)  */}
							<ul className="list-none flex flex-col gap-4 justify-end items-start">
								{navLinks.map(Link => (
									<Link
										key={Link.id}
										className={`${
											active === Link.title
												? 'text-white'
												: 'text-secondary'
										} font-poppins font-medium cursor-pointer text-[16px]`}
										onClick={() => {
											setToggleNavbar(!toggleNavbar)
											setActive(Link.title)
										}}
									>
										<a href={`#${Link.id}`}>{Link.title}</a>
									</Link>
								))}
							</ul>
						</img>
					</div>
				</div>
			</nav>
		</>
	)
}

export { Navbar }
