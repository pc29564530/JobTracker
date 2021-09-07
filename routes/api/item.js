const express = require('express');
const router = express.Router();


const Item = require('../../models/Item');

router.get('/', (req,res)=> {
	Item.find()
	.sort({date: -1})
	.then(items=>res.json(items))
});



router.post('/', (req,res)=> {
	const newItems = new Item({
		company: req.body.company,
        jobType:req.body.jobType,
		img:req.body.img,
		role:req.body.role,
		deadline:req.body.deadline,
        source:req.body.source,
		date: req.body.date

	})

	newItems.save().then(item => res.json(item));
});	

module.exports = router;