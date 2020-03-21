import React from 'react';


let Post = ({post}) => {
    return <div className='card'>
        <div className='cart-body'>
            <h5 className='card-title'>{post.title}</h5>
        </div>
    </div>
}

export default Post