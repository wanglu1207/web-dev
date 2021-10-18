const NavigationSidebar = (active) => {
    return(`
            <div class="list-group ">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>

            <!-- continue the rest of the list -->


            <a class="list-group-item list-group-item-action ${active==='home' ? 'active':''}" href="../HomeScreen/home.html">
                <i class="fas fa-home"></i>
                <span class="d-none d-xl-inline-block d-xxl-inline-block">Home</span>
            </a>

            <a class="list-group-item list-group-item-action ${active==='explore' ? 'active':''}" href="../ExploreScreen/explore.html">
                <i class="fas fa-hashtag"></i>
                <span class="d-none d-xl-inline-block d-xxl-inline-block">Explore</span>
            </a>

            <a class="list-group-item list-group-item-action" href="/">
                <i class="fas fa-bell"></i>
                <span class="d-none d-xl-inline-block d-xxl-inline-block">Notifications</span>
            </a>

            <a class="list-group-item list-group-item-action" href="/">
                <i class="fas fa-envelope"></i>
                <span class="d-none d-xl-inline-block d-xxl-inline-block">Messages</span>
            </a>

            <a class="list-group-item list-group-item-action" href="/">
                <i class="fas fa-bookmark"></i>
                <span class="d-none d-xl-inline-block d-xxl-inline-block">Bookmarks</span>
            </a>

            <a class="list-group-item list-group-item-action" href="/">
                <i class="fas fa-list"></i>
                <span class="d-none d-xl-inline-block d-xxl-inline-block">Lists</span>
            </a>

            <a class="list-group-item list-group-item-action" href="/">
                <i class="fas fa-user"></i>
                <span class="d-none d-xl-inline-block d-xxl-inline-block">Profile</span>
            </a>

            <a class="list-group-item list-group-item-action" href="/">
                <i class="fas fa-comment-dots"></i>
                <span class="d-none d-xl-inline-block d-xxl-inline-block">More</span>
            </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;

