const PROFILE_API = 'http://localhost:4000/api/profile';


export const fetchCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile => {
                dispatch({
                    type: 'fetch-profile',
                    profile
                })
            }
        );
export const updateCurrentProfile = (dispatch, newOwner) => {
    fetch(PROFILE_API, {
        method: 'POST',
        body: JSON.stringify(newOwner),
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        }
    })
        .then(response => {
            return response.clone().json()
        })
        .then(profile =>
            dispatch({
                type: 'save',
                profile
            }))
};