var express = require('express');
var router = express.Router();
var pool = require('../db/pool');
require('dotenv').config();
var jwt = require('jsonwebtoken');
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('/scratch');
function generateToken(username){
    return jwt.sign(username, process.env.TOKEN_SECRET,{expiresIn:'1000s'})
}

// post login authandication
// router.post('/userLogin',(req,res){
//     pool.query("select * from userdata where email=? and password=?",[req.body.email,req.body.password],function(err,result){
//         if(err){
//           console.log(err)
//          return res.status(500).json([])
//         }
//         else
//         {
//             if(result.length==1){
//                 const token=generateToken({username:[0].username})
//                 localStorage.setItem('token',token);
//                 return res.status(200).json(result)
//             }
//             else
//             {
//                 return res.status(200).json([])

//             }
//         }
//     })
// })


router.post('/userLogin',function(req,res)
{ console.log(req.body)
pool.query("select * from userdata where email=? and password=?",
[req.body.email,
 req.body.password,
 req.body.name,
req.body.contact],function(err,result){
if(err){
  console.log(err)
 return res.status(500).json([])
}
else
{  
  
  if(result.length==1)
  {
    const token=generateToken({username:[0].username})
    localStorage.setItem('token',token);
     return res.status(200).json(result)
  }
  else
  {
      return res.status(200).json([])}  
   }
  }) 
})




// session check token...
router.get('/chktoken',function(req,res){
  
    if(!localStorage.getItem('token'))
   {
    
    return res.status(200).json(false)
  
    }
    else
    {
    return res.status(200).json(true)
    }
   
   })

   /* admin logout */
router.get('/logout',function(req,res){
    localStorage.removeItem('token')
    return res.status(200).json(true)
   })




module.exports = router;