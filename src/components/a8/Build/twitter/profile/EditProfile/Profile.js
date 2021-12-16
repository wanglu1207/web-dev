import React, {useState} from "react";
import profileData from "../../../../../../data/profileData";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import NavigationSidebar from "../../../NavigationSidebar/index";
import {updateCurrentProfile} from "../../../../../../services/profileService";

const EditProfile = () => {
    let [name, setName] = useState({Newname:profileData.name})
    let [bio, setBio] = useState({Newbio: profileData.bio})
    let [local, setLocal] = useState({Newlocal: profileData.location})
    let [web, setWeb] = useState({Newweb : profileData.website})
    let [birth, setBirth] = useState({Newbirthday: profileData.dateOfBirth});
    const dispatch = useDispatch()

    const saveProfileClickHandle = () => {
        updateCurrentProfile(dispatch,{
            name:name.Newname,
            local:local.Newlocal,
            web:web.Newweb,
            bio:bio.Newbio,
            birth:birth.Newbirthday
        });
    }
    return (
        <>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2" >
                    <NavigationSidebar active={'profile'}/>
                </div>


                <div className="col-10 col-md-10 col-lg-11 col-xl-10">
                    <div className="row">
                        <div className="col-1 d-flex align-items-center justify-content-center">
                            <Link to="/a8/twitter/profile">
                                X
                            </Link>
                        </div>
                        <div className="col-10">
                            <div >
                                Edit Profile
                            </div>

                        </div>
                        <div className="col-1">
                            <Link to="/a8/twitter/profile">
                                <button  onClick={saveProfileClickHandle}>
                                    Save
                                </button>
                            </Link>
                        </div>
                    </div>

                        <img
                            src="../../../images/bg.png"
                            height="400px" width="100px"
                        />


                    <div className="ms-2">
                        <div>
                            <img
                                src="../../../images/js.png"
                                className="rounded-circle"
                                height="160px"
                                width="180px"
                                style={{ position: 'relative', border: 'black solid 2px', marginTop: '-55px' }}
                                alt="profile picture"
                            />
                        </div>

                        <div className="mt-2">
                            <label for="name">Name</label>
                            <textarea class="bg-black text-white form-control" id="exampleTextarea" rows="4"
                                      value = {name.name}
                                      onChange={(e)=>setName({...profileData,name:e.target.value})}>
                                {profileData.name}
                            </textarea>
                        </div>
                        <div className="mt-2 ">
                            <label for="bio">Bio</label>
                            <textarea class="bg-black text-white form-control" id="exampleTextarea" rows="4"
                                      value={bio.bio}
                                      onChange={(e)=>setBio({...profileData,bio:e.target.value})}>
                                {profileData.bio}
                            </textarea>
                        </div>
                        <div className="mt-2">
                            <label for="location">Location</label>
                            <textarea textarea class="bg-black text-white form-control" id="exampleTextarea" rows="4"
                                      value={local.local}
                                      onChange={(e)=>setLocal({...profileData,local:e.target.value})}>
                                {profileData.location}
                            </textarea>
                        </div>
                        <div className="mt-2">
                            <label for="website">Website</label>
                            <textarea textarea class="bg-black text-white form-control" id="exampleTextarea" rows="4"
                                      value={web.web}
                                      onChange={(e)=>setWeb({...profileData,website:e.target.value})}>
                                {profileData.website}
                            </textarea>
                        </div>

                                <span>Birth date - Edit </span>

                                <input id="birthday" type="date" className="bg-light text-white"
                                       value={birth.birthday}
                                       onChange={(e)=>setBirth({...profileData,birth:e.target.value})}

                                />
                    </div>
                </div>
            </div>

        </>
    )
}
export default EditProfile;

