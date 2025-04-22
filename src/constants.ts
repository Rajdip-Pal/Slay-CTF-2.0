import { TestimonialCardProps } from '@/components/ui/testimonial-card';
import { TimelineCardProps } from './webPages/Timeline';

export const LOGIN_URL: string = 'http://16.16.118.123:8000/login';
export const REGISTRATION_URL: string = 'http://16.16.118.123:8000/register';
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
    event: 'Null Meetup',
    date: '26 Apr 2025',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ut quibusdam molestiae corporis. Aliquam aperiam quae non. Ipsam, odio culpa odit exercitationem repudiandae libero consectetur sapiente voluptates accusantium fugit laboriosam.',
  },
  {
    event: 'CTF Event',
    date: '25 Apr 2025',
    time: '3:00 PM - 6:00 PM',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam beatae, rerum odit, architecto ipsa sit consequatur delectus illo aperiam harum distinctio, tenetur facilis dolor nostrum. Consequuntur incidunt quasi sunt enim?',
  },
  {
    event: 'Code Event',
    date: '28 Apr 2025',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam beatae, rerum odit, architecto ipsa sit consequatur delectus illo aperiam harum distinctio, tenetur facilis dolor nostrum. Consequuntur incidunt quasi sunt enim?',
  },
  {
    event: 'Event End',
    date: '29 Apr 2025',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam beatae, rerum odit, architecto ipsa sit consequatur delectus illo aperiam harum distinctio, tenetur facilis dolor nostrum. Consequuntur incidunt quasi sunt enim?',
  },
];
