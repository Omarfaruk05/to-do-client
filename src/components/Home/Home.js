import React from 'react';
import AddToDo from '../AddToDo/AddToDo';
const Home = () => {
    return (
        <div>
            <h1 className='text-center text-4xl text-primary font-bold mt-4 font-serif'>To Do</h1>
            <AddToDo></AddToDo>
        </div>
    );
};

export default Home;