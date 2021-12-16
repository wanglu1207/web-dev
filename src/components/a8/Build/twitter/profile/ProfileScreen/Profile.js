import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentProfile} from "../../../../../../services/profileService";

const Profile = () => {
    const profile = useSelector(state => state.profile)
    const dispatch = useDispatch();
    useEffect(() => fetchCurrentProfile(dispatch), []);

    return(
        <>
            <div className="row">
                <div className="col-1">
                    <div >
                        <i className="fas fa-arrow-left"></i>
                    </div>
                </div>
                <div className="col-9">
                    <div style={{ fontSize: '2px',color:'white'}}>
                        {profile.name}
                    </div>

                    <div style={{color: 'darkgray'}}>
                        5,169 Tweets
                    </div>
                </div>
            </div>
            <div>
                <img
                    src="../../../images/bg.png"
                    height="400px" width="100%" style={{ objectFit: 'cover' }}/>

            </div>
            <div className="row">
                <div>

                    <img
                        src="../../../images/js.png"
                        className="rounded-circle"
                        height="160px"
                        width="180px"
                        style={{   border: 'black  solid 4px' , marginTop: "-100px"}}
                    />


                    <div >
                        <span style={{ fontSize: '24px', fontWeight: "bold", color:"white"}}>
                            {profile.name}
                        </span>
                        <br/>
                        <span style={{color: 'gray'}}>
                            @{profile.handle}
                        </span>
                    </div>


                </div>

                <div className="col">
                    <Link to="/a8/twitter/edit">
                        <button type="button" className="btn btn-outline-dark" style={{float: 'right', marginTop: "-80px"}}>Edit Profile</button>
                    </Link>

                </div>
            </div>
            <div  style={{color: 'white'}}>
                <div>
                    {profile.bio}
                </div>
                <div className="row" style={{color: 'darkgray'}}>
                    <div className="col-4 ">
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="p-2">{profile.location}</span>
                    </div>
                    <div className="col-6">
                        <i className="fas fa-birthday-cake"></i>
                        <span className="p-2">Born {profile.dateOfBirth}</span>
                    </div>
                    <div className="col-6">
                        <i className="fas fa-calendar-alt"></i>
                        <span className="p-2">Joined {profile.dateJoined}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <span style={{color: 'white', fontWeight:'bold'}} > {profile.followingCount}  </span>

                        <span style={{color: 'darkgray'}} >Following</span>
                    </div>
                    <div className="col-5">
                        <span style={{color: 'white',fontWeight:'bold'}} > {profile.followersCount}  </span>
                        <span style={{color: 'darkgray'}} >Followers</span>
                    </div>
                </div>
            </div>



        </>
    );
}

export default Profile;