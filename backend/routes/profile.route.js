//dependencies
const router = require("express").Router(),
    Profile = require("../model/profile.model"),
    moment = require("moment");

//@route profiles
router.get("/", async(req,res)=>{
    try {
        let profiles = await Profile.find();
        res.status(200).send({
            count: profiles.length,
            profiles
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Unable to get all profiles"
        })
    }
})

router.post("/add", async(req,res)=>{
    try {
        let profile = new Profile(req.body);
        profile.name = req.body.name.toLowerCase();
        profile.password = req.body.name.toLowerCase().split("").reverse().join("");
        await profile.save();
        res.status(201).json({
            message: "profile created!",
            profile
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Unable to add profile"
        })
    }
})

router.put("/update/:id", async (req, res) => {
    try{
        req.body.updated_at = moment().format('dddd, MMMM Do YYYY, h:mm:ss A')
        let profile = await Profile.findByIdAndUpdate(req.params.id, req.body)
        profile.name = req.body.name.toLowerCase();
        profile.password = req.body.name.toLowerCase().split("").reverse().join("");
    
        if(profile){
            res.status(200).json({
                message: "profile updated",
                profile
            })
        }
    }catch(e){
        console.log(e)
        res.status(500).json({
            message: "update profile not successful"
        })
    }
});

router.delete("/delete/:id", async (req,res)=>{
    try {
        let profileDelete = await Profile.findByIdAndDelete(req.params.id);
        if (profileDelete) {
          res.status(200).json({
            message: "deleted profile",
            profileDelete
          });
        }
      } catch (e) {
        console.log(e)
        res.status(500).json({
          message: "failed to delete profile",
        });
      }
})

module.exports = router;