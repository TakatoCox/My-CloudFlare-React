import React, { useState } from "react";

const CreatePost = ({ id }) => {
    const [inputs, setInputs] = useState({})
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        inputs.id = id;
        await setPost()
    }

    const setPost = async () => {
        try {
            await fetch(`https://my-worker.takatocox.workers.dev/api/posts`, {
                method: "POST",
                body: JSON.stringify(inputs)
            })
            setInputs([]);
            setSuccessMessage("Successfully Created Post");
            setTimeout(()=> {
                setSuccessMessage("")
            }, 3000) // 3 seconds
        } catch(error){
            console.warn("Could not create post", error);
        }
    };

    return (
        <div className="createPostContainer">
            <span className="createPostTitle">Create Post</span>
            <form className="form" onSubmit={handleSubmit}>
                <label>User Name:
                    <input 
                        type="text" 
                        name="username" 
                        value={inputs.username || ""} 
                        onChange={handleChange}
                    />
                </label>
                <label>Title:
                    <input 
                        type="text" 
                        name="title" 
                        value={inputs.title || ""} 
                        onChange={handleChange}
                    />
                </label>
                <label>Content:
                    <input 
                            type="text" 
                            name="content" 
                            value={inputs.content || ""} 
                            onChange={handleChange}
                    />
                </label>
                <input type="submit" />
            </form>
            <p className="successMessage">{successMessage}</p>
        </div>
    )
};

export default CreatePost;