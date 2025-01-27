import { useEffect, useState } from "react";
const UseLocal = (key, Value) => {
    const [text, setText] = useState(() => {
        const jsonValue = localStorage.getItem(key);
        if (jsonValue !== null) return JSON.parse(jsonValue);
        return Value;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(text));
    }, [key, text]);
    return [text, setText];
};
export default UseLocal;