import { useEffect, useState } from "react"

const Component = () => {
    const [names, setNames] = useState([])
    useEffect(() => {
        fetch('/names.json')
            .then((response) => response.json())
            .then((data) => setNames(data))
    }, [])


    return (
        <div>Names: {names.join(', ')}</div>
    )
}

export default Component