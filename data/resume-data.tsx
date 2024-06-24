import { GitHubIcon } from '@/components/icons/GitHubIcon'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'

export const RESUME_DATA = {
	name: 'Alex Sherman',
	initials: 'ABS',
	location: 'San Francisco, California, PST',
	locationLink: 'https://www.google.com/maps/place/SanFrancisco',
	about:
		'Detail-oriented Full Stack Engineer dedicated to building high-quality products.',
	summary:
		'As a Full Stack Engineer, I specialize in taking product features from concept to launch. Currently, I work mostly with TypeScript, React, Node.js, and Postgres. I have over 5 years of experience working with companies around the United States.',
	avatarUrl: 'https://avatars.githubusercontent.com/u/19175984?v=4',
	personalWebsiteUrl: 'https://asherman.net',
	contact: {
		email: 'asherman.ca@gmail.com',
		tel: '+14156520317',
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/asherman-ca',
				icon: GitHubIcon,
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/alex-sherman-1ba03649/',
				icon: LinkedInIcon,
			},
		],
	},
	education: [
		{
			school: 'Union College',
			degree: "Bachelor's Degree in Economics",
			start: '2006',
			end: '2010',
		},
	],
	work: [
		{
			company: 'Film.io',
			link: 'https://film.io',
			badges: ['Remote'],
			title: 'Software Architect',
			start: '2024',
			end: null,
			description:
				'Leading the development of the Film.io platform. Technologies: React, TypeScript, Node.js',
		},
		{
			company: 'Parabol',
			link: 'https://parabol.co',
			badges: ['Remote'],
			title: 'Senior Full Stack Developer',
			start: '2021',
			end: '2024',
			description:
				'Implemented new features, led a squad, improved code delivery process, and initiated migration from Emotion to Tailwind CSS. Technologies: React, TypeScript, GraphQL',
		},
		{
			company: 'Clevertech',
			link: 'https://clevertech.biz',
			badges: ['Remote'],
			title: 'Lead Android Developer → Full Stack Developer',
			start: '2015',
			end: '2021',
			description:
				'Created Android mobile apps and led teams for companies like Vision Media, DKMS, and AAA. Built a live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL',
		},
		{
			company: 'Jojo Mobile',
			link: 'https://bsgroup.eu/',
			badges: [],
			title: 'Android Developer → Lead Android Developer',
			start: '2012',
			end: '2015',
			description:
				'Led the Android team and developed apps for major Polish companies like LOT, Polskie Radio, Agora, and PolskaPress',
		},
		{
			company: 'Nokia Siemens Networks',
			link: 'https://www.nokia.com',
			badges: [],
			title: 'C/C++ Developer',
			start: '2010',
			end: '2012',
			description: 'Developed and tested software for LTE base stations',
		},
	],
	skills: [
		'JavaScript',
		'TypeScript',
		'React/Next.js/Remix',
		'Node.js',
		'GraphQL',
		'Relay',
		'WebRTC',
	],
	projects: [
		{
			title: 'Parabol',
			techStack: [
				'Full Stack Developer',
				'TypeScript',
				'React',
				'Node.js',
				'GraphQL',
			],
			description:
				'The Agile meeting co-pilot that delivers better meetings with less effort',
			link: {
				label: 'github.com',
				href: 'https://parabol.co/',
			},
		},
		{
			title: 'Evercast',
			techStack: [
				'Lead Frontend Developer',
				'TypeScript',
				'React',
				'Node.js',
				'GraphQL',
			],
			description:
				'Creative collaboration platform that combines video conferencing and HD media streaming',
			link: {
				label: 'evercast.us',
				href: 'https://www.evercast.us/',
			},
		},
		{
			title: 'Consultly',
			techStack: [
				'Side Project',
				'TypeScript',
				'Next.js',
				'Vite',
				'GraphQL',
				'WebRTC',
			],
			description: 'A platform to build and grow your online business',
			link: {
				label: 'consultly.com',
				href: 'https://consultly.com/',
			},
		},
		{
			title: 'Monito',
			techStack: ['Side Project', 'TypeScript', 'Next.js', 'Browser Extension'],
			description:
				'Browser extension that records everything happening in a web application',
			link: {
				label: 'monito.dev',
				href: 'https://monito.dev/',
			},
		},
		{
			title: 'Jarocki.me',
			techStack: ['Side Project', 'Next.js', 'MDX'],
			description:
				'Personal website and blog. Built with Next.js and Notion API',
			link: {
				label: 'github.com',
				href: 'https://jarocki.me/',
			},
		},
		{
			title: 'Minimal',
			techStack: ['Side Project', 'Next.js', 'Puppeteer'],
			description:
				'Minimalist calendars, habit trackers, and planners generator',
			link: {
				label: 'useminimal.com',
				href: 'https://useminimal.com/',
			},
		},
		{
			title: 'Barepapers',
			techStack: ['Side Project', 'Next.js', 'Puppeteer'],
			description:
				'Generates beautiful wallpapers using random shapes and gradients',
			link: {
				label: 'barepapers.com',
				href: 'https://barepapers.com/',
			},
		},
		{
			title: 'Year progress',
			techStack: ['Side Project', 'TypeScript', 'Next.js'],
			description: 'Tracks current year progress and displays a countdown',
			link: {
				label: 'getyearprogress.com',
				href: 'https://getyearprogress.com/',
			},
		},
		{
			title: 'Mobile Vikings',
			techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
			description:
				'Android application for leading virtual mobile operator in Poland',
			link: {
				label: 'mobilevikings.pl',
				href: 'https://mobilevikings.pl/',
			},
		},
		{
			title: 'Howdy',
			techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
			description: 'Howdy is a place for joining communities you care about',
			link: {
				label: 'play.google.com',
				href: 'https://howdy.co/',
			},
		},
		{
			title: 'Tastycloud',
			techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
			description:
				'Android application for managing and displaying restaurant menus in kiosk mode',
			link: {
				label: 'tastycloud.fr',
				href: 'https://www.tastycloud.fr/',
			},
		},
		{
			title: 'Ambit',
			techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
			description:
				'Android application that helps with sharing your contact details',
		},
		{
			title: 'Bim',
			techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
			description:
				'Android application that helps with booking a table in a restaurants',
		},
		{
			title: 'Canal Digital GO',
			techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
			description:
				'Video streaming mobile application for Canal Digital subscribers',
		},
	],
} as const