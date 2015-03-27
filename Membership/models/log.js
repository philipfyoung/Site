/**
 * Created by Sandra on 3/27/2015.
 */
/*jslint node: true */
'use strict';
var assert = require('ass ert');

//TODOS: look up 'assert'
// constructor pattern
var Log = function(obj) {
    assert.ok(obj.subject && obj.subject && obj.userId, "need subject, entry and userId");
    var log = {};
    log.subject = obj.subject;
    log.createAt = new Date();
    log.userId = obj.userId;

    return log;
};   // creates log object