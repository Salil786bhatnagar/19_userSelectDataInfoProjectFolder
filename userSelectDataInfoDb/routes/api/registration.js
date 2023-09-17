var express = require('express');
var router = express.Router();
var pool = require('../db/pool');
var upload = require('../multer');

/* POST insert API. */
router.post('/insertData',upload.single('img'),(req,res)=>{
    console.log(req.body, req.file);
    
    pool.query('insert into userdata(name,lname,contact,address,email,password,img,city,state)values(?,?,?,?,?,?,?,?,?)',[
        req.body.name,
        req.body.lname,
        req.body.contact,
        req.body.address,
        req.body.email,
        req.body.password,
        req.file.filename,
        req.body.city,
        req.body.state
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

// /* categories  fetch emailid */
// router.post('/checkEamil', function(req, res, next) {
//     pool.query('select * from userdata where email=?',[req.body.email],function(error, result){
//         if(error){
//             res.status(500).json([])
//         }
//          else{
//             console.log(result);
//              res.status(200).json(result)
//          }
//     })
//   });



/* product fetch Vegetables data id */
// router.get('/displayaVegetablesProductData', function(req, res, next) {
//     pool.query('select * from add_product where c_id=1 limit 5',function(error, result){
//         if(error){
//             res.status(500).json([])
//         }
//          else{
//              res.status(200).json(result)
//          }
//     })
//   });

  /* product fetch Fruits data id */
// router.get('/displayaFruitsProductData', function(req, res, next) {
//     pool.query('select * from add_product where c_id=2 limit 5',function(error, result){
//         if(error){
//             res.status(500).json([])
//         }
//          else{
//              res.status(200).json(result)
//          }
//     })
//   });

  /* product fetch Cereals data id */
// router.get('/displayaCerealsProductData', function(req, res, next) {
//     pool.query('select * from add_product where c_id=3 limit 5',function(error, result){
//         if(error){
//             res.status(500).json([])
//         }
//          else{
//              res.status(200).json(result)
//          }
//     })
//   });

    /* product Tubers Cereals data id */
// router.get('/displayaTubersProductData', function(req, res, next) {
//     pool.query('select * from add_product where c_id=4 limit 5',function(error, result){
//         if(error){
//             res.status(500).json([])
//         }
//          else{
//              res.status(200).json(result)
//          }
//     })
//   });

 /* product Legumes data id */
    // router.get('/displayaLegumesProductData', function(req, res, next) {
    //     pool.query('select * from add_product where c_id=5 limit 5',function(error, result){
    //         if(error){
    //             res.status(500).json([])
    //         }
    //          else{
    //              res.status(200).json(result)
    //          }
    //     })
    //   });

    /* product Dairy foods data id */
    // router.get('/displayaDairyfoodsProductData', function(req, res, next) {
    //     pool.query('select * from add_product where c_id=6 limit 5',function(error, result){
    //         if(error){
    //             res.status(500).json([])
    //         }
    //          else{
    //              res.status(200).json(result)
    //          }
    //     })
    //   });   

      /* product Meat Fish and Eggs data id */
    //   router.get('/displayaMeatFishEggsProductData', function(req, res, next) {
    //     pool.query('select * from add_product where c_id=7 limit 5',function(error, result){
    //         if(error){
    //             res.status(500).json([])
    //         }
    //          else{
    //              res.status(200).json(result)
    //          }
    //     })
    //   });   

        /* product Meat Fish and Eggs data id */
        // router.get('/Category_ProductData', function(req, res, next) {
        //     pool.query('SELECT Ap.productname FROM `add_product` Ap INNER JOIN `add_categories`Ac ON Ap.c_id = Ac.c_id WHERE Ac.c_id=?;',
        //     [req.body.c_id],function(error, result){
        //         if(error){
        //             console.log(error)
        //             res.status(500).json([])
        //         }
        //             else{
        //                 console.log(res)
        //                 res.status(200).json(result)
        //             }
        //     })
        //     });
        
        // router.post('/Category_ProductData', function(req, res, next) {
        //     pool.query('SELECT Ap.productname, Ap.productimg FROM `add_product` Ap INNER JOIN `add_categories`Ac ON Ap.c_id = Ac.c_id WHERE Ac.c_id=?',
        //     [req.body.c_id],
        //     function (error, result) {
        //         if (error) {
        //           res.status(500).json([]);
        //         } else {
        //           console.log(result);
        //           res.status(200).json(result);
        //         }
        //       }
        //     )
        //     }); 

                // product singal product details

            // router.post('/Category_Singal_ProductData', function(req, res, next) {
            //     pool.query('SELECT Ap.productname, Ap.productprice, Ap.productimg FROM `add_product` Ap INNER JOIN `add_categories`Ac ON Ap.c_id = Ac.c_id WHERE Ap.productname=?',
            //     [req.body.productname],
            //     function (error, result) {
            //         if (error) {
            //           res.status(500).json([]);
            //         } else {
            //           console.log(result);
            //           res.status(200).json(result);
            //         }
            //       }
            //     )
            // });
    

module.exports = router;



