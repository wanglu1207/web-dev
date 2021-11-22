import postJson from '../data/post.json';

const posts = (state = postJson, action) => {
    switch (action.type) {
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
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                },
            };
            return ([
                    tweet,
                    ...state.tweets,
                ]
            );
            break;
        default:
            return(state);
    }

};

export default posts;
