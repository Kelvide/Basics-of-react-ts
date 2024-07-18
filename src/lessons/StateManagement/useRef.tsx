import { useEffect, useRef, useState } from "react";

const Component = () => {
    // useRef doesn't re-render the component when the state is updated
    const idRef = useRef<number>(1);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [names, setNames] = useState<{ id: number, name: string }[]>([])

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    const addName = () => {
        if (inputRef.current) {
            setNames([...names, { id: idRef.current++, name: inputRef.current?.value }])
            inputRef.current.value = "";
        }
    }

    return (
        <>
            <div>
                {names.map((name) => (
                    <p key={name.id}>{name.id}.{name.name}</p>
                ))}
                <input type="text" ref={inputRef} />
                <button onClick={addName}>Add Name</button>
            </div>
        </>
    )
}

export default Component