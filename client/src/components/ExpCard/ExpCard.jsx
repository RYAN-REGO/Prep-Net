import React from "react";
import "./ExpCard.css";
import ImpCard from "../ImpCard/ImpCard";
import { useSelector } from "react-redux";

const ExpCard = ({ post }) => {
  const { isLoading } = useSelector((state) => state.posts);
  if (isLoading) {
    return <div className="loading">Loading..</div>;
  }
  console.log(post);
  return (
    <div className="expCard_maincont">
      <div className="expCard_headDesc">{post?.cname} Interview Experience</div>
      <div className="expCard_intro">
        <div className="expCard_introDuce"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48"><g transform="rotate(90 24 24)"><path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 44H17.476C17.3873 44 17.3049 43.9541 17.2581 43.8788L7.86011 28.7273C6.79115 27.0039 7.14475 24.7577 8.69148 23.446C10.6306 21.8016 13.584 22.3036 14.871 24.4963L17.3333 28.6914V7.94203C17.3333 5.76491 19.0982 4 21.2754 4C23.4525 4 25.2174 5.76491 25.2174 7.94203V17.2709C25.2174 17.8564 25.6817 18.3365 26.2669 18.356L37.8882 18.7443C39.0658 18.7836 40 19.7496 40 20.9278V41C40 42.6569 38.6569 44 37 44Z"/></g></svg>&nbsp;Introduction</div>
        <div className="expCard_introInput">{post?.introduction}</div>
      </div>
      <div className="expCard_round">
        <div className="expCard_roundHead"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48"><g transform="rotate(90 24 24)"><path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 44H17.476C17.3873 44 17.3049 43.9541 17.2581 43.8788L7.86011 28.7273C6.79115 27.0039 7.14475 24.7577 8.69148 23.446C10.6306 21.8016 13.584 22.3036 14.871 24.4963L17.3333 28.6914V7.94203C17.3333 5.76491 19.0982 4 21.2754 4C23.4525 4 25.2174 5.76491 25.2174 7.94203V17.2709C25.2174 17.8564 25.6817 18.3365 26.2669 18.356L37.8882 18.7443C39.0658 18.7836 40 19.7496 40 20.9278V41C40 42.6569 38.6569 44 37 44Z"/></g></svg>&nbsp;Number of Rounds</div>
        <div className="expCard_roundInput">{post?.roundMention}</div>
      </div>
      <div className="expCard_roundDesc">
        <div className="expCard_rndDescHead"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48"><g transform="rotate(90 24 24)"><path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 44H17.476C17.3873 44 17.3049 43.9541 17.2581 43.8788L7.86011 28.7273C6.79115 27.0039 7.14475 24.7577 8.69148 23.446C10.6306 21.8016 13.584 22.3036 14.871 24.4963L17.3333 28.6914V7.94203C17.3333 5.76491 19.0982 4 21.2754 4C23.4525 4 25.2174 5.76491 25.2174 7.94203V17.2709C25.2174 17.8564 25.6817 18.3365 26.2669 18.356L37.8882 18.7443C39.0658 18.7836 40 19.7496 40 20.9278V41C40 42.6569 38.6569 44 37 44Z"/></g></svg>&nbsp;Rounds Description</div>
        <div className="expCard_rndDescContent">{post?.roundDescription}</div>
      </div>
      <div className="expCard_tipSection">
        <div className="expCard_tipHead"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z"/><path fill="yellow" d="M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11h1zm8-9a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1zm9 9a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11h1zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 0-1.414zm12.8 0a1 1 0 0 1 1.497 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094l.7-.7zM14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993L10 18h4zM12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6z"/></g></svg>&nbsp;Tips</div>
        <div className="expCard_tipContent">{post?.tips}</div>
      </div>
      <div className="expCard_impSection">
        <div className="expCard_impHead"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48"><g transform="rotate(90 24 24)"><path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 44H17.476C17.3873 44 17.3049 43.9541 17.2581 43.8788L7.86011 28.7273C6.79115 27.0039 7.14475 24.7577 8.69148 23.446C10.6306 21.8016 13.584 22.3036 14.871 24.4963L17.3333 28.6914V7.94203C17.3333 5.76491 19.0982 4 21.2754 4C23.4525 4 25.2174 5.76491 25.2174 7.94203V17.2709C25.2174 17.8564 25.6817 18.3365 26.2669 18.356L37.8882 18.7443C39.0658 18.7836 40 19.7496 40 20.9278V41C40 42.6569 38.6569 44 37 44Z"/></g></svg>&nbsp;Important Topics</div>
        <div className="expCard_impContent">
          <div className="expCard_impContent_grid">
            {post?.impTopics.map((topic) => (
              <ImpCard topic={topic} />
            ))}
          </div>
        </div>
      </div>
      <div className="expCard_linkedin">
        <div className="expCard_linkedinHead">For Doubts / Queries visit</div>
        <div className="expCard_linkedinLink">
          <a href={post?.LinkedinURL} className="linkedInLink">
            {post?.name} on LinkedIn
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 1536 1536"
              style={{marginLeft : '4px', position : 'relative', top : '-0px'}}
            >
              <path
                fill="rgb(0, 132, 255)"
                d="M1280 800V320q0-26-19-45t-45-19H736q-42 0-59 39q-17 41 14 70l144 144l-534 534q-19 19-19 45t19 45l102 102q19 19 45 19t45-19l534-534l144 144q18 19 45 19q12 0 25-5q39-17 39-59zm256-512v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExpCard;
