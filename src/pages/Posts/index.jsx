

import { useEffect, useState } from "react";
import postAPI from "../../service/posts";

import { v4 as uuidv4 } from "uuid";

const index = () => {

    const [post, setPost] = useState([]);
    const [toggleEditor, setToggleEditor] = useState(false);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addPost = () => {
        const newPost = {
            title : title,
            description: description,
            id: uuidv4()
        };

        if(newPost.title.trim().length === 0 || newPost.description.trim().length === 0){
            alert("Please fill the field!");
        }else{
            postAPI.createPost(newPost);
            setTitle("");
            setDescription("");
            
        }
  
    }

    function getPosts() {
        postAPI
          .getPost()
          .then((response) => {
            if (response.status === 200) {
              setPost(response.data);
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
    }
    

    useEffect(() => {
        getPosts()
    }, [addPost])



    return (
        <div className="border border-dashed border-cyan-600 p-5 bg-slate-100">

            <button onClick={() => setToggleEditor(!toggleEditor)} className="bg-teal-600 px-3 py-2 rounded-lg focus:ring-4 w-32 text-center text-white font-semibold mb-4">
                {toggleEditor ? "Close editor" : "Open editor"}
            </button>

            <div className={`${toggleEditor ? "block" : "hidden"} p-3 shadow bg-white rounded-lg my-3`}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter post title" className="p-3 w-full border "/>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter post description "
                    cols="136"
                    rows="6"
                    className="my-3 border p-3">
                </textarea>

                <button onClick={() => addPost()} className="bg-green-600 px-3 py-2 rounded-lg focus:ring-4 w-32 text-center text-white font-semibold mb-4">
                    Add post
                </button>
            </div>


            <h1 className="text-indigo-500 text-center font-bold text-2xl">Posts</h1>
            <ul>

                {
                    post.length && post.map((post) => {
                        return (
                            <li className="my-2">
                                <div className="p-4 bg-green-100 border">
                                    <strong className="block">{post.title}</strong>
                                    <p>
                                        {post.description}
                                    </p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default index;