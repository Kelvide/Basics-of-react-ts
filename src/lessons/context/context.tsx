import { createContext, useContext, useState } from 'react'

const ThemeProvierContext = createContext<{ name: string } | undefined>(undefined)


export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return <ThemeProvierContext.Provider value={{ name: "Hello World" }}>
        {children}
    </ThemeProvierContext.Provider>
}

export const useTheme = () => {
    const context = useContext(ThemeProvierContext)
    if (context === undefined)
        throw new Error('useTheme must be used within th ThemeProvider')
    return context
}