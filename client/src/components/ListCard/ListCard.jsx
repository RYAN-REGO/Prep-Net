import React from 'react';
import './ListCard.css';
import { useNavigate } from 'react-router-dom';

//components import

const ListCard = ({post}) => {
    const navigate = useNavigate();
    const dateObject = new Date(post?.createdAt);
    const day = dateObject.getDay();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();

    const handleOpenPost = () => navigate(`/posts/${post._id}`);

    return(
        <button onClick={handleOpenPost} className='listcard_container'>
            <div className="listcard_basic">
            <div className="listCard_mnc">
                {post?.cname.charAt(0).toUpperCase() + post?.cname.slice(1)}
            </div>
            <div className="listCard_name">
                <p className='nameText'>~ {post.name}</p>
            </div>
            </div>
            <div className="listcard_date">
                Posted on {`${day} / ${month} / ${year}`}
            </div>
        </button>
    )
}

export default ListCard;