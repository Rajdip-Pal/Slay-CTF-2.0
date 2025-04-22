'use client';
import React from 'react';
import { ThemeContext } from '@/contexts/ThemeProvider';
import Rules from '@/components/Rules';
import { motion } from 'framer-motion';
import FAQ from '../components/Faq';
import { Clock } from '@/components/Clock';
import Sponsers from '@/components/Sponsers';

function Home() {
	React.useEffect(() => {
		document.title = 'Home | Slay CTF';
	});

	const { theme } = React.useContext(ThemeContext);

	return (
		<React.Fragment>
			<div
				className={`z-10 min-h-screen flex flex-col items-center justify-center max-w-[90%] text-center ${
					theme === 'dark' ? 'text-white' : 'text-black'
				} px-4 sm:px-6`}
			>
				<motion.img
					id="background"
					src="/images/slayy.png"
					alt="Slay CTF Logo"
					initial={{ y: -30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2, duration: 1 }}
					className="max-w-[80%] sm:max-w-xs md:max-w-sm lg:max-w-md w-full h-auto mb-4 drop-shadow-lg shadow-white"
				/>
				<div className="mt-20 sm:mt-40 typing-container">
					<div className="text-sm sm:text-xl md:text-3xl lg:text-4xl font-bold text-center text-white border border-pink-500 rounded px-2 sm:px-4 py-2 flex flex-col items-center justify-center">
						<span className="typing p-2 pl-4 pr-4">Let the game begin.</span>
					</div>
				</div>
			</div>

			<div className="w-full space-y-10 md:space-y-20 flex flex-col justify-center items-center">
				<Clock />
				<section id="about" className="max-w-[90%] flex flex-col items-center">
					<Rules />
					<FAQ />
				</section>
				<Sponsers />
			</div>
		</React.Fragment>
	);
}

export default Home;
