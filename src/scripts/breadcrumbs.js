// breadcrumbs.js

var BreadCrumbs = {};

BreadCrumbs.list = m.prop([]);

BreadCrumbs.controller = function() {
  this.list = BreadCrumbs.list();
};

BreadCrumbs.view = function(ctrl) {
  var list = ctrl.list;

  return m("div.breadcrumbs", [
    m("ol.breadcrumbs-list", list.map(function(item, index) {
      var breadcrumb;

      if ((index + 1) === list.length) {
        breadcrumb = [
          m("li", item)
        ];
      }
      else {
        breadcrumb = [
          m("li", [
            m("a", {
              config: m.route,
              href: item.url
            }, item)
          ]),
          m("li.separator", " / ")
        ]
      }

      return breadcrumb;
    }))
  ]);
};

module.exports = BreadCrumbs;
