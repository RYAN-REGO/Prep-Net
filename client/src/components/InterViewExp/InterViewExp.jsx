import React, { useEffect, useState } from "react";
import "./InterViewExp.css";
import ExpCard from "../ExpCard/ExpCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getInterviewExp, getRelatedPosts } from "../../actions/posts";
import RecommendCard from "../RecommendCard/RecommendCard";

const InterViewExp = () => {
  const [relateSection, setRelateSection] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { post, isLoading, relatedPosts } = useSelector((state) => state.posts);

  const postFind = post;
  console.log(postFind);

  useEffect(() => {
    dispatch(getInterviewExp(id));
  }, [id]);

  const TriggerRelated = () => {
    setRelateSection((prevState) => !prevState);
    dispatch(getRelatedPosts(postFind?.cname));

  };

  console.log(relatedPosts);

  return (
    <div className="intExp_Grandcontainer">
      <div className="intExp_headSection">
        <div className="intExp_stats">
          InterView Experience shared by&nbsp;&nbsp;{" "}
          <p className="authorName">{isLoading ? "loading.." : post?.name}</p>
        </div>
      </div>
      <div className="intExp_mainContent">
        <div className="intExp_grid">
          <ExpCard post={post} />
        </div>
      </div>
      <div className="intExp_recommended">
        <div className="intExp_recomHead">
          More Interview Experiences of {post?.cname}&nbsp;&nbsp;&nbsp;&nbsp;
          
        </div>
        <button
            onClick={TriggerRelated}
            className="invoke_related"
            style={{
              border: "none",
              backgroundColor: "#090b0f",
              color: "white",
              fontSize: "15px",
              letterSpacing: "2px",
              padding: "8px 8px",
              cursor: "pointer",
              marginTop : '10px',
            }}
          >
            Click here to view
          </button>
        <div
          className="intExp_recomGrid"
          style={{ display: "flex", alignItems: "center" }}
        >
          {relateSection && relatedPosts && relatedPosts.length > 0
            ? relatedPosts.map((post) => (
                <RecommendCard post={post} key={post.id} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default InterViewExp;
