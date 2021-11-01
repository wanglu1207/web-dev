import React from "react";


const PostSummaryItem = (
    {
        posts={
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "picture1"
        }
    })=>{
    return(
    <li className="list-group-item">
        <div className="row">
            <div className="col-9">
                <div className="wd-topic">{posts.topic}</div>
                <div className="wd-userName">{posts.userName} <i className="fas fa-check-circle" style={{"color":"white"}}/><span className="wd-time">{posts.time}</span></div>
                <div className="wd-title">{posts.title}</div>
            </div>
            <div className="col-3">
                <img src={posts.image}  className="wd-image"/>
            </div>
        </div>
    </li>
    );
}
export default PostSummaryItem;
