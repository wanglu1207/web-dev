import postJson from '../data/post.json';

const posts = (state = postJson, action) => {
    switch (action.type) {
        case 'fetch-all-tweets':
            return({
                tweets: action.tweets
            })
            break;
        case 'create-tweet':
            const tweet = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                ...action.tweet,
                "avatar-image": "../../../images/react-blue.png",
                "logo-image": "../../../images/react-blue.png",
                "comments": 123,
                "retweets": 234,
                "likes": 345

                // "stats": {
                //     "comments": 123,
                //     "retweets": 234,
                //     "likes": 345
                // },
            };
            return ([
                    tweet,
                    ...state.tweets,
                ]
            );
            break;
        case 'delete-tweet':
            let res = {
                tweets: state.tweets.filter(tweet => tweet._id !== action.tweet._id)
            }
            return res;
            break;
        default:
            return(state);
    }

};

export default posts;
