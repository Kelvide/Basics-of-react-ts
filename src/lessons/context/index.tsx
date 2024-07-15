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
        <div>Context API</div>
    )
}

export default ParentComponent