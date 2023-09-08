/*
 * path: /src/constants/index.js
 */
/* eslint-disable import/no-relative-parent-imports */
// for convenience, I'm using this constants file to make easy changes throgout the app
import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	// meta,
	// starbucks,
	tesla,
	// shopify,
	carrent,
	photocomp,
	// jobit,
	tripguide,
	threejs,
	c,
} from '../assets'

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
]

// export const hero = [
// 	{
// 		title: "Hi, I'm Alexander",
// 		subtitle: 'Software Engineer',
// 	},
// ]

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'iOS Mobile Developer',
		icon: mobile,
	},
	{
		title: 'UX & Design',
		icon: backend,
	},
	{
		title: 'Content Creator',
		icon: creator,
	},
]

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'docker',
		icon: docker,
	},
]

const experiences = [
	{
		title: 'Web Developer',
		company_name: 'B',
		icon: c,
		iconBg: '#E6DEDD',
		date: 'Jan 2021 - Feb 2022',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
	{
		title: 'Web Developer',
		company_name: 'A',
		icon: c,
		iconBg: '#383E56',
		date: 'Jan 2022 - Jan 2023',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
	{
		title: 'Full stack Developer',
		company_name: 'Necta',
		icon: c,
		iconBg: '#E6DEDD',
		date: 'Apr 2023 - Present',
		points: [
			'Led end-to-end development of React.js web applications, ensuring exceptional user experiences and heightened customer satisfaction.',
			'Collaborated with cross-functional teams, accelerating project delivery and fostering a cooperative work environment.',
			'Implemented innovative solutions, staying ahead of industry trends and enhancing Necta`s web applications.',
			'Improved code quality and application stability through rigorous testing and code reviews.',
		],
	},
]

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
]

const projects = [
	{
		name: 'ChatKra',
		description:
			'Innovative chat application empowering multiple users to connect and communicate seamlessly in real-time. Enjoy an immersive chat experience with stunning UI, effortless message exchanges, and secure data management, fostering efficient and interactive conversations.',
		tags: [
			{
				name: 'react.js',
				color: 'blue-text-gradient',
			},
			{
				name: 'chatkra',
				color: 'green-text-gradient',
			},
			{
				name: 'firebase',
				color: 'pink-text-gradient',
			},
		],
		image: carrent,
		source: 'https://github.com/',
	},
	{
		name: 'Photocomp',
		description:
			'Introducing a dynamic photography competition platform that enables users to showcase their talent through photo uploads. Participants can actively engage in a fair voting system to rank and select the most captivating images. Enjoy a seamless experience with easy photo submission and real-time updates on top-ranked masterpieces.',
		tags: [
			{
				name: 'php',
				color: 'blue-text-gradient',
			},
			{
				name: 'laravel',
				color: 'green-text-gradient',
			},
			{
				name: 'mysql',
				color: 'pink-text-gradient',
			},
		],
		image: photocomp,
		source: 'https://github.com/gibert-j/laravel_photocomp',
	},
	{
		name: 'Splitmate',
		description:
			'My app lets you effortlessly split bills among friends. Add the bill amount, number of people, and optional tip percentage. Easily select contacts to send email or text SMS with banking details for quick and hassle-free transfers. Streamlining your group payments, it`s the perfect tool to simplify your social outings.',
		tags: [
			{
				name: 'swift',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'green-text-gradient',
			},
			{
				name: 'swiftui',
				color: 'pink-text-gradient',
			},
		],
		image: tripguide,
		source: 'https://github.com/',
	},
]

export { services, technologies, experiences, testimonials, projects }
