//dependencies
const router = require("express").Router();
const Profile = require("../model/profile")

router.get("/", async(req,res)=>{
    try {
        let profiles = await Profile.find();
        res.status(200).send({
            count: profiles.length,
            profiles
        })
    } catch (e) {
        res.status(500).json({
            message: "Unable to get all profiles"
        })
    }
})

module.exports = router;