import React from 'react';
import PostForm from "./components/PostsForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchPosts";

function App() {
    return (
        <div className='container pt-3'>
            <div className="row">
                <div className="col">
                    <PostForm/>
                </div>
            </div>
            <div className="row">
                <div className='col'>
                    <h2>Synchronous posts</h2>
                    <Posts posts={[]}/>
                </div>
                <div className='col'>
                    <h2>Asynchronous posts</h2>
                    <FetchedPosts posts={[]}/>
                    <div/>
                </div>
            </div>
        </div>
    );
}

export default App;
