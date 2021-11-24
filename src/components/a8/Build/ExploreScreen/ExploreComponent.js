import React from "react";
import "../index.css";

const ExploreComponent = () => {

    return(
        <>
            <div className="row mb-2">
                <div className="col-10 position-relative">
                    <div className="wdFaSearch"><i className="fas fa-search"></i></div>
                    <input className="form-control wdSearchPlaceholder" placeholder="Search Twitter" />
                </div>
                <div className="col-1 mt-1">
                    <a href={`explore-settings.html`}>
                        <i className="fas fa-cog fa-2x" style={{"color":"white"}}></i>
                    </a>
                </div>
            </div>



            <div className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <a className={`nav-link active`} data-bs-toggle={`tab`} href={`#home`}>For you</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link`} data-bs-toggle="tab" href={`#profile`}>Trending</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link`} data-bs-toggle="tab" href={`#home`}>News</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link`} data-bs-toggle="tab" href={`#profile`}>Sports</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link`} data-bs-toggle="tab" href={`#profile`}>Entertainment</a>
                </li>

                <ul className={`list-group`} />
                    <li className={`list-group-item wd-boarder`} style={{"background color":"black"}}>
                        <div className={`wd-spacex`}>
                            <img src={'../../images/spaceX.jpeg'} alt={`spaceX`} className="wdImage"/>
                            <div className="wd-bottom-left wdButton">SpaceX's startship</div>
                        </div>
                    </li>

            </div>
        </>
    );
}

export default ExploreComponent;

