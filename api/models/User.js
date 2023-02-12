const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const UserSchema = new Schema ({
    gender: {
        type: String,
        required: true
    },
    name: {
        title: {
            type: String,
            required: true
        },
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        },
    },
    location: {
        street: {
            number: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            }   
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        postcode: {
            type: Number,
            required: true
        },
        coordinated: {
            latitude: {
                type: String,
                required: true
            },
            longitude: {
                type: String,
                required: true
            }
        },
        timezone: {
            offset: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true
            }
        },
    },
    email: {
        type: String,
        required: true
    },
    dob: {
        date: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    },
    phone: {
        type: String,
        required: true
    },
    cell: {
        type: String,
        required: true
    },
    user_id: {
        name: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    },
    picture: {
        large: {
            type: String,
            required: true
        },
        medium: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        }
    },
    nat: {
        type: String,
        required: true
    }
});

mongoose.model('users', UserSchema);