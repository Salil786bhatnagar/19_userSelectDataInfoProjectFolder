var express = require('express');
var router = express.Router();
var pool = require('../db/pool');
var upload = require('../multer');

/* POST insert API. */
router.post('/insertPoliticesPost',upload.single('image'),(req,res)=>{
    console.log(req.body, req.file);
    
    pool.query('insert into politicespostdata(title,discription,image)values(?,?,?)',[
        req.body.title,
        req.body.discription,
        req.file.filename,
          ],function(error, result){
        if(error){
            console.log(res);
            return res.status(400).json({error})
        }
         else{
             console.log(result)  
             return res.status(200).json({result})
         }
    });
})



module.exports = router;



