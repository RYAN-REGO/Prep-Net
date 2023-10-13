import * as api from '../api';

//Action creators
export const getNotice = () => async(dispatch) => {
    try{
        dispatch({type : 'START_LOADING'});
        const {data} = await api.getNotice();

        dispatch({type : 'FETCH_NOTICE', payload : data});

        dispatch({type : 'END_LOADING'});
    }
    catch(error){
        console.log(error.message);
    }
}

export const addNotice = (notice) => async(dispatch) => {
    try{
        const {data} = await api.addNotice(notice);

        dispatch({type : 'CREATE_NOTICE', payload : data});
    }
    catch(error)
    {
        console.log(error.message);
    }
}