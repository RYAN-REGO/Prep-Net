
const authReducer = (state = { authData : null, isLoading : true, signUpData : null}, action) => {
    switch(action.type)
    {
        case 'START_LOADING' : 
            return {...state, isLoading : true};
        case 'END_LOADING' : 
            return {...state, isLoading : false};
        case 'AUTH' : 
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {...state, authData : action?.data};
        case 'LOGOUT' : 
            localStorage.clear();
            return {...state, authData : null};
        case 'STORE_SIGNUP_DATA' : 
            return {...state, signUpData : action?.data}
        default : 
            return state;

    }
}

export default authReducer;