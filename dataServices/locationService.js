module.exports = function(connection){



  var executeQuery = function(query, data, cb){
      connection.query(query, data, cb);
  };

  this.newlocation = function(data,cb){
      executeQuery('insert into location set ?',data,cb);
  }
  this.getlocationId = function(data,cb){
      executeQuery('select id from location where lat like ? and lng like ?',data,cb);
  }
}
