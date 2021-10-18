import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollow from "../WhoToFollowList/index.js";
(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                ${NavigationSidebar('explore')}
            </div>

            <div class="col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
                ${ExploreComponent()}
            </div>

            <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                ${WhoToFollow()}
            </div>
        </div>
    `);
})($);



