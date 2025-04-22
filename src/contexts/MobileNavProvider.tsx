'use client';
import React from 'react';

interface MobileNavContexttype {
	navShow: Boolean;
	toggleNavShow: () => void;
}

const MobileNavContext: React.Context<MobileNavContexttype> =
	React.createContext<MobileNavContexttype>({
		navShow: false,
		toggleNavShow: (): void => {},
	});

interface ThemeProviderProps {
	children: React.ReactNode;
}

const MobileNavContextProvider: React.FunctionComponent<ThemeProviderProps> = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [navShow, setnavShow] = React.useState<Boolean>(false);
	const toggleNavShow = (): void => setnavShow(!navShow);
	return (
		<MobileNavContext.Provider value={{ navShow, toggleNavShow }}>
			{children}
		</MobileNavContext.Provider>
	);
};

export { MobileNavContext };
export default MobileNavContextProvider;
