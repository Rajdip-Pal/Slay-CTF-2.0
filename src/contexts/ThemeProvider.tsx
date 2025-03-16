import React, { ReactNode } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext: React.Context<ThemeContextType> =
  React.createContext<ThemeContextType>({
    theme: 'dark',
    toggleTheme: (): void => {},
  });

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [theme, setTheme] = React.useState<string>('dark');
  const toggleTheme = (): void => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
export default ThemeProvider;
