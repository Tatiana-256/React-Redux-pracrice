import React from 'react';
import Post from "./Post";
import {connect} from "react-redux";
import {setNewPost} from "../redux/actions";

let Posts = ({myPosts}) => {
    if (!myPosts.length) {
        return <p className='text-center'>No posts</p>
    }
    return myPosts.map(post => <Post post={post} key={post.id}/>)
}

const mapStateToProps = state => {
    return {myPosts: state.posts.posts}
}


export default connect(mapStateToProps, null)(Posts)