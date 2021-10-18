//import PostSummaryItem from "../PostSummaryList/PostSummaryItem.js";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
                       <!-- search field and cog -->

        <div class="row mb-2">
            <div class="col-10 position-relative">
                <i class="fas fa-search" style="color:white; position:absolute; left:25px; top:10px"></i>
                <input class="form-control" placeholder="Search Twitter" style="background-color: darkgrey; padding-left: 34px; border-radius: 51px;"/>
            </div>
            <div class="col-1 mt-1">
                <a href="explore-settings.html">
                    <i class="fas fa-cog fa-2x" style="color: white;"></i>
                </a>
            </div>
        </div>



           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
           <li class="nav-item">
               <a class="nav-link active" data-bs-toggle="tab" href="#home">For you</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" data-bs-toggle="tab" href="#profile">Trending</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" data-bs-toggle="tab" href="#home">News</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" data-bs-toggle="tab" href="#profile">Sports</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" data-bs-toggle="tab" href="#profile">Entertainment</a>
               </li>
           <!-- image with overlaid text -->
        <ul class="list-group">
            <li class="list-group-item wd-boarder" style="background-color: black;">
                <div class="wd-spacex" >
                    <img src="../../images/spaceX.jpeg" alt="spaceX" style="width:100%;">
                    <div class="wd-bottom-left" style="color: white; position: absolute;bottom: 23px;left: 31px;font-size: 3em;">SpaceX's startship</div>
            </div>
            </li>

           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

//<div class="col-10">
//                <input class="form-control" placeholder="Search Twitter" style="background-color: darkgrey; padding-left: 34px; border-radius: 51px;"/>
//            </div>
//            <div class="col-1 mt-1">
//                <a href="explore-settings.html">
//                    <i class="fas fa-cog fa-2x" style="color: white;"></i>
//                </a>
//            </div>
//            <div class="col-2">
//                <i class="fas fa-search" style="position: absolute; bottom: 10px;left: 26px;"></i>
//            </div>
