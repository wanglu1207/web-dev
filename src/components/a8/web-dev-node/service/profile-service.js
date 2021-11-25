let profile = require('../../../../data/profileData');

module.exports = (app) => {
    const getCurrentProfile=(req, res)=>{
        res.js(profile);
    }

    const updateCurrentProfile=(req, res)=>{

    }
};