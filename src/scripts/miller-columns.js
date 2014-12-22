// miller-columns.js

var BreadCrumbs = require("./breadcrumbs");

var MillerColumns = {};

MillerColumns.tree = m.prop([]);
MillerColumns.path = m.prop([]);
MillerColumns.stack = m.prop([]);

MillerColumns.controller = function() {};

MillerColumns.columns = function() {
  var tree = MillerColumns.tree();

  var stack = MillerColumns.stack();

  if (!stack.length) {
    stack.push(tree[0]);

    MillerColumns.stack(stack)
  }

  var columns = stack.map(function(column) {
    var children = column.children;

    return m("div.column", [
      m("ol.column-list", [
        children.map(function(child) {
          var options = {};

          if (!child.url) {
            options.onclick = function() {
              if (child.children) {
                var stackIndex = stack.indexOf(child);
                var path       = MillerColumns.path();

                if (stackIndex > -1) {
                  while (stack[stack.length - 1].name !== child.name) {
                    stack.pop();
                    path.pop();
                  }
                }
                else {
                  // Todo: fix an issue columns need to be popped before pushing this column

                  stack.push(child);
                  path.push(child.name);
                }

                MillerColumns.stack(stack);
                MillerColumns.path(path);
              }
            };
          }

          return m("li", options, [
            child.url ? m("a", {
              config: m.route,
              href: child.url
            },child.name) : m("span", [
              m("span", child.name),
              m("span", " > ")
            ])
          ])
        })
      ])
    ])
  });

  return m("div.columns", {
    config: function(el) {
      el.scrollLeft = el.scrollWidth;
    }}, [columns]
  );
};

MillerColumns.view = function() {
  var path = MillerColumns.path();

  return m("div.miller-columns", [
    MillerColumns.columns(),
    BreadCrumbs.view({
      list: path
    })
  ]);
};

module.exports = MillerColumns;
