import React, { useEffect, useState } from "react";
import "./BatchPrompt.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Tooltip from "@mui/material/Tooltip";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { getPostsCount } from "../../actions/posts";

//Components import
import Notifications from "../Notifications/Notifications";
import NotiGrid from "../NotiGrid/NotiGrid";
import Update from "../Update/Update";

const BatchPrompt = () => {
  const location = useLocation();
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  
  const dispatch = useDispatch();
  const postsCount = useSelector((state) => state.posts.postCount);
  const user = JSON.parse(localStorage.getItem("profile"));
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (!user) {
      toast.error("Please Login to continue!");
    }
    dispatch(getPostsCount());
  }, [dispatch, user, location]);

  return (
    <>
      <div className="mainContainer">
        <div className="noti_maincontainer">
          <Notifications />
        </div>

        {user ? (
          <div className="noti_batchPrompt">
            <div className="batchPrompt_header">
              <p className="text">Interview Experiences</p>
            </div>
            <div className="batchPrompt_subHead">Let's start reading..</div>
            <div className="batchPrompt_options">
              <Link
                to="/viewList/Batch 2022-2023/departmentsAll"
                className="bachPrompt_option1"
              >
                Batch2022-2023
              </Link>
              <Link
                to="/viewList/Batch 2023-2024/departmentsAll"
                className="bachPrompt_option1"
              >
                Batch2023-2024
              </Link>
              <Link to="/ShareExperience" className="batchPrompt_shareExp">
                Share your Experience
              </Link>
            </div>
          </div>
        ) : (
          <div className="noti_check">
            <div className="noti_checkHead">Please Sign in</div>
            <div className="noti_checkprompt">
              to read Interview Experiences
              <br />
              OR
              <br /> to share your Interview Experiences
            </div>
            <Link to="/auth" className="noti_checkLink">
              CLICK HERE
            </Link>
          </div>
        )}

        <button className="batchPrompt_notiCall" onClick={toggleDrawer}>
          <Tooltip title="Notifications" arrow>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              style={{ position: "relative", top: "0px" }}
            >
              <path
                fill="yellow"
                d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
              />
            </svg>
          </Tooltip>
        </button>
      </div>

      <div className="batchPrompt_update">
        <Update postsCount={postsCount} />
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla bla bla"
        size={screenWidth}
        lockBackgroundScroll="false"
        style={{ backgroundColor: "#161b22" }}
      >
        <>
          <div className="drawer_controls">
            <div className="close_drawer" onClick={toggleDrawer}></div>
          </div>
          <div className="drawer_header">NOTIFICATIONS</div>
          <div className="drawer_notiGrid">
            <NotiGrid />
          </div>
        </>
      </Drawer>
    </>
  );
};

export default BatchPrompt;
