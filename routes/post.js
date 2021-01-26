const { Router } = require('express');
const  express=require('express');
const router = express.Router();
const data = require('../models/data')

router.get('/',async(req,res,)=>{
    try{
        const aliens = await data.find()
        res.json(aliens)
       } 
       catch(err){res.send('error'+err)}
})
router.get('/:id',async(req,res,)=>{
    try{
        //url Link http://localhost:3000/pp/600fe042a07de639b0cf120a
        const alien = await data.findById(req.params.id)
        res.json(alien)
       } 
       catch(err){res.send('error'+err)}
})
//upodate the data 
router.patch('/:id',async(req,res,)=>{
    try{
        //url Link http://localhost:3000/pp/600fe042a07de639b0cf120a
        const alien = await data.findById(req.params.id);
        alien.name = req.body.name;
        const asp = await alien.save();
        res.json(asp)
        
       } 
       catch(err){res.send('error'+err)}
})
//remove the data 
router.patch('/del/:id',async(req,res,)=>{
    try{
        //url Link http://localhost:3000/pp/del/600fe042a07de639b0cf120a
        const alien = await data.findById(req.params.id);
        
        const asp = await alien.remove();
        res.json(asp)
        
       } 
       catch(err){res.send('error'+err)}
})
router.post('/',async(req,res,)=>{
    
    //console.log(req.body)
    //res.send(req.body); 
   // res.send({"name":"munal"});
   try{
    const datas = new data({
        name: req.body.name,
        address: req.body.address
    })
    const a1 = await datas.save()
    res.json(a1)
   } 
   catch(err){res.send('error'+err)}

})

module.exports = router;
