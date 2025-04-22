'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SlidingNumber } from '@/components/ui/sliding-number';

import SMILE from '@/assets/images/smile2.png';
import { REGISTRATION_URL } from '@/constants';

interface ClockProps {
	targetDate?: Date;
}

export function Clock({ targetDate = new Date('2025-04-25') }: ClockProps): React.JSX.Element {
	const [days, setDays] = React.useState<number>(0);
	const [hours, setHours] = React.useState<number>(0);
	const [minutes, setMinutes] = React.useState<number>(0);
	const [seconds, setSeconds] = React.useState<number>(0);

	React.useEffect(() => {
		const updateTimer = (): void => {
			const now: Date = new Date();
			const diff: number = targetDate.getTime() - now.getTime();

			if (diff <= 0) {
				setDays(0);
				setHours(0);
				setMinutes(0);
				setSeconds(0);
				return;
			}

			const diffDays: number = Math.floor(diff / (1000 * 60 * 60 * 24));
			const diffHours: number = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const diffMinutes: number = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
			const diffSeconds: number = Math.floor((diff % (1000 * 60)) / 1000);

			setDays(diffDays);
			setHours(diffHours);
			setMinutes(diffMinutes);
			setSeconds(diffSeconds);
		};

		updateTimer();
		const interval: NodeJS.Timeout = setInterval(updateTimer, 1000);

		return (): void => clearInterval(interval);
	}, [targetDate]);

	const Times: {
		Days: number;
		Hours: number;
		Minutes: number;
		Seconds: number;
	} = {
		Days: days,
		Hours: hours,
		Minutes: minutes,
		Seconds: seconds,
	};

	return (
		<div className="relative max-w-[80%] md:max-w-[60%] text-white bg-transparent flex flex-col items-center space-y-5 p-10 md:p-16 border rounded-2xl font-sans">
			<div className="flex justify-center md:space-x-5">
				{(['Days', 'Hours', 'Minutes', 'Seconds'] as Array<keyof typeof Times>).map(
					(item, index) => (
						<div
							key={index}
							className="flex flex-col justify-center items-center md:space-y-3"
						>
							<div className="text-3xl scale-75 md:scale-90 lg:scale-100 w-[4rem] md:w-20 h-[4rem] md:h-20 bg-pink-800 text-center flex justify-center rounded-sm  space-y-3 duration-700 overflow-hidden">
								<SlidingNumber
									value={Times[item]}
									padStart={true}
									className="font-bold"
								/>
							</div>
							<div className="text-xs md:text-xl w-full text-center">{item}</div>
						</div>
					),
				)}
			</div>
			<div className="flex flex-col justify-center items-center text-center space-y-3">
				<p className="text-sm md:text-xl mb-5">
					Don't Miss the Chance Registre yourself Now
				</p>
				<Link
					href={REGISTRATION_URL}
					className="p-2 pl-3 bg-transparent hover:bg-transparent border rounded-sm hover:scale-105 duration-700 hover:shadow-xl hover:shadow-pink-500 font-squidGame"
				>
					Register
				</Link>
			</div>
			<Image
				src={SMILE}
				alt="smiling"
				className="absolute rounded-full w-28 h-28 -right-10 md:-right-14 -top-20 md:-top-14 border-4 border-pink-800 scale-75 md:scale-100"
			></Image>
		</div>
	);
}
