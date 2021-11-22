import React from "react";
import "../index.css"
const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../../../../../public/images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    })=>{
    return(
        <>
            <li className={`list-group-item`}>
                <div className={`row`}>
                    <div className={`col-2`}>
                        <img src={who.avatarIcon} width="48" className="wd-avatarIcon"/>
                    </div>
                    <div className={`col-7`}>
                        <div className="wd-userName">
                            {who.userName}
                            <i className="fas fa-check-circle wd-userName-bgColor"></i>
                        </div>
                        <div className="wd-handle">
                            {who.handle}
                        </div>
                    </div>
                    <div className={`col-3`}>
                        <button className="btn btn-primary rounded-pill wd-follow">Follow</button>
                    </div>
                </div>
            </li>
        </>
    );
}

export default WhoToFollowListItem;