import { FaqSection } from '@/components/ui/faq';
import { FAQ_ITEMS } from '@/constants';

export default function FAQ() {
	return (
		<FaqSection
			title="Frequently Asked Questions"
			description=""
			items={FAQ_ITEMS}
			contactInfo={{
				title: 'Still have questions?',
				description: "We're here to help you",
				buttonText: 'Contact Support',
				onContact: () => console.log('Contact support clicked'),
			}}
			className="w-full justify-center font-sans"
		/>
	);
}
