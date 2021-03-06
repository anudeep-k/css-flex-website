import axios from 'axios';

const URL='http://localhost:5000/posts';

export const fetchPosts=()=> axios.get(URL);

export const createPosts =(posts)=>axios.post(URL+"/createPosts/",posts);

export const updatePost =(id,posts)=>axios.patch(URL +"/updatePosts/"+ id +"/",posts);

export const deletePost =(id)=>axios.delete(URL +"/delete/" +id  );
