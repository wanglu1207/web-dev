import profileData from "../data/profileData";
const profile = (state = profileData, action) => {
    switch (action.type){
        case  'save':
            // const newState = {
            //     ...state,
            //     name: action.name.name,
            //     bio: action.bio.bio,
            //     website: action.web.web,
            //     location: action.local.local,
            //     dateOfBirth: action.birth.birth
            // }
            // return newState;
            return action.profile;
        case  'fetch-profile':
            return action.profile;

        default:
            return state;
    }
}
export default profile;
