import { useEffect,useState} from "react";

const UseEffect = ()=>{  
    var [text,setText]=useState("");
    var [text1,setText1]=useState("");
    useEffect(()=> {
        console.log(text)
    },[text])
    return(
        <div>
        <h3>This is useEffect</h3>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <h3>The text is {text}</h3>
        <input type="Text" value={text1} onChange={(e)=> setText1(e.target.value)}/>
        <h3>The text is {text1}</h3>
        </div>
    )
}
export default UseEffect;