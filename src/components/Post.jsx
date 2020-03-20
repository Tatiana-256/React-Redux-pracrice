import React from 'react';


let Post = ({post}) => {
    return <div className='card'>
        <div className='cart-body'>
            <h5 className='card-title'>Title here {post}</h5>
        </div>
    </div>
}

export default Post