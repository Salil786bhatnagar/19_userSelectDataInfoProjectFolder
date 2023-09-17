var express = require('express');
var router = express.Router();
var pool = require('../db/pool');


/* fetch tha brand data */
router.get('/userDisplayData',function(req, res, next){
    
    pool.query('select * from userdata',function(error,result){
      if(error){
        res.status(500).json([])
      }
       else{
         res.status(200).json(result);
       }
     });
   });



module.exports = router;