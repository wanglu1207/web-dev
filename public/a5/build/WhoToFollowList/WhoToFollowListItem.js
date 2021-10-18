
const WhoToFollowListItem = (who)=>{
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-2">
                <img src="${who.avatarIcon}" class="wd-avatarIcon"/>
            </div>
            <div class="col-7">
                <div style="font-size: 11px">
                    ${who.userName}
                    <i class="fas fa-check-circle" style="color: white"></i>
                </div>
                <div style="font-size: 11px">
                    ${who.handle}
                </div>
             </div>
             <div class="col-3">
                 <button class="btn btn-primary rounded-pill" style="font-size: 13px;">Follow</button>
             </div>
        </div>
    </li>
    `);
}
export default WhoToFollowListItem;
