import React, { useEffect } from "react";
import "./MyPosts.css";
import ExpCard from "../ExpCard/ExpCard";
import { useParams } from "react-router-dom";
import { getMyPosts } from "../../actions/posts";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

const MyPosts = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const { myPosts, isLoading } = useSelector((state) => state.posts);

  const { creatorName, creatorId } = useParams();

  useEffect(() => {
    dispatch(getMyPosts(creatorId));
  }, [dispatch]);

  return (
    <div className="intExp_Grandcontainer">
      <div className="intExp_headSection">
        <div className="intExp_stats">
          {myPosts.length} InterView Experience/s shared by You&nbsp;
          <p className="authorName">({user?.result?.name})</p>
        </div>
      </div>
      <div className="intExp_mainContent">
        <div className="intExp_grid">
          {isLoading ? (
            <div className="loading">Loading..</div>
          ) : myPosts.length ? (
            myPosts.map((post) => <ExpCard post={post} key={post._id} />)
          ) : (
            <div className="Warning">NO POSTS FOUND!!</div>
          )}
          {isLoading && <CircularProgress />}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
