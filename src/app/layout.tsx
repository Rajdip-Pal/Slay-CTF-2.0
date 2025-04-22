import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import MobileNavContextProvider from '@/contexts/MobileNavProvider';
import ClientWrapper from '@/components/ClientWrapper';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Slay CTF | JGEC',
	description: 'Slay CTF is an amazing CTF event organsied by Zero Logon JGEC.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-full overflow-x-hidden`}
			>
				<ClientWrapper>
					<MobileNavContextProvider>{children}</MobileNavContextProvider>
				</ClientWrapper>
			</body>
		</html>
	);
}
