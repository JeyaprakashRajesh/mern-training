import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const ListItem = ({ getItem }) => {
    const [numbers, setNumbers] = useState([]);
    
    useEffect(() => {
        setNumbers(getItem());
    }, [getItem]);
    
    return (
        <div>
            <h3>The number of list</h3>
            <div>
                {numbers.map((number, index) => {
                    return <h4 key={index}>{number}</h4>;
                })}
            </div>
        </div>
    );
};

export default ListItem;