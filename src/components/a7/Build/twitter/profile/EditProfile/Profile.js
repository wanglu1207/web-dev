import React, {useState} from "react";
import profileData from "../../../../../../data/profileData";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import NavigationSidebar from "../../../NavigationSidebar/index";

const EditProfile=()=>{
    const [name, setName]=useState({newName:profileData.name});
    const [bio, setBio]=useState({newBio:profileData.bio});
    const [location, setLocation]=useState({newLocation:profileData.location});
    const [website, setWebsite]=useState({newWebsite:profileData.website});
    const [birth, setBirthday]=useState({newBirthday:profileData.dateOfBirth});
    const dispatch=useDispatch();

    const nameChangeHandle=(event)=>{
        const name=event.target.value;
        const newName = {newName : name};
        setName(newName);
    }

    const bioChangeHandle=(event)=>{
        const bio=event.target.value;
        const newBio={newBio:bio};
        setBio(newBio);
    }

    const locationChangeHandle=(event)=>{
        const location=event.target.value;
        const newLocation={newLocation:location};
        setLocation(newLocation);
    }

    const websiteChangeHandle=(event)=>{
        const website=event.target.value;
        const newWebsite={newWebsite:website};
        setWebsite(newWebsite);
    }


    const birthChangeHandle=(event)=>{
        const birthday=event.target.value;
        const newBirthday={newBirthday:birthday};
        setBirthday(newBirthday);
    }

    const saveProfileClickHandle=()=>{
        dispatch({type:'save-profile', name, bio,location,website,birth})
    }

    return(
        <>

            <div className="row mt-2">

                <div className="col-10 col-md-10 col-lg-7 col-xl-2" style={{ 'position': 'relative' }}>
                    <NavigationSidebar active={'profile'}/>
                </div>

                <div className="col-10 col-md-10 col-lg-11 col-xl-10">
                    <div className="row">
                        <div className="col-1 d-flex align-items-center justify-content-center">

                            <Link to="/a7/twitter/profile">
                                <i className="fas fa-times"></i>
                            </Link>
                        </div>

                        <div className="col-10">
                            <div style={{ fontSize: '20px' }}>
                                Edit Profile
                            </div>
                        </div>

                        <div className="col-1">
                            <Link to="/a7/twitter/profile">
                                <button type="button" className="btn btn-dark disabled" onClick={saveProfileClickHandle}>
                                    Save
                                </button>
                                {/*<span className="badge rounded-pill bg-primary" onClick={saveProfileClickHandle}>*/}
                                {/*    Save*/}
                                {/*</span>*/}
                            </Link>
                        </div>


                <img
                    src="../../../images/bg.png"
                    height="400px" width="100px"
                />

                <div className="ms-2">
                    <div>
                        <img
                            src="../../../images/js.png"
                            width="48px"
                            height= "48px"
                            style={{borderRadius:'50%'}}
                        />
                    </div>

                    <div className="mt-2">
                        <label for="name">Name</label>
                        <textarea class="bg-black text-white form-control" id="exampleTextarea" rows="4" value={name.newName} onChange={nameChangeHandle}>
                            {profileData.name}
                        </textarea>
                    </div>

                    <div className="mt-2">
                        <label htmlFor="bio">Bio</label>
                        <textarea class="bg-black text-white form-control" id="exampleTextarea" rows="4" value={bio.newBio} onChange={bioChangeHandle}>
                            {profileData.bio}
                        </textarea>
                    </div>

                    <div className="mt-2">

                        <label htmlFor="website">Website</label>
                        <textarea class="bg-black text-white form-control" id="exampleTextarea" rows="4" value={website.newWebsite} onChange={websiteChangeHandle}>
                            {profileData.website}
                        </textarea>
                    </div>



                <label htmlFor="location">Location</label>
                <textarea class="bg-black text-white form-control" id="exampleTextarea" rows="4" value={location.newLocation} onChange={locationChangeHandle}>
                    {profileData.location}
                </textarea>
                </div>

                <div>
                    <span>Birth date - </span>
                    <label for="birthday">Edit</label>
                    <input class="bg-black text-white" value={birth.newBirthday} onChange={birthChangeHandle}/>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default EditProfile;








