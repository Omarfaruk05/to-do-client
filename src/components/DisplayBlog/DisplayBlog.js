import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

const DisplayBlog = ({blog}) => {
    const navigate = useNavigate();
    const id = blog._id;

    if(blog === undefined){
        return <Loading></Loading>
    }

    const handleDelete = () => {
        fetch(`http://localhost:5000/blog/${id}`,
        {
            method: 'DELETE',
           
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                toast.success('Successfully Deleted');
            }
            else{
                toast.error('Failed to Delete')
            }
        })
    };

    const handleComment =(e) => {
        console.log(e);
    }

    const navigateToUpdate =()=>{
        navigate(`/update/${id}`)
    }
    return (
        <div className='container mx-auto lg:px-48 mt-3'>
            <div className='border rounded-md'>
                <div className='p-2'>
                    <h1 className='text-4xl font-bold my-2'>{blog?.heading}</h1>
                    <p>{blog.description}</p>
                </div>
                <hr />
                <div className='bg-base-200 p-2'>
                    <div className='flex gap-4 justify-center'>
                        <div>
                            {
                                (blog?.complete)? <button className='btn btn-sm btn-accent text-white w-28'>Completed</button>:
                                <button className='btn btn-sm btn-info text-white w-28'>Uncomplete</button>
                            }
                        </div>
                        <div>
                            <button onClick={navigateToUpdate} className='btn btn-sm  btn-secondary text-white w-28'>Update</button>
                        </div>
                        <div>
                            <button onClick={handleDelete} className='btn btn-sm  btn-error text-white w-28'>Delete</button>
                        </div>
                    </div>
                    <div className='mt-2 text-center'>
                        <form onSubmit={handleComment}>
                            <input class="input input-success md:w-2/3" placeholder="Please Comment"></input>
                            <input type="submit" value="Comment" className='btn ml-2'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayBlog;