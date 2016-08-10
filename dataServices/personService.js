module.exports = function(connection){


  var count=0;
  var executeQuery = function(query, data, cb){
      console.log('connection '+(count+=1))
      connection.query(query, data, cb);
      // connection.end();
  };

  this.newPerson = function(data,cb){
      executeQuery('insert into person set ?',data,cb);
  }
  this.getPerson = function(data,cb){
      executeQuery('select * from person where name like ?',data.name,cb);
  }
}
