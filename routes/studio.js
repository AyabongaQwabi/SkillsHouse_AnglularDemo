module.exports = function(){

  this.addStudio = function(req, res, next){

        req.services(function(err,services){
              var data = req.body;
              var personService = services.person;
              var studioService = services.studio;
              //add ownership details
              personService.newPerson(
                  {
                    name:data.name,
                    alias:data.musicname,
                    cellphone:data.cellphone
                  } ,

                 function(err,results) {
                    if(err) {
                      res.sendError(err)
                    }
                }
              )
              //add studio
              personService.getPerson(
                  data,
                  function(err,results) {

                      if(err) {
                        res.sendError(err)
                      }

                      studioService.newStudio(
                          {
                            name:data.studioname,
                            owner:results.id,
                            lattitude:data.lattitude,
                            longitude:data.longitude
                          } ,
                          function(err,results) {
                            if(err) {
                              res.sendError(err)
                            }
                          }
                    )
                 }
              )

        })
  }
}
