import axios from 'axios';

const API = axios.create({baseURL : 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile'))
    {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

//posts related API calls
export const fetchPostsCount = () => API.get('/posts');
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery || 'none'}`);
export const fetchRelatedPosts = (searchQuery) => API.get(`/posts/relatedPosts?searchQuery=${searchQuery}`);

export const fetchPostsByBatch = (batch) => API.get(`/posts/batch?batch=${batch || 'none'}`);
export const fetchMyPosts = (creatorId) => API.get(`/posts/creatorId?creatorId=${creatorId || 'none'}`)
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const getNotice = () => API.get('/noti/notifications');
export const addNotice = (notice) => API.post(`/noti/notifications`, notice);

//authentification related calls
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const sendOTP = (finalData) => API.post('/user/sendotp', finalData);