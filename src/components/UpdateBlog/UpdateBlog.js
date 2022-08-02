import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../Loading/Loading';

const UpdateBlog = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const[complete, setComplete] = useState(false);
    const[blog, setBlog] = useState({});
    const[heading, setHeading] = useState("");
    const[description, setDescription] = useState('');
    const {comments} = blog;
    console.log(comments)

    useEffect(()=> {
        fetch(`https://morning-peak-89296.herokuapp.com/update/${id}`)
        .then(res => res.json())
        .then(data =>{
            setBlog(data);
            setHeading(data?.heading);
            setDescription(data?.description);
        });
    },[id]);

    if(!(heading && description)){
        return <Loading></Loading>
    }

    const handleChange =(e)=>{
        if(e.target.type === 'text'){
            const heading = e.target.value;
           setHeading(heading)
        }
        if(e.target.type === 'textarea'){
            const description = e.target.value;
           setDescription(description)
        }
    }
    

    const handleUpdate =(e) => {
        e.preventDefault();
        const updatedBlog = {heading, description, complete, comments}

        fetch(`https://morning-peak-89296.herokuapp.com/update/${id}`,
        {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBlog)
        })
        .then(res => res.json())
        .then(inserted => {
            console.log(inserted)
            if(inserted.acknowledged === true){
                toast.success('Blog Updated');
                navigate('/home')
            }
            else{
                toast.error('Failed to Update Blog')
            }
        });
    }


    return (
        <div>
            <div className="modal-box mx-auto">
                   <div className='text-cente'>
                    <h1 className='text-xl font-semibold mb-2 text-primary'>Please Update</h1>
                        <form onSubmit={handleUpdate}>
                            <input uncontroled onChange={handleChange} value={heading} type="text" name='heading' placeholder="Heading" className="input text-xl font-semibold input-bordered w-full max-w-lg mb-2" required />
                            <textarea onChange={handleChange} value={description} type="textarea" name='description'  placeholder="Description" className="input input-bordered w-full max-w-lg mb-2 h-96" required />
                            <div class="form-control">
                                <label class="label cursor-pointer w-20">
                                    <span class="label-text font-semibold mr-2">Complete</span>
                                    <input onClick={()=> setComplete(!complete)} type="checkbox" class="toggle toggle-accent"/>
                                </label>
                            </div>
                            <br />
                            <button         type='submit'className='btn btn-danger mr-2 bg-success text-white px-6' >
                                Update
                            </button>
                        </form>
                   </div>
                   <div className="modal-action">   
                   </div>
                </div>
        </div>
    );
};

export default UpdateBlog;