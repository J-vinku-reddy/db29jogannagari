var cars = require('../models/cars'); 
 
// List of all carss 
exports.cars_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: cars list'); 
}; 
 
// for a specific cars. 
// for a specific cars. 
exports.cars_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await cars.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle cars create on POST. 
exports.cars_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: cars create POST'); 
}; 
 
// Handle cars delete form on DELETE. 
exports.cars_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: cars delete DELETE ' + req.params.id); 
}; 
 
// Handle cars update form on PUT. 
exports.cars_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: cars update PUT' + req.params.id); 
}; 
// List of all carss 
exports.cars_list = async function(req, res) { 
    try{ 
        thecars = await cars.find(); 
        res.send(thecars); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.cars_view_all_Page = async function(req, res) { 
    try{ 
        thecarss = await cars.find(); 
        res.render('cars', { title: 'cars Search Results', results: thecarss }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
// Handle cars create on POST. 
exports.cars_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new cars(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"cars_type":"goat", "cost":12, "size":"large"} 
    document.color = req.body.color; 
    document.quantity = req.body.quantity; 
    document.cost = req.body.cost; 
    
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
exports.cars_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await cars.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.cName)  
               toUpdate.cName = req.body.cName; 
        if(req.body.cSize) toUpdate.cSize = req.body.cSize; 
        if(req.body.cCost) toUpdate.cCost = req.body.cCost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 