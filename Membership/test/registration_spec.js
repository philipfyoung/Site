/**
 * Created by Sandra on 3/27/2015.
 */
'use strict';

var Registration = require('../lib/registration');

describe("Registration", function() {

    describe("a valid application", function() {
        var regResult = {};
        before(function() {
            regResult = Registration.applyforMembership({email : "philyoungwork@gmail.com"});
        });
        it("is successful", function() {
            regResult.success.should.equal(true);
        });
        it("creates a user", function() {

        });
        it("creates a log entry");
        it("sets the user's status to approved");
    });

    describe("an empty or null email", function() {
        it("is not successful");
        it("notifies user that email is required")
    });

    describe("an empty or null password", function() {
        it("is not successful");
        it("notifies user that password is required");
    });

    describe("password and confirm mismatch", function() {
        it("is not successful");
        it("notifiies user passwords don't match");
    });

    describe("email already exists", function() {
        it("is not successful");
        it("notifies user that email already exists");
    });


})