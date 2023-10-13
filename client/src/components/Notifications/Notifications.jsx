import React,{useEffect, useState} from 'react';
import './Notifications.css';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import { addNotice, getNotice } from '../../actions/notifications';
import CircularProgress from '@mui/material/CircularProgress';
import Notice from '../Notice/Notice';

const Notifications = ({display}) => {
    const dispatch = useDispatch();
    
    const [postData, setPostData] = useState({
        noticeIn : '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNotice(postData));

    }
    useEffect(() => {
        dispatch(getNotice());
    },[])
    const notices = useSelector((state) => state.notices.noticeList)
    const {isLoading} = useSelector((state) => state.notices)
    console.log(notices);
    return(
        <div className='noti_container'>
            <div className="noti_header">NOTIFICATIONS</div>
            <div className="noti_grid">
            {
                isLoading ? (<CircularProgress/>) : 
                
                    (notices?.length && (notices.map((noti) => (
                        <Notice noti={noti} key = {noti._id}/>
                    )))
                    )
                
            }
                
                
            </div>
        </div>
    )
}

export default Notifications;