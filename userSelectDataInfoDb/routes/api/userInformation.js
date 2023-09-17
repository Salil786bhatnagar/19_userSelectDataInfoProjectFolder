var express = require('express');
var router = express.Router();
var pool = require('../db/pool');
var localStorage=require('node-localstorage').LocalStorage
localStorage = new localStorage('/scratch')

// view user singal data
router.get('/useData',function(req, res, next){
  
  if(!localStorage.getItem('token'))
  {
    return res.status(200).json('Session Expired Pls Login Again');
  }
  pool.query("select * from userdata",function(error, result){
    if(error){
      res.status(500).json([])
      console.log(error)
    }else{
      res.status(200).json(result);
      console.log(result);
    }
  })
   
 })


 // view user singaluser data
//  router.post('/userSingalData',function(req,res)
//  { console.log(req.body)
//  pool.query("select * from userdata where email=?",[req.body.email],function(err,result){
//  if(err){
//    console.log(err)
//   return res.status(500).json([])
//  }
//    else
//    {
//     const token=generateToken({email:[0].email})
//     localStorage.setItem('token',token);
//        return res.status(200).json([])}  
//     }) 
//  })
 




module.exports = router;


