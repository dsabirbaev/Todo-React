

import axios from "../axios";

const postAPI = {
    getPost: async function(){
        return axios.get("/posts");
    },
    createPost: async function(data){
        axios.post("/posts", data);
    }
}

export default postAPI;