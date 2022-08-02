import React from 'react';
import { NavLink } from 'react-router-dom';

const NavComponent = () => {
    return (
        <div>
            <div className='bg-slate-700'>
                <div className='flex justify-center py-4 text-white'>
                    <ul className='flex text-xl'>
                        <NavLink to={"/home"}  className='mr-8'>Home</NavLink >
                        <NavLink to={"/to-do"}  className='mr-8'>To Do List</NavLink >
                        <NavLink to={"/selected"}  className='mr-8'>Selected</NavLink >
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavComponent;