const PostSummaryItem = (posts)=>{
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-9">
                <div class="wd-topic">${posts.topic}</div>
                <div class="wd-userName">${posts.userName} <i class="fas fa-check-circle" style="color: white"></i><span class="wd-time"> ${posts.time}</span></div>
                <div class="wd-title">${posts.title}</div>
            </div>
            <div class="col-3">
                <img src="${posts.image}" class="wd-image"/>
            </div>
        </div>
    </li>
    `);
}
export default PostSummaryItem;