var userModel = require('../models/user');

var users = {

    getAll: function (req, res) {

        userModel.find(function (err, doc) {
            if (err) {
                res.status(500).json({ status: 'error', message: 'Database error' + err, docs: '' });
            }
            else {
                res.status(200).json({ status: 'success', message: 'success' + err, docs: doc });
            }
        });
    },

    getOne: function (req, res) {
        userModel.findById(req.params.id, function (err, doc) {
            if (err) {
                res.status(500).json({ status: 'error', message: 'Database error' + err, docs: '' });
            }
            else {
                res.status(200).json({ status: 'success', message: 'success', doc: doc });
                console.log(doc.createdAt); // Should be approximately now
                console.log(doc.createdAt === doc.updatedAt); // true
                       // Wait 1 second and then update the user
                       
                      
            }
        });

       
    },
    create: function (req, res) {

        var user = new userModel();
        user.name = req.body.name;
        user.email = req.body.email;
        user.seats = req.body.seats;
        user.price = req.body.price;
        user.eventDate = req.body.eventDate;
        user.status = req.body.status;
        
        // user.seatno=req.body.seatno;
        //user.available=req.body.available;


        user.save(function (err, doc) {
            if (err) {
                res.status(500).json({ status: 'error', message: 'Database error' + err, docs: '' });
            }
            else {
                
                res.status(200).json({ status: 'success', message: 'Document Added Successfully', docs: doc });
            }
        });


       
                
               
    },
    update: function (req, res) {
        userModel.findById(req.params.id, function (err, doc) {
            if (err)
                res.status(500).json({ status: 'error', message: 'Database error' + err, docs: '' });

            doc.name = req.body.name;
            doc.email = req.body.email;
            doc.seats = req.body.seats;
            doc.price = req.body.price;
            doc.eventDate = req.body.eventDate;
            doc.status = req.body.status;

            doc.save(function (err) {
                if (err) {
                    res.status(500).json({ status: 'error', message: 'Database error' + err, docs: '' });
                }
                else {
                    res.status(200).json({ status: 'success', message: 'Document Updated Successfully', docs: doc });
                }
            });

        });

    },
    delete: function (req, res) {

        userModel.remove({
            _id: req.params.id
        }, function (err, user) {
            if (err) {
                res.status(500).json({ status: 'error', message: 'Database error' + err, docs: '' })
            }
            else {
                res.status(200).json({ status: 'success', message: 'Document deleted Successfully', docs: '' });
            }
        });
    }



};

module.exports = users;