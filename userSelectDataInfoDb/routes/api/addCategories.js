var express = require('express');
var router = express.Router();
var pool = require('../db/pool');
var upload = require('../multer');

/* POST insert API. */
router.post('/categoriesData',upload.single('img'),(req,res)=>{
    console.log(req.body, req.file);
    
    pool.query('insert into add_categories(name,img)values(?,?)',[
        req.body.name,
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

/* categories  fetch id */
router.get('/displayaId', function(req, res, next) {
    pool.query('select * from add_categories',function(error, result){
        if(error){
            res.status(500).json([])
        }
         else{
             res.status(200).json(result)
         }
    })
  });

  

module.exports = router;
