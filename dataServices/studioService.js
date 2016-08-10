module.exports = function(connection){


  var count =0;
  var executeQuery = function(query, data, cb){
      console.log('connection '+(count+=1))
      connection.query(query, data, cb);
      // connection.end();

  };

  this.newStudio = function(data,cb){
      executeQuery('insert into studio set ?',data,cb);
  }

}
