module.exports = function(){
  var self=this;
  this.addPerson = function(req, res, next){
        console.log('add artist invoked')

        req.services(function(err,services){
              if(err){
                res.sendError(err)
              }
              else{
                console.log('-----------------------')
                console.log(data)
                var data     = req.body;
                var loc      = data.location
                var location = services.location;

                location.newlocation({lat:loc.lat,lng:loc.lng},function(err,results){
                    if(err){
                      res.sendError(err)
                    }
                    else{
                      location.getlocationId([loc.lat,loc.lng],function(err,results){
                          if(err){
                            res.sendError(err)
                          }
                          else{
                            var people = services.person;
                            console.log(results)
                            console.log(data)
                            data['location_id'] = results[0].id
                            console.log(data)
                            delete data.location;
                            console.log(data)
                            people.newPerson(data,function(err,results){
                                if(err){
                                  res.sendError(err)
                                }
                                else{
                                  res.send('success')
                                }

                            })
                          }

                      })
                    }

                })
              }

    })
  }
}
