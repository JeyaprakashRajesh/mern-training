import { useMemo, useState } from "react";
import Home from "../Home";
const slowFunction = (num) => {
    for (let slow = 0; slow < 1000000000; slow++) { }
    return num * 2;

}

const UseMemo = () => {
    const [num, setNum] = useState(0);
    const [dark, setDark] = useState(false);
    const styling = {
        backgroundColor: dark ? "black" : "white", color: dark ? "white" : "black"
    }
    const doubleNum = useMemo(() => { return slowFunction(num) }, [num]);
    return (
        <div style={styling}>
            <Home/>
            <h2>This is Memo hook</h2>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)}></input>
            <button onClick={() => setDark(curTheme => !curTheme)}>toggle</button>
            <button onClick={() => setNum(0)}>Reset</button>
            <h2>The num is {doubleNum}</h2>
        </div>
    )
}
export default UseMemo;