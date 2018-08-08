var express=require('express');
var router=express.Router();

var users=require('./controllers/user.js');
var tickets=require('./controllers/ticket.js');
 

router.get('/myapi/users/',users.getAll);
router.get('/myapi/user/:id',users.getOne);
router.post('/myapi/user/',users.create);
router.put('/myapi/user/:id',users.update);
router.delete('/myapi/user/:id',users.delete);


router.get('/myapi/tickets/',tickets.getAll);
router.put('/myapi/ticket/:id',tickets.update);
router.post('/myapi/ticket/',tickets.create);
router.get('/myapi/ticket/:id',tickets.getOne);
router.delete('/myapi/ticket/:id',tickets.delete);


module.exports = router;