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
        fetch(`https://morning-peak-89296.herokuapp.com/blog/${id}`,
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
        e.preventDefault();
        const newComments = (e.target.comment.value);
        const comments = [...blog.comments, newComments]

        fetch(`http://localhost:5000/comment/${id}`,
        {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({comments})
        })
        .then(res => res.json())
        .then(inserted => {
            if(inserted.acknowledged === true){
                toast.success('Comment Successfull');
            }
            else{
                toast.error('Failed to Comment')
            }
        });
        e.target.reset();
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
                            <input class="input input-success md:w-2/3" name='comment' placeholder="Please Comment"></input>
                            <input type="submit" value="Comment" className='btn ml-2'/>
                        </form>
                    </div>
                    <div className='ml-4 mt-4'>
                            {
                                (blog.comments).map(comment => <div  className='flex p-2 items-center'>
                                    <div class="avatar mr-2">
                                        <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src="https://i.ibb.co/WF1RNZF/man1.jpg" alt='avatar' />
                                        </div>
                                    </div>
                                    <p>{comment}</p>
                                </div>)
                            }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayBlog;