import { useState } from "react";
var UseState = () =>{
    var init = 0
    var [num,setNum]=useState(init)
    return(
        <div>
            <h1>This is useState </h1>
            <button onMouseEnter={()=> setNum(num-1)}> -</button>
            <h4>The number is{num}</h4>
            <button onKeyDown={()=> setNum(num+1)}>+</button>
            <button onDoubleClick={()=> setNum(init)}>Reset</button>
        </div>
    )
}
export default UseState;