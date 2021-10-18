import post from "./post.js";
import PostItem from "./PostItem.js"
const PostList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->
            ${
                post.map(post => {
                    return(PostItem(post));
                }).join('')
            }
            </ul>
`); }
export default PostList;