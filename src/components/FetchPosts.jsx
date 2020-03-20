import React from 'react';

let FetchedPosts = ({posts}) => {

    if (!posts.length) {
        return <div><p className='text-center'>No posts</p>
            <button className='btn btn-primary'>Load</button>
        </div>
    }
    return <div>
        <h1>Fetched posts</h1>
    </div>

}

export default FetchedPosts