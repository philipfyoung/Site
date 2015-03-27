/**
 * Created by Sandra on 3/26/2015.
 */
"use strict";


var should = require("../node_modules/should");             // imports the should node module for testing
var User = require("../models/user");                       // imports the user object model

describe("User", function() {
    describe("defaults", function() {
        var user = {};
        before(function() {
            user = new User({
                email: "philyoungwork@gmail.com"
            });
        });

        it("email is philyoungwork@gmail.com", function() {
            user.email.should.equal('philyoungwork@gmail.com');
        }); // validates email

        it("has an authentication token", function() {
            user.authenticationToken.should.be.defined;
        });
        it("has a pending status", function() {
            user.status.should.equal("pending");
        });

        it("has a created date", function() {
            user.createdAt.should.be.defined;
        });
        it("has a signInCount of 0", function() {
            user.signInCount.should.equal(0);
        });
        it("has lastLogin", function() {
            user.lastLoginAt.should.be.defined;
        });
        it("has currentLogin", function() {
            user.currentLoginAt.should.be.defined;
        });


    });
});