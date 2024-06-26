import './globals.css'
import { Inter } from 'next/font/google'
import { RESUME_DATA } from '@/data/resume-data'
import { Analytics } from '@vercel/analytics/react'

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: 'http://localhost:3000'

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
	description: RESUME_DATA.summary,
}

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={inter.className}>
			<body className='bg-background text-foreground flex flex-col'>
				{children}
			</body>
			<Analytics />
		</html>
	)
}
