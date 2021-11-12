var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 

var cars_controller = require('../controllers/cars'); 
 
/// API ROUTE /// 

// GET resources base. 


/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/cars', cars_controller.cars_create_post); 

// DELETE request to delete Costume. 
router.delete('/cars/:id', cars_controller.cars_delete); 

// PUT request to update Costume. 
router.put('/cars/:id', 
cars_controller.cars_update_put); 
 
// GET request for one Costume. 
router.get('/cars/:id', cars_controller.cars_detail); 
 
// GET request for list of all Costume items. 
router.get('/cars', cars_controller.cars_list); 
 
module.exports = router;