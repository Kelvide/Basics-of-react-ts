import { useRef } from "react"
import { userStore } from "./store"

const Component = () => {
    // You can import this way also
    // const {  allUsers, setAllUsers } = userStore()

    const allUsers = userStore((state) => state.allUsers)
    const setAllUsers = userStore((state) => state.setAllUsers)

    const idRef = useRef<number>(1)
    const nameRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const phoneRef = useRef<HTMLInputElement | null>(null)

    const handleAddition = () => {
        if (nameRef.current && emailRef.current && phoneRef.current) {
            const newUser = { id: idRef.current++, name: nameRef.current.value, email: emailRef.current.value, phone: phoneRef.current.value }
            setAllUsers([...allUsers, newUser])
        }
    }

    return (
        <div>
            <h2>All users</h2>
            {(allUsers && allUsers.length > 0) ?
                <>
                    {allUsers.map((user) => <div>
                        <p style={{ margin: '0px' }}>{user.id}. {user.name}, {user.email}, +234 {user.phone}</p>
                    </div>)}
                </>
                :
                <p>No user in the store</p>
            }
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: "20px" }}>
                <h2 style={{ margin: '0px' }}>Fill in a new user</h2>
                <input style={{ padding: "5px" }} type="text" ref={nameRef} placeholder="name" />
                <input style={{ padding: "5px" }} type="text" ref={emailRef} placeholder="example@mail.cpm" />
                <input style={{ padding: "5px" }} type="text" ref={phoneRef} placeholder="+234" />
                <button onClick={handleAddition}>Add</button>
            </div>
        </div>
    )
}

export default Component