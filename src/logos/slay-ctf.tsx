import Image from 'next/image';
import SLAY_CTF_BANNER from '@/assets/images/slay-banner.png';
import SLAY_CTF from '@/assets/icons/SlayCtf_animated.svg';
import Twitter_Logo from '@/assets/icons/twiter-x.png';
import RULES from '@/assets/images/rules-image_optimized.png';

interface LogoInput {
  className?: string;
}

const SLAY_LOGO = ({ className }: LogoInput) => (
  <Image src={SLAY_CTF} alt='SLAY' className={className} />
);
const SLAY_BANNER = ({ className }: LogoInput) => (
  <Image src={SLAY_CTF_BANNER} alt='SLAY BANNER' className={className} />
);
const TWITTER_LOGO = ({ className }: LogoInput) => (
  <Image src={Twitter_Logo} alt='Twitter Logo' className={className} />
);
const RULES_IMAGE = ({ className }: LogoInput) => (
  <Image src={RULES} alt='Twitter Logo' className={className} />
);

export default SLAY_LOGO;
export { SLAY_BANNER, TWITTER_LOGO, RULES_IMAGE };
