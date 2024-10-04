import { useRef, useEffect, useState } from "react";

function Ref() {
    
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, []);

    const [names, setNames] = useState([{id: 1, name: "John"},
    {id: 2, name: "Jane"}])

    const OnAddName = () => {
        setNames([...names, {
            id: 10,
            name: inputRef.current.value
        }])
        inputRef.current.value = "";
    }

    return(
        <div>
            <div>
                {names.map((name) => {
                <div key={name.name}>{name.name}</div>
                })}
            </div>
            <input type="text" ref={inputRef} />
            <button onClick={OnAddName}>Add Name {console.log(inputRef)}</button>
        </div>
    )
}

export default Ref;