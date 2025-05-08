import express from 'express';

const router = express.Router();


const USER = {
    "admin":{
        password:"Adem_967",
        role: "Adem"
    }
};


router.post('/login', (req,res)=> {
    const {username,password} = req.body;

    if(!USER[username] || USER[username].password != password){
        return res.status(401).json({message: "You do not have access to this page"})
    }


    res.cookie("token", "hardcoded-auth-token", {
        httpOnly: true,
        sameSite: "Lax"
    });


    return res.status(200).json({message: "Login successful", role:USER[username].role})
})

export default router;