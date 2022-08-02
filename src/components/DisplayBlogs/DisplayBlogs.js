import React from 'react';
import DisplayBlog from '../DisplayBlog/DisplayBlog';

const DisplayBlogs = ({blogs}) => {
   
   
    return (
        <div className='m-4'>
            {
                blogs.map(blog => <DisplayBlog key={blog._id} blog={blog}></DisplayBlog>)
            }
        </div>
    );
};

export default DisplayBlogs;