const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
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


module.exports = router;