import { useState, useEffect } from 'react'
import axios from 'axios';



function Customers() {

    //const [posts, setPosts] = useState([]);
    const [posts, setPosts] = useState([]);

    const fetchPost = async () => {
        const response = await axios('https://api.chucknorris.io/jokes/random')
        setPosts(response.data)
    }

    useEffect(() => {
        fetchPost();
    }, [])



    return (
        <div style={{color: 'white'}}>
            <div>test</div>
            <div>

                {posts.value}
            </div>


        </div>
    )
}

export default Customers