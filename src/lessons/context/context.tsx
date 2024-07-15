import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark' | 'system'

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme
}

const ThemeProvierContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({ children, defaultTheme = 'system' }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    return <ThemeProvierContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeProvierContext.Provider>
}

export const useTheme = () => {
    const context = useContext(ThemeProvierContext)
    if (context === undefined)
        throw new Error('useTheme must be used within th ThemeProvider')
    return context
}