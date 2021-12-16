import React, { useEffect } from 'react'
import PostItem from "./PostItem";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTweets } from '../../../../services/tweetService';


const PostList = () => {
    const selectAllPosts=(state)=>state.posts;
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    useEffect(() => fetchAllTweets(dispatch), [])
    // const posts=useSelector((state)=>state);
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