import { useState } from "react"

export default function State() {
    const [variable , setVariable] = useState(0)
    return(
        <div>
            <div>{variable}</div>
            <button onClick={() => setVariable(variable + 10)} >Click to increment</button>
        </div>
    )
}