'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

function Sponsers() {
	return (
		<section id="sponsor">
			<motion.div className="relative flex flex-col items-center justify-center max-w-[80%] md:max-w-xl mx-auto space-y-6 text-white px-4 py-8 rounded-2xl min-h-[400px]">
				{/* Squid game theme image */}
				<Image
					src="/images/sponsor-soldiers.png"
					alt="Soldiers Image"
					width={500}
					height={500}
					className="object-contain"
				/>

				{/* Sponsored by text */}
				<motion.h2
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="text-white text-3xl md:text-4xl font-semibold text-center drop-shadow-[0_0_10px_rgba(236,72,153,0.9)] mb-10"
				>
					Our Collaborators
				</motion.h2>

				{/* Sponsor Logo + Socials */}
				<div className="relative flex flex-col items-center space-y-4 p-6 rounded-2xl bg-black border border-pink-600 before:absolute before:inset-1 before:rounded-2xl before:animate-glow before:bg-gradient-to-r before:from-pink-500 before:via-red-500 before:to-pink-500 before:blur-sm hover:scale-105 transition-transform duration-300 ease-in-out">
					<Image
						src="/images/null-kolkata.png"
						alt="null-logo"
						width={90}
						height={90}
						className="object-contain z-[2] rounded-sm"
					/>

					{/* Social Media Icons */}
					<div className="flex space-x-6 text-2xl text-yellow-400 z-[2]">
						<Link
							href="https://www.linkedin.com/company/null-kolkata-chapter/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin className="hover:text-white transition duration-300" />
						</Link>
						<Link
							href="https://www.facebook.com/nullkolkata"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebook className="hover:text-white transition duration-300" />
						</Link>
						<Link
							href="https://x.com/nullkol?s=11"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaXTwitter className="hover:text-white transition duration-300" />
						</Link>
					</div>
				</div>
			</motion.div>
		</section>
	);
}

export default Sponsers;
