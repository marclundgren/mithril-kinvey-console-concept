// Apps.js

var MillerColumn  = require("./miller-columns");

var kinveyAppsTree = require("./kinveyApps");

MillerColumn.tree(kinveyAppsTree);
MillerColumn.path(["Apps"]);

var apps = {
  controller: function() {
    this.list = [{
        name: "Expense Reporter - Tutorial App",
        environments: [{
          name: "Development",
          id  : "kid_Z15sKT0rO"
        }]
      }, {
        name: "My Music App",
        environments: [{
          name: "Development",
          id  : "kid_Z1qT5kyLu"
        }]
      }
    ];
  },
  view: function(ctrl) {
    return [
      MillerColumn.view(),
      m("h1", "apps"),
      m("ul.apps-list", ctrl.list.map(function(item) {
        return m("li", [
          m("h2", item.name),
          m("h3", "Environments"),
          m("ul.environments", item.environments.map(function(environment) {
            return m("li", [
              m("a[href='/environments/" + environment.id + "']", {config: m.route}, environment.name)
            ]);
          }))
        ]);
      }))
    ];
  }
};

module.exports = apps;
