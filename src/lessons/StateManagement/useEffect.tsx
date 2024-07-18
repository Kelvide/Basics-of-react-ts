import { useEffect, useState } from "react"

const Component = () => {
    const [names, setNames] = useState([])
    useEffect(() => {
        fetch('/names.json')
            .then((response) => response.json())
            .then((data) => setNames(data))
    }, [])


    const [time, setTime] = useState(10)

    useEffect(() => {
        // This approach continuously calls setTime with a fixed 'time' value from the initial render.
        // This can lead to incorrect updates due to stale state, as 'time' may not reflect the latest state value.
        // setInterval(() => {
        //     setTime(time + 1)
        // }, 1000)

        // Second Approach (Recommended)
        // This approach uses the functional form of setState, which ensures that the state update is based on the latest state value, preventing issues related to stale state.
        // This is particularly important in React to ensure accurate and reliable state updates.
        const interval = setInterval(() => {
            setTime((time) => time + 1)
        }, 1000)
        return () => clearInterval(interval);
    }, [])



    return (
        <>
            <p>Names: {names.join(', ')}</p>
            <p>Time: {time}</p>
        </>
    )
}

export default Component