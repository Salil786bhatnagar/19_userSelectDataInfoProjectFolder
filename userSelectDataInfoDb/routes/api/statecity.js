var express = require('express');
var router = express.Router();
var pool = require('../db/pool');

/* state fetch data*/
router.get('/displayallstates', function(req, res, next) {
  pool.query('select * from states',function(error, result){
      if(error){
          res.status(500).json([])
      }
       else{
           res.status(200).json(result)
       }
  })
});

/* city fetch data and state id */

router.post('/displayallcity',function(req, res, next){
    pool.query('select * from cities where stateid=?',[req.body.stateid],function(error, result){
        if(error){
            return res.status(500).json([])
        }
         else{
             return res.status(200).json(result)
         }
    })
})

module.exports = router;
