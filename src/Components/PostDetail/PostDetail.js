import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost]= useState({});
    const [comments, setComments] = useState({})

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[id]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [id])

    return (
        <div>
            <h3>User Posted: {post.id}</h3>
            <p>Title {post.title}</p>
            <p>Body: {post.body}</p>
            <h5>Number of comments : {comments.id}</h5>
            <p>Comment: {comments.body}</p>
            <p>{comments.name} : {comments.email}</p>
        </div>
    );
};

export default PostDetail;