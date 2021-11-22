import React from "react";
import {useSelector} from "react-redux";
import PostItem from "./PostItem";

// const selectAllPosts=(state)=>state.posts.posts;

const PostList = () => {
    // const selectAllPosts=(state)=>state.posts;
    const posts=useSelector((state)=>state);
    return (
            <ul className="list-group">
                {
                posts.map(post =>
                    <PostItem post={post}/>
        )
    }
            </ul>
    )
};
export default PostList;