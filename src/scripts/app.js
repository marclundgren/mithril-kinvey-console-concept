// Kinvey navigation app

m = require("mithril");

//use default mode
m.route.mode = "search"

var nav           = require("./nav");
var apps          = require("./apps");
var profile       = require("./profile");
var logout        = require("./logout");
var environments  = require("./environments");
var dashboard     = require("./dashboard");
var users         = require("./users");
var collection    = require("./collection");
var businessLogic = require("./businessLogic");
var files         = require("./files");
var push          = require("./push");
var apiConsole    = require("./api-console");
var analytic      = require("./analytic");
var settings      = require("./settings");

m.module(document.getElementById("kinveyNav"), nav);

m.route(document.getElementById("main"), "/", {
    "/"                                  : apps,
    "/profile"                           : profile,
    "/logout"                            : logout,
    "/environments"                      : environments,
    "/environments/:envId"               : dashboard,
    "/environments/:envId/users"         : users,
    "/environments/:envId/collection/:id": collection,
    "/environments/:envId/businessLogic" : businessLogic,
    "/environments/:envId/files"         : files,
    "/environments/:envId/push"          : push,
    "/environments/:envId/analytic"      : analytic,
    "/environments/:envId/api-console"   : apiConsole,
    "/environments/:envId/settings"      : settings
});
