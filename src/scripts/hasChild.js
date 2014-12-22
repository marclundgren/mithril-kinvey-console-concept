var hasChild = function(list, child) {
  'use strict';
  var found = list[list.length -1].children.some(function(item) {
    return (item.name === child.name);
  });

  return found;
};

module.exports = hasChild;
