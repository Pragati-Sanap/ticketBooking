var ticketModel = require('../models/ticket');

var tickets={
    
    getAll: function(req,res){
        
        ticketModel.find(function(err,doc){
            if(err){
                res.status(500).json({status:'error',message:'Database error'+err,docs:''});
            }
            else{
                res.status(200).json({status:'success',message:'success'+err,docs:doc});
            }
        });
    },
    
    getOne:function(req,res){
        ticketModel.findById(req.params.id,function(err,doc){
            if(err){
                res.status(500).json({status:'error',message:'Database error'+err,docs:''});
            }
            else{
                res.status(200).json({status:'success',message:'success',doc:doc});
            }
        });
    },
    create:function(req,res){
        
        var ticket=new ticketModel();
        ticket.seats=req.body.seats;
        ticket.price=req.body.price;
                
        ticket.save(function(err,doc){
            if(err){
                res.status(500).json({status:'error',message:'Database error'+err,docs:''});
            }
            else{
                res.status(200).json({status:'success',message:'Document Added Successfully',docs:doc});
            }
        });
    },
    update:function(req,res){
        ticketModel.findById(req.params.id,function(err,doc){
            if(err)
                res.status(500).json({status:'error',message:'Database error'+err,docs:''});
           

            doc.seats=req.body.seats;
            doc.price=req.body.price;
       
            doc.save(function(err){
            if(err){
                res.status(500).json({status:'error',message:'Database error'+err,docs:''});
            }
            else{
                res.status(200).json({status:'success',message:'Document Updated Successfully',docs:doc});
            }
        });
           
    });
    
    },
    delete:function(req,res){
        
        ticketModel.remove({
            _id:req.params.id},function(err,user){
            if(err){
                res.status(500).json({status:'error',message:'Database error'+err,docs:''})
                                     } 
            else{
                res.status(200).json({status:'success',message:'Document deleted Successfully',docs:''});
            }
        });
        }
    
    
    
};

module.exports = tickets;