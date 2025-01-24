import { useState, useCallback } from "react";
import ListItem from "./List";

const UseCallback = () => {
    const [num, setNum] = useState(0);
    const [dark, setDark] = useState(true);
    const styling = {
        backgroundColor: dark ? "black" : "white", color: dark ? "white" : "black"
    };

    const getItem = useCallback(() => {
        return [num + 1, num + 2, num + 3];
    }, [num]);

    return (
        <div style={styling}>
            <button onClick={() => setDark(curTheme => !curTheme)}>Change Theme</button>
            <h2>This is Callback</h2>
            <input type="number" value={num} onChange={(e) => setNum(Number(e.target.value))} />
            <button onClick={() => setNum(0)}>Reset</button>
            <h3>This is num {num}</h3>
            <ListItem getItem={getItem} />
        </div>
    );
};

export default UseCallback;