const { where } = require('sequelize');

function search(query) {
    return function(element) {
      for(var i in query) {
        if(query[i] != element[i]) {
          return false;
        }
      }
      return true;
    }
  }
  
exports.search = function(query) {
return users.filter(search(query));
}