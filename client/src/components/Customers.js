import { useState, useEffect } from 'react'
import axios from 'axios';



function Customers() {

    //const [posts, setPosts] = useState([]);
    const [posts, setPosts] = useState([]);

    const fetchPost = async () => {
        // const response = await axios('https://api.chucknorris.io/jokes/random')
        const response = await axios('https://swapi.dev/api/people/1/ ')
        setPosts(response.data)
    }

    useEffect(() => {
        fetchPost();
    }, [])



    return (
        <div style={{color: 'white'}}>
            <div>test</div>
            <div>

                {posts}
            </div>


        </div>
    )
}

export default Customers