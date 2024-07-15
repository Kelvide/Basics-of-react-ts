import { ThemeProvider, useTheme } from "./context";

function ParentComponent() {
    return (
        <ThemeProvider>
            <Component />
        </ThemeProvider>
    )
}

const Component = () => {
    const context = useTheme()
    console.log(context);

    return (
        <div>
            <h2>Context API</h2>
            <button onClick={() => {
                if (context.theme === 'dark') {
                    context.setTheme('light')
                    return;
                }
                context.setTheme('dark')
            }}
            >Toggle Theme</button>
        </div>
    )
}

export default ParentComponent