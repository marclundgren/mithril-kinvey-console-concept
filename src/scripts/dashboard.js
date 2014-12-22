var dashboard = {
  controller: function() {},
  view: function() {
    return [
      m("h1", "Dashboard"),
      m("div", "app id: " + m.route.param("envId"))
    ];
  }
};
module.exports = dashboard;
