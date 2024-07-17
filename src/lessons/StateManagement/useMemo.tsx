import { useMemo, useState } from "react"

const Component = () => {
    const [numbers] = useState([10, 20.30])

    // useMemo 
    // Use useMemo to memoize the result of the computation, preventing the function from being called on every re-render.
    // The function will only re-compute when the 'numbers' array is updated.
    const total = useMemo(
        () => numbers.reduce((acc, number) => acc + number),
        [numbers]
    )

    const [names] = useState(["John", "Doe", "Marry"])
    // Another use case 
    const sortedNames = useMemo(() => [...names].sort(), [names])

    return (
        <>
            <div>Total: {total}</div>
            <div>Names: {names.join(", ")}</div>
            <div>Sorted Name: {sortedNames.join(", ")}</div>
        </>
    )
}

export default Component