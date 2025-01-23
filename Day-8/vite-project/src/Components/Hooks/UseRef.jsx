import { useEffect, useRef, useState } from "react";

const UseRef = () => {
    var [text, setText] = useState("Hello");
    var prevRender = useRef();
    useEffect(()=>{
        console.log(prevRender.current)
        prevRender.current = text
    },[text])
    return (
        <div>
            <h3>This page is UseRef Hook</h3>
            <input type="Text" value={text} onChange={(e) => setText(e.target.value)} />
            <h3>The text is {text}</h3>
            <h4>The prevRender text is {prevRender.current}</h4>
        </div>
    )

}

export default UseRef;