const initial = {
    noticeList : [],
    isLoading : true,
}
const notices = (state = initial, action) => {
    switch(action.type)
    {
        case 'START_LOADING' : 
            return {...state, isLoading : true};
        case 'END_LOADING' : 
            return {...state, isLoading : false};
        case 'FETCH_NOTICE' : 
            return {...state, noticeList : action.payload};
        
        case 'CREATE_NOTICE' :
            return {...state, noticeList : [...state.notices, action.payload]};
        default : 
            return state; 
    }
}

export default notices;