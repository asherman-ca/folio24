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
			company: 'Candace Crow Design',
			link: 'https://candacecrowe.com/',
			badges: ['Remote'],
			title: 'Lead Software Engineer',
			start: '2024',
			end: null,
			description:
				'Ground up development of custom CMS, Database architecture, Prod & Dev infrastructure, Image processing, Partner integrations. Technologies: React, TypeScript, SQL',
		},
		{
			company: 'Lyell Immunopharma',
			link: 'https://lyell.com/',
			badges: ['Hybrid'],
			title: 'Team Leader',
			start: '2021',
			end: null,
			description:
				'Designed & implemented FE data solution for lyell.com, deployed & maintained IT automation workflows. Technologies: React, TypeScript, Node.js',
		},
		{
			company: 'Nurx',
			link: 'https://nurx.com',
			badges: ['On Site'],
			title: 'Software Engineer',
			start: '2019',
			end: '2021',
			description:
				'Implimented new features, performed database migrations & mutations, and implimented design patterns. Technologies: Ember, TypeScript, Node.js',
		},
		{
			company: 'MyOnlinePool',
			link: 'https://myonlinepool.com',
			badges: ['Remote'],
			title: 'Lead Software Engineer',
			start: '2017',
			end: '2018',
			description:
				'Created NFL-fantasy-sports web application. Implimented authentication features, NFL stats integrations and Stripe processing. Technologies: Rails, React, SQL',
		},
		{
			company: 'App Academy',
			link: 'https://www.appacademy.io/',
			badges: ['On Site'],
			title: 'Teaching Assistant',
			start: '2017',
			end: '2018',
			description:
				'Taught introductory Ruby and Javascript, assisted in platform debugging & feature development, and evaluated applicants. Technologies: Ruby, JavaScript, React, Rails',
		},
	],
	skills: [
		'JavaScript',
		'TypeScript',
		'React/Next.js',
		'Node.js',
		'GraphQL',
		'SQL',
		'Ruby',
		'Python',
	],
	projects: [
		{
			title: 'Chonkify',
			techStack: [
				'Side Project',
				'Next.js',
				'TypeScript',
				'Node.js',
				'Postgres',
			],
			description:
				'AI image generator that trains model and generates chonky pets in under 30 seconds',
			link: {
				label: 'chonkify.ai',
				href: 'https://www.chonkify.ai',
			},
		},
		{
			title: 'Flashdeck',
			techStack: [
				'Side Project',
				'Next.js',
				'TypeScript',
				'Node.js',
				'Postgres',
			],
			description: 'AI empowered study platform',
			link: {
				label: 'flashdeck-five.vercel.app',
				href: 'https://flashdeck-five.vercel.app/',
			},
		},
		{
			title: 'Deep Rock Builds',
			techStack: [
				'Side Project',
				'Next.js',
				'TypeScript',
				'Node.js',
				'Postgres',
			],
			description:
				'Build sharing platform for the Deep Rock Galactic community.',
			link: {
				label: 'deeprockbuilds.vercel.app',
				href: 'https://deeprockbuilds.vercel.app/',
			},
		},
		{
			title: 'Liquify',
			techStack: [
				'Side Project',
				'Next.js',
				'TypeScript',
				'Node.js',
				'Postgres',
			],
			description:
				'Crypto-futures trading testnet platform with real-time liquification events.',
			link: {
				label: 'liquify-three.vercel.app',
				href: 'https://liquify-three.vercel.app/',
			},
		},
		{
			title: 'Supper',
			techStack: ['Side Project', 'TypeScript', 'Next.js', 'Postgres'],
			description: 'A Job Search Tracker with AI CV Builder',
			link: {
				label: 'supper-eta.vercel.app/',
				href: 'https://supper-eta.vercel.app/',
			},
		},
		{
			title: 'Chonkify',
			techStack: [
				'Side Project',
				'TypeScript',
				'Next.js',
				'Midjourney',
				'Postgres',
			],
			description:
				'AI image generator that trains model and generates chonky pets in under 60 seconds',
			link: {
				label: 'chonkify.vercel.app/',
				href: 'https://chonkify.vercel.app/',
			},
		},
	],
} as const
