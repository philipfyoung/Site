/**
 * Created by Sandra on 3/27/2015.
 */
/*jslint node: true */
'use strict';

var Application = function(obj) {
    var app = {};
    app.email = obj.email;
    app.password = obj.password;
    app.confirm = obj.confirm;
    app.status = "pending";
    app.message = null;

    app.isValid = function() {
        return app.status == "validated";
    };

    app.isInvalid = function() {
        return !app.isValid();
    };

    app.setInvalid = function(message) {
        app.status = "invalid";
        app.message = message;
    };

    app.validate = function(message) {
        app.status = "validated";
    };
    return app;
};

module.exports = Application;