var nav = {
  controller: function() {},
  view: function() {
    return [
      m("h3.title", "marclundgren"),
      m("ul", [
        m("li", [
          m("a", {
            href: "/apps",
            config: m.route
          }, "apps")
        ]),
        m("li", [
          m("a[href='/profile']", {config: m.route}, "profile")
        ]),
        m("li", [
          m("a[href='/logout']", {config: m.route}, "logout")
        ])
      ])
    ];
  }
};

module.exports = nav;
