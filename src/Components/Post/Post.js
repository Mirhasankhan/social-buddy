import React from 'react';
import { Link } from 'react-router-dom';


const Post = (props) => {
    const {id, title, body} = props.post;
    // const history = useNavigate()
    // const showComments = id => {
    //     const url = `post/${id}`;
    //     history.push(url)
    
    return (
        <div>
            <h1><strong>{id}</strong>{title}</h1>

            <p>{body}</p>
            
            <Link to={`/post/${id}`}><button>Show Comments of : {id}</button></Link>
           
        </div>
    );
};

export default Post;