import React from "react";
import "../index.css"

const PostItem = (
    {
        post = {
            "avatar": "../../images/js.png",
            "userName": "Elon Musk",
            "time": '@elonmusk · 23h',
            "title": 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
            "image": '../../images/a.jpeg',
            "longTitle": 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
            "comment": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            "commentCout": '4.2K',
            "repost": '3.5K',
            "love": '37.5K'
        }

    })=>{
    return(
    <ul className="list-group-item" style={{"borderBottomColor":"white"}}>
        <div className="row mt-3">
            <div className="col-2">
                <img src={post.avatar} className="wd-avatarIcon"/>
            </div>

            <div className="col-10">
                <div className="wd-title">
                    {post.userName} <i className="fas fa-check-circle" style={{"color": "white"}}></i>
                    <span style={{"color":"gray"}}>{post.time}</span>
                    <span style={{"color":"gray"}}>{post.title}</span>
                </div>

                <div className="card mb-3 wd-style-card-border">
                    <div className="card-body wd-card-body">
                        <img src={post.image} style={{"width":"100%"}}/>
                    </div>
                    <div className="card-body wd-content-border {post.longTitle==='' ? 'wd-none':''}">
                        {post.longTitle}
                        <span style={{"color": "gray;"}}>{post.comment}</span>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-3"><i className="fas fa-comment-alt" style={{"color": "rgb(110,118,125)"}}></i>  {post.commentCout} </div>
                    <div className="col-3"><i className="fas fa-retweet"style={{"color": "rgb(110,118,125)"}}></i>  {post.repost} </div>
                    <div className="col-3"><i className="fas fa-heart" styles={{"color": "rgb(110,118,125)"}}></i>  {post.love} </div>
                    <div className="col-3"><i className="fas fa-external-link-alt" style={{"color": "rgb(110,118,125)"}}></i></div>
                </div>

            </div>
        </div>

    </ul>
    );
}
export default PostItem;