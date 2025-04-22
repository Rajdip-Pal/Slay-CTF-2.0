import { TestimonialCardProps } from '@/components/ui/testimonial-card';
import { TimelineCardProps } from './webPages/Timeline';

export const LOGIN_URL: string = 'https://slay-ctf.zerologon.co.in/login';
export const REGISTRATION_URL: string = 'https://slay-ctf.zerologon.co.in/register';
export const EVENT_MEMBERS: TestimonialCardProps[] = [
	{
		author: {
			name: 'Pankaj Barman',
			title: 'Lead Organiser',
			avatar: './images/memebrs/pankaj-barman.png',
			linkedin: 'https://www.linkedin.com/in/pankaj-barman-737b97224/',
			github: 'https://github.com/Pankaj0038',
		},
	},
	{
		author: {
			name: 'Sandipan Chatterjee',
			title: 'Lead Organiser',
			avatar: './images/memebrs/sandipan-chatterjee.png',
			linkedin: 'https://www.linkedin.com/in/sandipan-chatterjee-jgec/',
			github: 'https://github.com/sandy3002',
		},
	},
	{
		author: {
			name: 'Purbayan Kumar Das',
			title: 'Challenge Creator',
			avatar: './images/memebrs/purbayan-kumar-das.png',
			linkedin: 'https://www.linkedin.com/in/purbayan-kumar-das-350037256/',
			github: 'https://github.com/purb03ragnarok',
		},
	},
	{
		author: {
			name: 'Kaustav Das',
			title: 'Challenge Creator',
			avatar: './images/memebrs/kaustav-das.png',
			linkedin: 'https://www.linkedin.com/in/kaustav258/',
			github: 'https://github.com/kaustav258',
		},
	},
	{
		author: {
			name: 'Adil Hossain Sana',
			title: 'Challenge Creator',
			avatar: './images/memebrs/adil-hossain-sana.png',
			linkedin: 'https://www.linkedin.com/in/adil-hossain-sana-366871283/',
			github: 'https://github.com/SpiderSec101',
		},
	},
	{
		author: {
			name: 'Souhardya Deb',
			title: 'Web Team Lead',
			avatar: './images/memebrs/souhardya.png',
			linkedin: 'https://www.linkedin.com/in/souhardya-deb-921578254/',
			github: 'https://github.com/Souhardya03',
		},
	},
	{
		author: {
			name: 'Ankit Ghosh',
			title: 'Challenge Creator',
			avatar: './images/memebrs/ankit-ghosh.png',
			linkedin: 'https://www.linkedin.com/in/ankit-ghosh0529/',
			github: 'https://github.com/Daks29',
		},
	},
	{
		author: {
			name: 'Amrik Hore',
			title: 'Challenge Creator',
			avatar: './images/memebrs/amrik-hore.png',
			linkedin: 'https://www.linkedin.com/in/amrikhore/',
			github: 'https://github.com/amrikhore86',
		},
	},
	{
		author: {
			name: 'Sarbik Chatterjee',
			title: 'Web Team',
			avatar: './images/memebrs/sarbik-chatterjee.png',
			linkedin: 'https://www.linkedin.com/in/sarbik-chatterjee/',
			github: 'https://github.com/sarbik99',
		},
	},
	{
		author: {
			name: 'Suvayu Nandy',
			title: 'Web Team',
			avatar: './images/memebrs/suvayu-nandy.png',
			linkedin: 'https://www.linkedin.com/in/suvayu-nandy/',
			github: 'https://github.com/suvayuN',
		},
	},
	{
		author: {
			name: 'Bitan Das',
			title: 'Web Team',
			avatar: './images/memebrs/bitan-das.png',
			linkedin: 'https://www.linkedin.com/in/bitandas/',
			github: 'https://github.com/bitan2504',
		},
	},
	{
		author: {
			name: 'Rajdip Pal',
			title: 'Web Team',
			avatar: './images/memebrs/rajdip.png',
			linkedin: 'https://www.linkedin.com/in/rajdip-pal/',
			github: 'https://github.com/Rajdip-Pal',
		},
	},
];
export const EVENT_RULES: string[] = [
	'Participants are allowed to use any tool (online/offline) for solving the challenges.',
	'Flag sharing is strictly prohibited. It will cause a ban from the CTF for both players.',
	'The duration of the CTF is 3 hours.',
	'Any type of attack on the CTF website is strictly prohibited.',
	"The Flag Format for the event 'slay{DEMO_FLAG}' ",
];
export const EVENT_TIMES: TimelineCardProps[] = [
	{
		event: 'Inauguration & CTF',
		date: '25 Apr 2025',
		time: '3:00 PM - 6:30 PM',
		description:
			'The event begins with the inauguration followed by a thrilling Capture The Flag (CTF) competition that runs into the evening.',
	},
	{
		event: 'Null Meetup',
		date: '26 Apr 2025',
		time: '10:00 AM - 2:00 PM',
		description:
			'The day kicks off with sessions by speakers from 10:00 AM, covering diverse topics in tech. Two insightful speaker slots are planned before lunch.',
	},
	{
		event: 'Workshop',
		date: '26 Apr 2025',
		time: '2:00 PM - 4:00 PM',
		description:
			'A hands-on 2-hour workshop conducted onsite to dive deeper into practical skills and learning.',
	},
	{
		event: 'Event End',
		date: '29 Apr 2025',
		time: '5:00PM',
		description:
			'The event concludes with a reflection on the exciting challenges and knowledge shared over the past days, leaving participants inspired and motivated. Thanks for being a part of Slay CTF',
	},
];
export const FAQ_ITEMS = [
	{
		question: 'What is a Capture The Flag (CTF) competition?',
		answer: 'A CTF is a cybersecurity competition where participants solve challenges to find hidden "flags" and earn points.',
	},
	{
		question: 'Who can participate in the Slay CTF event?',
		answer: 'Anyone with an interest in cybersecurity, from beginners to experts, can participate in the Slay CTF event.',
	},
	{
		question: 'What tools are allowed during the competition?',
		answer: 'Participants are allowed to use any tools, both online and offline, to solve the challenges.',
	},
	{
		question: 'Are team collaborations allowed?',
		answer: 'No, Only single player participations are allowed, and flag sharing is also stricly prohibited between players.',
	},
	{
		question: 'Is attacking the CTF website allowed?',
		answer: 'No, any type of attack on the CTF website is strictly prohibited and will lead to disqualification.',
	},
	{
		question: 'Will there be any workshops or sessions?',
		answer: 'Yes, there will be workshops and speaker sessions covering diverse topics in tech during the event.',
	},
	{
		question: 'How can I register for the event?',
		answer: 'You can register for the event using the registration link: https://slay-ctf.zerologon.co.in/register.',
	},
];
