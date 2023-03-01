// Requires
const { authenticate } = require('passport');
const passport = require('passport');
const localStrategy = require("passport-local").Strategy;
const UserModel = require("../models/User");
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;


// Helper Functions

// Define a function that accepts an email and password and creates a user in the database
let createUser = async(email, password, cb) => {
    try {
        const user = await UserModel.create({email, password});
        return cb(null, user);
    } catch (err) {
        cb(err);
    }
};

let authenticateLogin = async (email, password, cb ) => {
    // Search mongo for the user with the supplied email
    UserModel.findOne({email})
    .then( async (user) => {
        if (!user) {
            return cb(null, false);
        }
        const isValidPwd = await user.isValidPassword(password);

        if (isValidPwd) {
            return cb(null, user);
        } else {
            return cb(null, false);
        }
    })
    .catch((err) => {
        cb(err);
    });
};

let getUserFromToken = async (token, cb) => {
    try {
        return cb(null, token.payload);
    } catch(err) {
        cb(err);
    }
}




// Passport Middleware

// 1 - Local Strategy for registering a user
passport.use(
    // Nickname
    'register',
    // Strategy implementation
    new localStrategy(
        // Passport expects fields named username and password
        {
            usernameField: "email",
            passwordField: "password"
        },
        // Pass a function that defines how a user is written to the database
        createUser
    )
);



// 2 - Local strategy for logging in a user 
passport.use(
    // Nickname
    'login',
    // Strategy implementation
    new localStrategy(
        // Passport expects fields named username and password
        {
            usernameField: "email",
            passwordField: "password"
        },
        // Pass a function that defines how a user is written to the database
        authenticateLogin
    )
);



// 3 - JWT strategy for reading a token and providing access to a resource
passport.use(
    new JWTstrategy(
        {
            secretOrKey: process.env.TOP_SECRET_KEY,
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
        },
        // Use our helper function that returns a user object based on the token
        getUserFromToken
    )
);