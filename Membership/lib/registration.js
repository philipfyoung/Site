/**
 * Created by Sandra on 3/27/2015.
 */
/*jslint node: true */
'use strict';
var User = require('../models/user');
var Application = require('../models/application');

var RegResult = function() {
    var result = {
        success : false,
        message : null,
        user    : null
    }; // inline object

    return result;
};

var validateInputs = function(app) {
    if(!app.email || !app.password) {
        app.setInvalid("Email and password are required");
    } else if(app.password !== app.confirm) {
        app.setInvalid("Passwords do not match");
    } else {
        app.validate();
    }
};

exports.applyforMembership = function(obj) {
    var regResult = new RegResult();
    var app = new Application(obj);

    validateInputs(app);

    regResult.success = true;
    regResult.Message = "Welcome!";

    regResult.user = new User(obj);

    return regResult;
};