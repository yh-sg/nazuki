const router = require("express").Router();
const AppDate = require("../model/appDate.model")

//@route appdate
router.get("/", async (req, res) => {
    try {
      let appDate = await AppDate.find();
      res.status(200).send({
        count: appDate.length,
        appDate,
      });
    } catch (e) {
        console.log(e)
        res.status(500).json({
          message: "Unable to get appDate",
        });
      }
});

router.post("/add", async(req,res)=>{
    try {
        let createDate = new AppDate(req.body);
        createDate.appDateCreatedBy = req.profile.id;
        await createDate.save();
        res.status(201).json({
            message: "Date created!",
            createDate
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Unable to create date"
        })
    }
})

// router.update("/update/:id", async (req,res)=>{
//   try {

//     } catch (e) {
//       console.log(e)
//       res.status(500).json({
//         message: "",
//       });
//     }
// })

router.delete("/delete/:id", async (req,res)=>{
  try {
      let dateDelete = await AppDate.findByIdAndDelete(req.params.id);
      if (dateDelete) {
        res.status(204).json({
          message: "deleted date",
          dateDelete
        });
      }
    } catch (e) {
      console.log(e)
      res.status(500).json({
        message: "failed to delete date",
      });
    }
})


module.exports = router;