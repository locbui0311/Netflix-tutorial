import { useEffect, useState } from "react";

interface Post {
    id: number;
    title: string;
}

const HooksUseEffect = () => {

    // 1. useEffect(callback)
        //- Gọi callback mỗi khi component re-render
        //- Gọi callback sau khi component thêm element vào DOM
    // 2. useEffect(callback, [])
        //- Chỉ Gọi callback 1 lần sau khi component Mounted
    // 3. useEffect(callback, [deps])
    //--------------------------------
    ///1. callback luôn được gọi sau khi component mounted

    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState<Post[]>([]);
    
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res=> res.json())
       .then(posts=> {
         setPosts(posts);
       })
       
    }, []) 


    return (
         
        <div className=" h-screen bg-slate-400" >
            <h1 className="text-4xl font-bold text-gray-800"> Hello new page</h1>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <ul>
                {posts.map(post => (
                <li key={post.id}> {post.title}</li>
                ))}

            </ul>
        </div>
    )
}

export default HooksUseEffect;