import { Router } from "express";


const subRouter= Router();


subRouter.get('/', (req,res)=>{res.send({title:"GET all subscriptions"})});

subRouter.post('/', (req,res)=>{res.send({title:"CREATE subscription"})});

subRouter.put('/', (req,res)=>{res.send({title:"UPDATE subscription"})});

subRouter.get('/upcoming-renewals', (req,res)=>{res.send({title:"GET upcoming renewals"})});
subRouter.get('/:id', (req,res)=>{res.send({title:"GET subscription details"})});





subRouter.delete('/:id', (req,res)=>{res.send({title:"DELETE subscription"})});


subRouter.get('/user/:id', (req,res)=>{res.send({title:"GET all user subscriptions"})});


subRouter.put('/cancel/:id', (req,res)=>{res.send({title:"CANCEL subscription"})});



    

export default subRouter;

