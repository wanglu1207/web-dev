const PostItem = (post)=>{
    return(`
    <ul class="list-group-item" style="border-bottom-color:white;">
        <div class="row mt-3">
            <div class="col-2">
                <img src="${post.avatar}" class="wd-avatarIcon"/>
            </div>

            <div class="col-10">
                <div class="wd-title">
                    ${post.userName} <i class="fas fa-check-circle" style="color: white"></i>
                    <span style="color:gray">${post.time}</span> </br>
                    <span style="color:gray">${post.title}</span>
                </div>

                <div class="card mb-3" style="border: solid 1px rgb(47,51,54); border-radius: 10px">
                    <div class="card-body" style="border-bottom: solid 1px rgb(47,51,54)">
                        <img src="${post.image}" style="width:100%"/>
                    </div>
                    <div class="card-body wd-content-border ${post.longTitle==='' ? 'wd-none':''}">
                        ${post.longTitle}</br>
                        <span style="color: gray;">${post.comment}</span>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-3"><i class="fas fa-comment-alt" style="color: rgb(110,118,125)"></i>  ${post.commentCout} </div>
                    <div class="col-3"><i class="fas fa-retweet"style="color: rgb(110,118,125)"></i>  ${post.repost} </div>
                    <div class="col-3"><i class="fas fa-heart" styles="color: rgb(110,118,125)"></i>  ${post.love} </div>
                    <div class="col-3"><i class="fas fa-external-link-alt" style="color: rgb(110,118,125)"></i></div>
                </div>

            </div>
        </div>

    </ul>
    `);
}
export default PostItem;