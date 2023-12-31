const express= require("express");
const router= express.Router();
const {handleLogin , handleSignup , handleAuthentication}= require("../controller/user");

router.get("/",(req,res) => {
    res.redirect("/login");
  })
  
router.route("/login")
.get((req,res) => {
    res.status(300).json({url: "/"});
})
.post(handleLogin);

router.route("/signup")
.get((req,res) => {
res.status(300).json({url: "/signup"});
})
.post(handleSignup);

router.post("/authenticate",handleAuthentication);

module.exports=router;