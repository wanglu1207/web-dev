import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'}) =>
{
    return(
        <>
            <div className={`list-group`}>
                <Link to="/a8/">
                <a className={`list-group-item`} href="/">
                    <i className={`fab fa-twitter`}></i></a>
            </Link>
            <Link to="/a8/twitter/home">
            <a className={`list-group-item list-group-item-action ${active==='home' ? 'active':''}`} href="../HomeScreen/home.html">
                <i className={`fas fa-home`}></i>
                <span className={`d-none d-xl-inline-block d-xxl-inline-block`}>Home</span>
            </a>
            </Link>

                <Link to="/a8/twitter/explore">
                <a className={`list-group-item list-group-item-action ${active==='explore' ? 'active':''}`} href="../ExploreScreen/explore.html">
                <i className={`fas fa-hashtag`}></i>
                <span className={`d-none d-xl-inline-block d-xxl-inline-block`}>Explore</span>
            </a>
                </Link>

            <a className={`list-group-item list-group-item-action`} href="/">
                <i className={`fas fa-bell`}></i>
                <span className={`d-none d-xl-inline-block d-xxl-inline-block`}>Notifications</span>
            </a>

            <a className={`list-group-item list-group-item-action`} href="/">
                <i className={`fas fa-envelope`}></i>
                <span className={`d-none d-xl-inline-block d-xxl-inline-block`}>Messages</span>
            </a>

            <a className={`list-group-item list-group-item-action`} href="/">
                <i className={`fas fa-bookmark`}></i>
                <span className={`d-none d-xl-inline-block d-xxl-inline-block`}>Bookmarks</span>
            </a>

            <a className={`list-group-item list-group-item-action`} href="/">
                <i className={`fas fa-list`}></i>
                <span className={`d-none d-xl-inline-block d-xxl-inline-block`}>Lists</span>
            </a>

            <a className={`list-group-item ${active === 'profile' ? 'active' :''}`} href="/a8/twitter/profile">
                <i className={`fas fa-user`}></i>
                <span className={`d-none d-xl-inline-block d-xxl-inline-block`}>Profile</span>
            </a>

            <a className={`list-group-item list-group-item-action`} href="/">
                <i className={`fas fa-comment-dots`}></i>
                <span className={`d-none d-xl-inline-block d-xxl-inline-block`}>More</span>
            </a>
            </div>
            <div className={`d-grid mt-2`}>
                <a href="tweet.html"
                   className={`btn btn-primary btn-block rounded-pill`}>
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;