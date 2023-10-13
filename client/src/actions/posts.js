import * as api from '../api';
import { toast } from 'react-hot-toast';
//Action creators

export const getPostsCount = () => async(dispatch) => {
    try{
        const {data} = await api.fetchPostsCount();
        console.log(data);
        dispatch({type : 'POSTS_COUNT', payload : data});
    }   
    catch(error)
    {
        console.log(error.message);
    }
}

export const getPostsBySearch = (searchQuery) => async(dispatch) => {
    try{
        const {data} = await api.fetchPostsBySearch(searchQuery);

        dispatch({type : 'FETCH_BY_SEARCH', payload : data});
        console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
}
export const getRelatedPosts = (searchQuery) => async(dispatch) => {
    const toastId = toast.loading("Loading..");
    try{
        
        const {data : {data}} = await api.fetchRelatedPosts(searchQuery);

        dispatch({type : 'RELATED_POSTS', payload : data});
        
        console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
    toast.dismiss(toastId);
}

export const getPostsByBatch = (batch) => async(dispatch) => {
    try{
        dispatch({type : 'START_LOADING'});
        const {data : {data}} = await api.fetchPostsByBatch(batch);

        dispatch({type : 'FETCH_BY_BATCH', payload : data});
        dispatch({type : 'END_LOADING'});
        console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

export const getMyPosts = (creatorId) => async(dispatch) => {
    try{
        dispatch({type : 'START_LOADING'});
        const {data : {data}} = await api.fetchMyPosts(creatorId);

        dispatch({type : 'FETCH_MY_POSTS', payload : data});
        dispatch({type : 'END_LOADING'});
        console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

export const getInterviewExp = (id) => async(dispatch) => {
    try{
        dispatch({type : 'START_LOADING'});
        const {data} = await api.fetchPost(id);

        dispatch({type : 'FETCH_POST', payload : {post : data}});
        dispatch({type : 'END_LOADING'});
    }
    catch(error)
    {
        console.log(error);
    }
}

export const createPost = (post) => async(dispatch) => {
    const toastId = toast.loading("Submitting Post..")
    try{
        
        const {data} = await api.createPost(post);
        toast.success("Interview Experience Submitted 🎉")
        dispatch({type : 'CREATE', payload : data});
        console.log(data);
    }
    catch(error){
        console.log({message : error.message});
        toast.error("Submission Unsuccessful");
    }
    toast.dismiss(toastId);
}