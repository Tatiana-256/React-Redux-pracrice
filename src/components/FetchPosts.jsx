import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Post from "./Post";
import {fetchedPost} from "../redux/actions";

let FetchedPosts = () => {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loader = useSelector(state => state.loading.loading)

    if (loader) {
        return (<div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>)
    }

    if (!posts.length) {
        return <div><p className='text-center'>No posts</p>
            <button onClick={() => dispatch(fetchedPost())} className='btn btn-primary'>Load</button>
        </div>
    }
    return posts.map(post => <Post post={post} key={post.id}/>)

}

export default FetchedPosts