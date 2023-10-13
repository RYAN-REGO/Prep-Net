import React from 'react'
import Notice from '../Notice/Notice';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import './NotiGrid.css'

const NotiGrid = () => {
    const notices = useSelector((state) => state.notices.noticeList)
    const {isLoading} = useSelector((state) => state.notices)

  return (
    <div className='default'>
      {
                isLoading ? (<CircularProgress/>) : 
                
                    (notices?.length && (notices.map((noti) => (
                        <Notice noti={noti} key = {noti._id}/>
                    )))
                    )
                
            }
    </div>
  )
}

export default NotiGrid
