import { useState } from "react"


export default function TextState() {
    const [text , setText] = useState("")
    return(
        <div>
            <p>The Text entered is {text}</p>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}