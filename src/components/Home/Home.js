import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AddToDo from '../AddToDo/AddToDo';
import DisplayBlogs from '../DisplayBlogs/DisplayBlogs';
import Loading from '../Loading/Loading';
const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
      fetch('http://localhost:5000/blog')
      .then(res => res.json())
      .then(data => setBlogs(data));
    }, [blogs])

    if(blogs.length === 0 ){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center text-4xl text-primary font-bold mt-4 font-serif'>To Do</h1>
            <AddToDo></AddToDo>
            <DisplayBlogs  blogs={blogs}></DisplayBlogs>
        </div>
    );
};

export default Home;