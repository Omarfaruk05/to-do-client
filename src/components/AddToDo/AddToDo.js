import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddToDo = () => {
    const [complete, setComplete] = useState(false);
    const [comments, setComments] = useState([]);
    const handleAddItem = (e) => {
        e.preventDefault();
        const heading = e.target.heading.value;
        const description = e.target.description.value;
        const blog = {heading, description, complete, comments};
        console.log(blog)
        
        fetch("https://morning-peak-89296.herokuapp.com/blog",
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
        .then(res => res.json())
        .then(inserted => {
            if(inserted.insertedId){
                toast.success('Blog Added');
            }
            else{
                toast.error('Failed to Add Blog')
            }
        });
        setComplete(false);
        e.target.reset();
    } 

    return (
        <div className='flex items-center justify-center py-8'>
            <label htmlFor="add-modal" className="btn btn-wide bg-secondary text-white">Add New Blog</label>

            <input type="checkbox" id="add-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                   <div className='text-center'>
                    <h1 className='text-xl font-semibold mb-2 text-primary'>Please Add Info</h1>
                        <form onSubmit={handleAddItem}>
                            <input type="text" name='heading' placeholder="Heading" className="input text-xl font-semibold input-bordered w-full max-w-lg mb-2" required />
                            <textarea type="textarea" name='description'  placeholder="Description" className="input input-bordered w-full max-w-lg mb-2 h-96" required />
                            <div class="form-control">
                                <label class="label cursor-pointer w-20">
                                    <span class="label-text font-semibold mr-2">Complete</span>
                                    <input onClick={()=> setComplete(!complete)} type="checkbox" class="toggle toggle-accent"/>
                                </label>
                            </div>
                            <br />
                            <button  type='submit'className='btn btn-danger mr-2 bg-success text-white px-6' >
                                <label htmlFor="add-modal">Save</label>
                            </button>
                        <label htmlFor="add-modal" className="btn bg-warning text-white">Cancle</label>
                        </form>
                   </div>
                   <div className="modal-action">   
                   </div>
                </div>
            </div>
            
        </div>
    );
};

export default AddToDo;