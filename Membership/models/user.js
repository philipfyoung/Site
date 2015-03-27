/*jshint strict:false*/
/*jslint node: true */
"use strict";


var assert = require("assert");
var utility = require("../lib/utility");            // imports the utility file, along with its functions and attributes

var User = function(obj) {
    assert.ok(obj.email, "Email is Required");
    var user = {};
    user.email = obj.email;
    user.createdAt = obj.createdAt || new Date();
    user.status = obj.status || "pending";
    user.signInCount = obj.signInCount || 0;
    user.lastLoginAt = obj.lastLogin || new Date();
    user.currentLoginAt = obj.currentLoginAT || new Date();
    user.authenticationToken = obj.authenticationToken || utility.randomString(18);

    return user;
};

module.exports = User;