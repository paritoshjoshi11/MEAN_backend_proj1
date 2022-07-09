const express=require('express')
const router=express.Router()
const Employee=require('../models/employee.js')
const ObjectID=require('mongoose').Types.ObjectId


// create api
// post api
router.post('/',(req,res)=>{
    let emp= new Employee({
        name:req.body.name,
        position:req.body.position,
        dept:req.body.dept

    });
    emp.save((err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            console.log('error in post data : '+err)
        }

    })
})

router.get('/',(req,res)=>{
    Employee.find((err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            console.log('error in get data : '+err)
        }

    })
})
// get single employee
router.get('/:id',(req,res)=>{
    if(ObjectID.isValid(req.params.id)){
        Employee.findById(req.params.id,(err,doc)=>{
            if(err){
                console.log('Error in get Employee by ID '+err)
            }
        else{
            res.send(doc)
        }
        })

    }else{
        return res.status(400).send('no record wit id: '+req.params.id)
    }
    })

    router.delete('/:id',(req,res)=>{
        if(ObjectID.isValid(req.params.id)){
            Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
                if(err){
                    console.log('Error in delete Employee by ID '+err)
                }
            else{
                res.send(doc)
            }
            })
    
        }else{
            return res.status(400).send('no record wit id: '+req.params.id)
        }
        })

        router.put('/:id',(req,res)=>{
            if(ObjectID.isValid(req.params.id)){
                let emp= {
                    name:req.body.name,
                    position:req.body.position,
                    dept:req.body.dept
            
                }
                Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
                    if(err){
                        console.log('Error in get Employee by ID '+err)
                    }
                else{
                    res.send(doc)
                }
                })
        
            }else{
                return res.status(400).send('no record wit id: '+req.params.id)
            }
            })


module.exports=router

