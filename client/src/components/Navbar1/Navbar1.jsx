import React, { useEffect, useState } from "react";
import "./Navbar1.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Tooltip from '@mui/material/Tooltip';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import {toast} from 'react-hot-toast';
import images from "../../constants/images";
import decode from "jwt-decode";

const Navbar1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    navigate("/");
    setUser(null);
    toast.success("Logged out successfully");
  };

  const creatorNAME = user?.result?.name;
  const creatorID = user?.result?.googleId || user?.result?._id;


  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl((prevState) => !prevState);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <nav>
      <div className="navContainer">
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 36 36" id="main-logo"><g id="clarityEmployeeSolid0" fill="white"><circle cx="16.86" cy="9.73" r="6.46"/><path d="M21 28h7v1.4h-7z"/><path d="M15 30v3a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V23a1 1 0 0 0-1-1h-7v-1.47a1 1 0 0 0-2 0V22h-2v-3.58a32.12 32.12 0 0 0-5.14-.42a26 26 0 0 0-11 2.39a3.28 3.28 0 0 0-1.88 3V30Zm17 2H17v-8h7v.42a1 1 0 0 0 2 0V24h6Z"/></g></svg>
        <Link to="/" className="logo">
          Prep-Net
        </Link>
        
        <div className="icons">
          {
            user && (
              <button className="ProjectPart">
            <Link to="/contactMe" className="projectPart">
              <Tooltip title='Contact Me' arrow>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 48 48"
id="helper-icons"
              >
                <mask id="ipTMessage0">
                  <g
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  >
                    <path
                      fill="#555"
                      d="M44 24c0 11.046-8.954 20-20 20H4V24C4 12.954 12.954 4 24 4s20 8.954 20 20Z"
                    />
                    <path d="M14 18h18m-18 8h18m-18 8h10" />
                  </g>
                </mask>
                <path
                  fill="currentColor"
                  d="M0 0h48v48H0z"
                  mask="url(#ipTMessage0)"
                />
              </svg>
              </Tooltip>
            </Link>
          </button>
            )
          }

          {user && (
            <>
              <button className="ProjectPart">
                <Link to="/ShareExperience" className="projectPart">
                  <Tooltip title='Share Interview Experience' arrow>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    id="helper-icons"
                  >
                    <g
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M0 0h24v24H0z" />
                      <path
                        fill="#66B2FF"
                        d="m12 2l.324.001l.318.004l.616.017l.299.013l.579.034l.553.046c4.785.464 6.732 2.411 7.196 7.196l.046.553l.034.579c.005.098.01.198.013.299l.017.616L22 12l-.005.642l-.017.616l-.013.299l-.034.579l-.046.553c-.464 4.785-2.411 6.732-7.196 7.196l-.553.046l-.579.034c-.098.005-.198.01-.299.013l-.616.017L12 22l-.642-.005l-.616-.017l-.299-.013l-.579-.034l-.553-.046c-4.785-.464-6.732-2.411-7.196-7.196l-.046-.553l-.034-.579a28.058 28.058 0 0 1-.013-.299l-.017-.616C2.002 12.432 2 12.218 2 12l.001-.324l.004-.318l.017-.616l.013-.299l.034-.579l.046-.553c.464-4.785 2.411-6.732 7.196-7.196l.553-.046l.579-.034c.098-.005.198-.01.299-.013l.616-.017c.21-.003.424-.005.642-.005zm0 6a1 1 0 0 0-1 1v2H9l-.117.007A1 1 0 0 0 9 13h2v2l.007.117A1 1 0 0 0 13 15v-2h2l.117-.007A1 1 0 0 0 15 11h-2V9l-.007-.117A1 1 0 0 0 12 8z"
                      />
                    </g>
                  </svg>
                  </Tooltip>
                </Link>
              </button>
              <Link to={`/MyPosts/${creatorNAME}/${creatorID}`} className="myPosts">
                <Tooltip title='My posts' arrow>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
id="helper-icons"
                >
                  <path
                    fill="#EB00FF"
                    d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"
                  />
                </svg>
                </Tooltip>
              </Link>
            </>
          )}
        </div>

        <div className="profilepic">
          {user ? (
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                backgroundcolor="grey"
              >
                <img
                  src={
                    user.result.imageUrl ? user.result.imageUrl : images.userPic
                  }
                  alt={"profile"}
                  id="profileImg"
                />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)} 
                onClick={() => setAnchorEl(null)}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
              >
                <MenuItem>
                  <Avatar /> {user?.result?.name}
                </MenuItem>

                <Divider />
                <MenuItem onClick={logout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <div className="sign">
              <Link to="/auth" className="Signin">
                Sign in
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
