

import axios from "../axios";

const postAPI = {
    getPost: async function(){
        return axios.get("/posts");
    },
    createPost: async function(data){
        axios.post("/posts", data);
    },
    getPostItem: async function(id){
        return axios.get(`/posts/${id}`);
    },
    updatePost:function(id, data){
        axios.patch(`/posts/${id}`, data);
    },
    deletePost : function (id) {
        axios.delete(`/posts/${id}`);
    }
}

export default postAPI;