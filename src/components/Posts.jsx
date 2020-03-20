import React from 'react';
import Post from "./Post";

let Posts = ({posts}) => {
    if (!posts.length) {
        return <p className='text-center'>No posts</p>
    }
    return posts.map(post => <Post post={posts} key={posts}/>)
}

export default Posts