const initialState = {
    posts : [],
    batchPosts : [],
    myPosts : [],
    isLoading : true,
    postCount : 0,
    relatedPosts : [],
}

const posts =  (state = initialState, action) => {
    switch(action.type)
    {
        case 'START_LOADING' :
            return {...state, isLoading : true};
        case 'END_LOADING' : 
            return {...state, isLoading : false};
        case 'FETCH_ALL' : 
            return {...state, posts : action.payload};
        case 'POSTS_COUNT' : 
            return {...state, postCount : action.payload};
        case 'FETCH_BY_SEARCH' : 
            return {...state, posts : action.payload};
        case 'RELATED_POSTS' : 
            return {...state, relatedPosts : action.payload}
        case 'FETCH_BY_BATCH' : 
            return {...state, batchPosts : action.payload};
        case 'FETCH_MY_POSTS' : 
            return {...state, myPosts : action.payload};
        case 'FETCH_POST' : 
            return {...state, post : action.payload.post};
        case 'CREATE' : 
            return {...state, posts : [...state.posts, action.payload]}
        default : 
            return state;
    }
} 


export default posts;


  