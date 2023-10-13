import React, { useEffect, useState } from "react";
import "./ViewList.css";
import { getPostsByBatch } from "../../actions/posts";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

//Components import
import ListCard from "../ListCard/ListCard";

//define query function
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ViewList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const query = useQuery();
  const { batchNum, dept } = useParams();
  const searchQuery = query.get("searchQuery") || "none";

  const [selDepartment, setSelDepartment] = useState("");
  const [search, setSearch] = useState("");
  const [sortByDept, setSortByDept] = useState(false);
  const [sortSearch, setSortSearch] = useState(false);

  useEffect(() => {
    async function fetchDataByPosts() {
      await dispatch(getPostsByBatch(batchNum));
    }

    fetchDataByPosts();
  }, [dispatch, location]);

  const { batchPosts, isLoading } = useSelector((state) => state.posts);
  console.log(batchPosts);

  const handleClick = (e) => {
    setSelDepartment(e.target.value);
    setSortByDept((prevState) => !prevState);
  };

  const updatedPosts = batchPosts.filter(
    (batchPost) => batchPost.department === selDepartment
  );
  console.log(updatedPosts);

  const handleSearch = () => {
    setSortSearch((prevState) => !prevState);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };
  const handleButton = () => {
    handleSearch();
  };

  const searchItem = new RegExp(search, "i");
  const searchedPosts = batchPosts.filter((batchPost) =>
    searchItem.test(batchPost.cname)
  );
  console.log(searchedPosts);

  return (
    <div className="viewList_Container">
      <div className="viewList_options">
        <div className="viewList_sortOptions">
          <div className="sort_header">Sort by</div>
          <div className="viewList_row2">
            <button
              className="row2_option1"
              name="comp"
              value={"Comp / IT / AIML"}
              onClick={handleClick}
            >
              Comp / IT / AIML
            </button>
            <button
              className="row2_option1"
              name="electronics"
              value={"Electronics and TC"}
              onClick={handleClick}
            >
              Electronics and TC
            </button>
            <button
              className="row2_option1"
              name="mech"
              value={"Mechanical"}
              onClick={handleClick}
            >
              Mechanical
            </button>
            <button
              className="row2_option1"
              name="civil"
              value={"Civil"}
              onClick={handleClick}
            >
              Civil
            </button>
          </div>
          <div className="viewList_search">
            <input
              type="text"
              onKeyDown={handleKeyPress}
              className="viewList_searchIn"
              placeholder="Search for company"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="Search_button" onClick={handleButton}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="viewList_grid">
        <div className="viewList_sortAlert">
          {
            sortByDept ? `${selDepartment}` : 'All Departments'
          }
        </div>

        {isLoading ? (
          <div className="loading">Loading..</div>
        ) : sortByDept ? (
          updatedPosts.length === 0 ? (
            <div
              style={{
                color: "white",
                marginTop: "90px",
                fontSize: "30px",
                fontWeight: 700,
                textShadow: "3px 3px 1px black",
                fontStyle: "italic",
                letterSpacing: "2px",
              }}
            >
              NO DATA FOUND
            </div>
          ) : (
            updatedPosts.map((post) => <ListCard post={post} key={post._id} />)
          )
        ) : sortSearch ? (
          searchedPosts.map((post) => <ListCard post={post} key={post._id} />)
        ) : (
          batchPosts.map((post) => <ListCard post={post} key={post._id} />)
        )}
        {isLoading && <CircularProgress />}
      </div>
    </div>
  );
};

export default ViewList;
