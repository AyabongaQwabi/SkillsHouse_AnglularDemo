
var self = studios;
studios.controller('signup',['$scope','$location','$http',function($scope,$location,$http){

    console.log('loaded signup controller')
    $scope.name='';
    $scope.alias='';
    $scope.cellphone='';
    $scope.city='';
    $scope.suburb='';
    $scope.street='';



    $scope.newArtist = function(){

        var data ={
            name: $scope.name,
            alias: $scope.alias,
            cellphone:$scope.cellphone,
            location:{lat:42.93123,lng:13.1832}
        }

        $http
             .post('http://192.168.43.46:3030/api/addArtist',data)
             .success(function(res){
                self.apiError = 'API ERROR>>>>>> ';
                console.log('success')
                if(res.error){
                    console.log('redirecting to error')
                   $location.path('/error');
                }
                else{
                    console.log('redirecting to welcome')
                    $location.path('/welcome');
                }
             })
             .error(function(err){
                console.log('failure')
                self.apiError ={msg:''};
                self.apiError.msg = "Eish harde baba something went wrong , but don't wory we're on it ... ["+err+"] ";
                $location.path('/error');
             })


    }
}])
