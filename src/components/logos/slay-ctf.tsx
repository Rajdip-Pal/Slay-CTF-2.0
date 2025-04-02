import Image from 'next/image';
import SLAY_CTF_BANNER from '@/assets/images/slay-banner.png';
import SLAY_CTF from '@/assets/images/SlayCtf.svg';
import Twitter_Logo from '@/assets/images/twiter-x.png';
import RULES from '@/assets/images/rules-image_optimized.png';

const SLAY_LOGO = () => <Image src={SLAY_CTF} alt='SLAY' />;
const SLAY_BANNER = () => <Image src={SLAY_CTF_BANNER} alt='SLAY BANNER' />;
const TWITTER_LOGO = () => <Image src={Twitter_Logo} alt='Twitter Logo' />;
const RULES_IMAGE = () => <Image src={RULES} alt='Twitter Logo' />;

export default SLAY_LOGO;
export { SLAY_BANNER, TWITTER_LOGO, RULES_IMAGE };
