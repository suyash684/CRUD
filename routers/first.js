const express = require ('express')
const router = express.Router()
const One = require('../models/one')

router.get('/',async(req,res) => {
    
    try{
        const first =await One.find()
        res.json(first)
    }catch(err){
        res,send('Error '+ err)
    }
    

})

router.post('/',async(req,res)=>{
    const first= new  One({
        name:req.body.name,
        tech:req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1= await first.save()
        res.json(a1)
        res.json(first)
    }catch(err){
        res.send('Error '+ err)
    }
})

module.exports = router