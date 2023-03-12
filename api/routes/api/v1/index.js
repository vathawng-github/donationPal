const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;

require('models/Donations');
require('models/Campaign');
require('models/User');

const Donations = mongoose.model('donations');
const Campaign = mongoose.model('campaigns');
const User = mongoose.model('users');


// Root route   
router.get('/', (req, res) => {
    res.send('Root API route');
});

// Get all 
router.get('/donations', async (req, res) => {
    // Using Mongoose
    const filter = {};
    const donations = await Donations.find(filter);
    console.log(donations);
    res.json(donations);
});

router.get('/campaigns', async (req, res) => {
    // Using Mongoose
    const filter = {};
    const campaigns = await Campaign.find(filter);
    console.log(campaigns);
    res.json(campaigns);
});

router.get('/campaigns/:_id', async (req, res, next) => {
    // Using Mongoose
    // The "_id" is in req.params.id
    const paramInputID = req.params._id;
    const requestedCampaign = await Campaign.findById(paramInputID);
    console.log(paramInputID);
    res.json(requestedCampaign);
    console.log(requestedCampaign);
});

router.get('/users', async (req, res) => {
    // Using Mongoose
    const filter = {};
    const users = await User.find(filter);
    console.log(users);
    res.json(users);
});

router.get('/users/:_id', async (req, res, next) => {
    // Using Mongoose
    const paramInputID = req.params._id;
    const user = await User.findById(paramInputID);
    console.log(paramInputID);
    console.log(user);
    res.json(user);
});

router.get('/donation/user/:user_id', async function (req, res, next) {
    const paramInputID = {'user_id:': new ObjectId(req.params.user_id)};
    const donation = await Donations.find(paramInputID);
    console.log(paramInputID);
    res.json(donation);
    console.log(donation);

    // const paramInputID = req.params.user_id;
    // const donation = await Donations.findById(paramInputID);
    // console.log(paramInputID);
    // console.log(donation);  
    // res.json(donation);
});     

router.get('/donations/campaigns/:campaign_id', async function (req, res, next) {
    const paramInputID = {'campaign_id': new ObjectId(req.params.campaign_id)};
    const requestedCampaign = await Donations.find(paramInputID);
    console.log(paramInputID);
    res.json(requestedCampaign);
    console.log(requestedCampaign);
}); 


module.exports = router;