import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CreatePost.css";
import { useNavigate } from "react-router";
import { createPost } from "../../actions/posts";
import { postSchema } from "../../schemas";
import { toast } from "react-hot-toast";

const CreatePost = () => {
  const navigate = useNavigate();
  const [fillError, setFillError] = useState(false);
  const { isLoading } = useSelector((state) => state.posts);
  const [validationErr, setValidationErr] = useState([]);
  const [postData, setPostData] = useState({
    batchNum: "",
    department: "",
    cname: "",
    introduction: "",
    roundMention: "",
    roundDescription: "",
    tips: "",
    impTopics: "",
    LinkedinURL: "",
  });

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleClear = () => {
    setPostData({
      batchNum: "",
      department: "",
      cname: "",
      introduction: "",
      roundMention: "",
      roundDescription: "",
      tips: "",
      impTopics: "",
      LinkedinURL: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(postData);
    try {
      await postSchema.validate(postData, { abortEarly: false });

      dispatch(createPost({ ...postData, name: user?.result?.name }));
      handleClear();
      navigate("/");
      toast.success("Go to My Posts section to view your submissions");
    } catch (validationError) {
      setFillError(true);
      toast.error("All fields are required!");
      setValidationErr(validationError.errors);
      console.log(validationError.errors);
    }
  };

  return (
    <div className="createPost_container">
      <div className="createPost_headSection">
        <div className="createPost_vote">
          <div className="voteOfThanks">Thank you for your time!</div>
        </div>
      </div>
      <div className="createPost_template">
        <div className="createPost_template_cont">
          <div className="createPost_templatehead">
            Please refer below template
          </div>
          <div className="createPost_template_main">
            <div className="createPost_template_submain">
              <div className="createPost_template_intro">
                <div className="createPost_template_intro1">
                  1. Introduction :{" "}
                </div>
                <div className="createPost_template_introDesc">
                  Kindly mention company name | date of interView | GPA criteria
                  | hiring role{" "}
                </div>
              </div>
              <div className="createPost_template_rounds">
                <div className="createPost_template_roundsMen">
                  <p className="roundText">
                    2. Mention the number of rounds and in-short description of
                    the same..
                  </p>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;example : <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Round 1 : Aptitude test
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Round 2 : Technical interView
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Round 3 : HR round
                  <br />
                </div>
              </div>
              <div className="createPost_template_rndExp">
                <div className="createPost_template_heading">
                  3. Elaborate on each of the rounds
                </div>
              </div>
              <div className="createPost_template_tip">
                <div className="createPost_template_tiphead">4. TIP :</div>
                <div className="createPost_template_tipContent">
                  <p>Provide tips / advise for each round | if possible |</p>
                </div>
              </div>
              <div className="createPost_template_imp">
                <div className="createPost_template_imphead">
                  5. Important Topics
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="createPost_template_start">
        <p className="createPost_text">Let's start writing</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 21 21"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17 4a2.121 2.121 0 0 1 0 3l-9.5 9.5l-4 1l1-3.944l9.504-9.552a2.116 2.116 0 0 1 2.864-.125zM9.5 17.5h8m-2-11l1 1"
          />
        </svg>
      </div>

      {/* Detail Filling Start */}
      <div className="createPost_fillDetails">
        <div className="createPost_fillBatch">
          <div className="createPost_batchHead">Select Batch</div>
          <div className="createPost_batchSelect">
            <select
              className="batchSelect"
              value={postData.batchNum}
              onChange={(e) =>
                setPostData({ ...postData, batchNum: e.target.value })
              }
              placeholder="select"
            >
              <option className="optionSelect" value="">
                select an option
              </option>
              <option className="optionSelect">Batch 2022-2023</option>
              <option className="optionSelect">Batch 2023-2024</option>
            </select>
          </div>
        </div>
        <div className="createPost_fillDept">
          <div className="createPost_deptHead">Select Department</div>
          <div className="createPost_deptSelect">
            <select
              className="deptSelect"
              value={postData.department}
              onChange={(e) =>
                setPostData({ ...postData, department: e.target.value })
              }
            >
              <option className="optionSelect" value="">
                select an option
              </option>
              <option className="optionSelect">CS / IT / AiML</option>
              <option className="optionSelect">Electronics and TC</option>
              <option className="optionSelect">Mechanical</option>
              <option className="optionSelect">Civil</option>
            </select>
          </div>
        </div>
        <div className="createPost_fillCompany">
          <div className="createPost_companyHead">Enter name of company</div>
          <div className="createPost_companyFill">
            <input
              type="text"
              className="company_name"
              value={postData.cname}
              onChange={(e) =>
                setPostData({ ...postData, cname: e.target.value })
              }
            />
          </div>
        </div>
        <div className="createPost_fillIntro">
          <textarea
            className="createPost_introIn"
            cols="5"
            placeholder="*Kindly fill in the INTRODUCTION after referring to the template above"
            value={postData.introduction}
            onChange={(e) =>
              setPostData({ ...postData, introduction: e.target.value })
            }
          ></textarea>
        </div>
        <div className="createPost_fillRndName">
          <textarea
            className="createPost_rndName"
            cols="8"
            placeholder="*Kindly mention the rounds and one-line description of the same after referring to the template above"
            value={postData.roundMention}
            onChange={(e) =>
              setPostData({ ...postData, roundMention: e.target.value })
            }
          ></textarea>
        </div>
        <div className="createPost_fillrndDesc">
          <textarea
            className="createPost_rndDesc"
            cols="8"
            placeholder="*Kindly elaborate on each of the rounds"
            value={postData.roundDescription}
            onChange={(e) =>
              setPostData({ ...postData, roundDescription: e.target.value })
            }
          ></textarea>
        </div>
        <div className="createPost_fillTips">
          <textarea
            className="createPost_tipsDesc"
            cols="6"
            placeholder="*Kindly provide tips / highlights / mistakes you realize for each of the rounds"
            value={postData.tips}
            onChange={(e) => setPostData({ ...postData, tips: e.target.value })}
          ></textarea>
        </div>
        <div className="createPost_impTopics">
          <textarea
            className="createPost_impDesc"
            cols="6"
            placeholder="*Kindly mention IMPORTANT topics SEPERATED BY COMMA (,)"
            value={postData.impTopics}
            onChange={(e) =>
              setPostData({ ...postData, impTopics: e.target.value.split(",") })
            }
          ></textarea>
        </div>
        <div className="createPost_linkedIn">
          <textarea
            className="createPost_linkedInLink"
            placeholder="*Kindly provide your LinkedIn profile URL for doubts / query clarification"
            value={postData.LinkedinURL}
            onChange={(e) =>
              setPostData({ ...postData, LinkedinURL: e.target.value })
            }
          ></textarea>
        </div>
        <div className="createPost_Submit">
          <button className="createPost_SButton" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
        <div className="createPost_error">
          <div className="createPost_error_cont">
            {fillError ? (
              <p>*All fields are compulsary</p>
            ) : (
              <p>*NOTE : Post once submitted cannot be EDITED!!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
