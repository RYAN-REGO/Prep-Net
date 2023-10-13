import React from 'react'
import './RecommendCard.css';
import { useNavigate } from 'react-router-dom';

const RecommendCard = ({post}) => {
    const navigate = useNavigate();
    const dateObject = new Date(post?.createdAt);
    const day = dateObject.getDay();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();

    const handleOpenPost = () => navigate(`/posts/${post._id}`);

  return (
    <button onClick={handleOpenPost} className='reccard_container'>
            <div className="reccard_basic">
            <div className="recCard_mnc">
                {post?.cname.charAt(0).toUpperCase() + post?.cname.slice(1)}
            </div>
            <div className="recCard_name">
                <p className='nameText'>Submitted by <b>{post?.name ? post?.name : 'loading'}</b></p>
            </div>
            </div>
            <div className="reccard_date">
                Submitted on {`${day} / ${month} / ${year}`}
            </div>
        </button>
  )
}

export default RecommendCard
