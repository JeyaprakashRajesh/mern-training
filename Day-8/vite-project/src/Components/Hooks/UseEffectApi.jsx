import { useEffect, useState } from "react"
import axios from 'axios'

const UseEffectAPI = () => {
    const [data, setData] = useState([]); 

    useEffect(() => {
        const apicall = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setData(response.data);
        }
        apicall();
    }, []); 

    return (
        <div>
            <h3>This page for API</h3>
            <h3>JSONPlaceholder API Posts are:</h3>
            {
                
                    data.map((singleData) => {
                        return (
                            <div key={singleData.id}> 
                                <p>UserId: {singleData.userId}</p>
                                <p>Title: {singleData.title}</p>
                                <p>Body: {singleData.body}</p>
                            </div>
                        );
                    })
                
            }
        </div>
    );
}

export default UseEffectAPI;