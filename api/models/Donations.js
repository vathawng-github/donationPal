const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const DonationSchema = new Schema ({
    campaign_id: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    donation_date: {
        type: Date,
        required: true
    }
});

mongoose.model('donations', DonationSchema);