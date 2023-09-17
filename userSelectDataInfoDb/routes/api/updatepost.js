var express = require('express');
var router = express.Router();
var pool = require('../db/pool');
var upload = require('../multer');

/* POST insert API. */
router.post('/insertUpdatePost',upload.single('image'),(req,res)=>{
    console.log(req.body, req.file);
    
    pool.query('insert into updatepostdata(title,discription,image)values(?,?,?)',[
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


// update post fetch data 
var express = require('express');
var router = express.Router();
var pool = require('../db/pool');


/* fetch tha brand data */
router.get('/displayUpdatePost',function(req, res, next){
    
    pool.query('select * from updatepostdata',function(error,result){
      if(error){
        res.status(500).json([])
      }
       else{
         res.status(200).json(result);
       }
     });
   });



module.exports = router;



module.exports = router;



