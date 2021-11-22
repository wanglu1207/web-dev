import profileData from "../data/profileData";

const profile=(state=profileData, action)=>{
    // let newState;
    switch (action.type){
        case 'save-profile':
            const newState={
                name: "Jose Annunziato",
                handle: "jannunzi",
                profilePicture: "../../../images/js.png",
                bannerPicture: "../../../images/js.png",
                bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retweets and likes are not endorsements.",
                website: "youtube.com/webdevtv",
                location: "Boston, MA",
                dateOfBirth: "November 21, 1968",
                dateJoined: "April 2009",
                followingCount: 312,
                followersCount: 180,
            }
            return newState;


        default:
            return state;
    }
}
export default profile;